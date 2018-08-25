module Main exposing (main)

import Html exposing (Html, div, text)
import Json.Decode as D exposing (Decoder,string, field)
import Maybe exposing (withDefault)

type alias PwdRec =
    { name: String
    , url: String
    , password: String
    , comment: String
    , grp: String
    }

optStr : Decoder String
optStr = D.map (withDefault "") (D.maybe string)

pwdRecDecoder : Decoder PwdRec
pwdRecDecoder = D.map5 PwdRec
    (field "name" string)
    (field "url" optStr)
    (field "password" optStr)
    (field "comment" optStr)
    (field "group" optStr)

type alias Model = 
    { passwords: List PwdRec
    }

type Msg = MsgNope

init : (Model, Cmd Msg)
init = ({passwords = []}, Cmd.none)

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    (model, Cmd.none)

view : Model -> Html Msg
view model = div [] [text "hello"]

main : Program Never Model Msg
main = Html.program
    { init = init
    , update = update
    , view = view
    , subscriptions = \_ -> Sub.none
    }