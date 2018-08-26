module Main exposing (Model, Msg(..), PwdRec, getPasswords, init, main, optStr, optional, pwdRecDecoder, update, view, viewList, viewWebData)

import Html exposing (Html, div, text, input, button)
import Html.Attributes exposing (value, href, class)
import Html.Events exposing (onClick)
import Http exposing (Error(..))
import Json.Decode as D exposing (Decoder, field, string)
import Maybe exposing (withDefault)
import RemoteData exposing (RemoteData(..), WebData)
import Navigation exposing (Location, newUrl)
import UrlParser as U exposing (Parser, top, s, (</>))


type alias PwdRec =
    { name : String
    , url : String
    , password : String
    , comment : String
    , grp : String
    }

emptyPwdRec : PwdRec
emptyPwdRec =
    { name = ""
    , url = ""
    , password = ""
    , comment = ""
    , grp = ""
    }

optional : a -> Decoder a -> Decoder a
optional default decoder =
    D.map (withDefault default) (D.maybe decoder)


optStr : String -> Decoder String
optStr fn =
    optional "" (field fn string)


pwdRecDecoder : Decoder PwdRec
pwdRecDecoder =
    D.map5 PwdRec
        (field "name" string)
        (optStr "url")
        (optStr "password")
        (optStr "comment")
        (optStr "group")

type Route =
    RtList
    | RtNew
    | RtEdit String
    | RtNotFound String

toHash : Route -> String
toHash route =
    case route of
        RtList -> "#"
        RtNew -> "#new"
        RtEdit name -> "#item/" ++ name ++ "/edit"
        RtNotFound _ -> "#notfound"

locationParser : Parser (Route -> a) a
locationParser = U.oneOf
    [ U.map RtList top
    , U.map RtNew (s "new")
    , U.map RtEdit (s "item" </> U.string </> s "edit")
    ]

parseLocation : Location -> Route
parseLocation loc = 
    withDefault (RtNotFound loc.hash)
    <| U.parseHash locationParser loc

type alias Model =
    { passwords : WebData (List PwdRec)
    , route : Route
    , form : PwdRec
    }

emptyModel : Model
emptyModel =
    { passwords = NotAsked
    , route = RtList
    , form = emptyPwdRec
    }

type Msg
    = PasswordsResponse (WebData (List PwdRec))
    | RouteTo Location
    | NavigateTo Route


getPasswords : Cmd Msg
getPasswords =
    Http.get "passwords.json" (D.list pwdRecDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map PasswordsResponse


init : Location -> ( Model, Cmd Msg )
init location =
    ( { emptyModel | route = parseLocation location }, getPasswords )

routeChanged : Route -> Model -> Model
routeChanged route model =
    let
        findRec name lst =
            case lst of
                []  -> emptyPwdRec
                x :: xs ->
                    if x.name == name
                        then x
                        else findRec name xs
        findRecX name pwds =
            case pwds of
                Success p -> findRec name p
                _ -> emptyPwdRec
    in
    case route of
        RtNew -> { model | form = emptyPwdRec }
        RtEdit name -> {model | form = findRecX name model.passwords}
        _ -> model

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        PasswordsResponse d ->
            ( { model | passwords = d }, Cmd.none )
        RouteTo location ->
            let
                newRoute = parseLocation location
                newModel = routeChanged newRoute model
            in
            ( {newModel | route = newRoute }, Cmd.none)
        NavigateTo route ->
            (model, newUrl (toHash route))


viewWebData : (a -> Html Msg) -> WebData a -> Html Msg
viewWebData f wd =
    let
        errMsg s =
            div [] [ text s ]

        showErr e =
            case e of
                BadUrl s ->
                    errMsg ("Bad Url " ++ s)

                Timeout ->
                    errMsg "Timed out"

                NetworkError ->
                    errMsg "Network error"

                BadStatus resp ->
                    errMsg
                        ("Error GET "
                            ++ resp.url
                            ++ ": "
                            ++ toString resp.status.code
                            ++ " - "
                            ++ resp.status.message
                        )

                BadPayload s resp ->
                    errMsg ("Error - Bad Payload:" ++ s)
    in
    case wd of
        NotAsked ->
            div [] [ text "not asked" ]

        Loading ->
            div [] [ text "loading..." ]

        Failure e ->
            showErr e

        Success a ->
            f a


viewList : List PwdRec -> Html Msg
viewList pwds =
    let
        viewRec r =
            div [] [ Html.a [href <| toHash <| RtEdit r.name] [text r.name ]]
        lst = div [] <| List.map viewRec pwds
    in
    div []
        [ button [onClick <| NavigateTo RtNew] [text "New"]
        , lst
        ]
    

viewForm : PwdRec -> Html Msg
viewForm rec =
    let
        row label fld =
            Html.tr []
                [ Html.td [] [text label]
                , Html.td [] [fld]
                ]
        tbl =
            Html.table []
                [ row "name" <| input [value rec.name] []
                , row "url" <| input [value rec.url] []
                , row "password" <| input [value rec.password] []
                ]
    in
    div []
        [ div [] [Html.a [href <| toHash <| RtList] [text "<- Back to list"]]
        , tbl
        ]


view : Model -> Html Msg
view model =
    case model.route of
        RtList -> viewWebData viewList model.passwords
        RtNew -> viewForm model.form
        RtEdit name -> viewForm model.form
        RtNotFound path -> div [] [text ("Not found:" ++ path)]


main : Program Never Model Msg
main =
    Navigation.program RouteTo
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
