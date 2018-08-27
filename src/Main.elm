module Main exposing (Model, Msg(..), PwdRec, getPasswords, init, main, optStr, optional, pwdRecDecoder, update, view, viewList, viewWebData)

import Html exposing (Html, div, text, input, button)
import Html.Attributes exposing (value, href, class)
import Html.Events exposing (onClick, onInput)
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

type FormMsg =
    FmName String
    | FmUrl String
    | FmPassword String
    | FmGroup String
    | FmComment String

type Msg
    = PasswordsResponse (WebData (List PwdRec))
    | RouteTo Location
    | NavigateTo Route
    | MsgForm FormMsg
    | SaveForm


getPasswords : Cmd Msg
getPasswords =
    Http.get "http://localhost:8080/data/passwords.json" (D.list pwdRecDecoder)
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

updateForm : FormMsg -> PwdRec -> PwdRec
updateForm msg rec =
    case msg of
        FmName s -> {rec | name = s}
        FmUrl s -> {rec | url = s}
        FmPassword s -> {rec | password = s}
        FmGroup s -> {rec | grp = s}
        FmComment s -> {rec | comment = s}

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
        MsgForm fmsg ->
            ( {model | form = updateForm fmsg model.form}, Cmd.none)
        SaveForm ->
            let
                upd k v itm = if itm.name==k then v else itm
                updatePwdList k v = List.map (\itm -> if itm.name==k then v else itm)
                newPasswords =
                    case model.route of
                        RtNew -> RemoteData.map ((::) model.form) model.passwords
                        RtEdit name -> RemoteData.map (updatePwdList name model.form) model.passwords
                        _ -> model.passwords
            in
            ({model|passwords=newPasswords, route = RtList}, Cmd.none)


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
        inp val msg = input [value val, onInput (MsgForm << msg)] []
        tbl =
            Html.table []
                [ row "name" <| inp rec.name FmName
                , row "url" <| inp rec.url FmUrl
                , row "password" <| inp rec.password FmPassword
                , row "group" <| inp rec.grp FmGroup
                , row "comment" <| Html.textarea [value rec.comment, onInput (MsgForm << FmComment)] []
                ]
    in
    div []
        [ div [] [Html.a [href <| toHash <| RtList] [text "<- Back to list"]]
        , tbl
        , div [] [button [onClick SaveForm] [text "save"]]
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
