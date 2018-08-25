module Main exposing (Model, Msg(..), PwdRec, getPasswords, init, main, optStr, optional, pwdRecDecoder, update, view, viewList, viewWebData)

import Html exposing (Html, div, text)
import Http exposing (Error(..))
import Json.Decode as D exposing (Decoder, field, string)
import Maybe exposing (withDefault)
import RemoteData exposing (RemoteData(..), WebData)


type alias PwdRec =
    { name : String
    , url : String
    , password : String
    , comment : String
    , grp : String
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


type alias Model =
    { passwords : WebData (List PwdRec)
    }


type Msg
    = PasswordsResponse (WebData (List PwdRec))


getPasswords : Cmd Msg
getPasswords =
    Http.get "passwords.json" (D.list pwdRecDecoder)
        |> RemoteData.sendRequest
        |> Cmd.map PasswordsResponse


init : ( Model, Cmd Msg )
init =
    ( { passwords = NotAsked }, getPasswords )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        PasswordsResponse d ->
            ( { model | passwords = d }, Cmd.none )


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
            div [] [ text r.name ]
    in
    div [] <| List.map viewRec pwds


view : Model -> Html Msg
view model =
    div []
        [ viewWebData viewList model.passwords ]


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
