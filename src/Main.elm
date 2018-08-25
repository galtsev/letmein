module Main exposing (..)

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

optional : a -> Decoder a -> Decoder a
optional default decoder = D.map (withDefault default) (D.maybe decoder)

optStr : String -> Decoder String
optStr fn = optional "" (field fn string)

pwdRecDecoder : Decoder PwdRec
pwdRecDecoder = D.map5 PwdRec
    (field "name" string)
    (optStr "url")
    (optStr "password")
    (optStr "comment")
    (optStr "group")

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