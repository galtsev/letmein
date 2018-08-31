port module Ports exposing (put, get, getSub)

port put : (String, String) -> Cmd msg

port get : String -> Cmd msg

port getSub : (Maybe String -> msg) -> Sub msg