port module Ports exposing (put, get, getSub, writeClipboard)

port put : (String, String) -> Cmd msg

port get : String -> Cmd msg

port getSub : (Maybe String -> msg) -> Sub msg

port writeClipboard : String -> Cmd msg