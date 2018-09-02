port module Ports exposing (get, getSub, gotDownloadUrl, makeDownloadUrl, put, writeClipboard)


port put : ( String, String ) -> Cmd msg


port get : String -> Cmd msg


port getSub : (Maybe String -> msg) -> Sub msg


port writeClipboard : String -> Cmd msg


port makeDownloadUrl : String -> Cmd msg


port gotDownloadUrl : (String -> msg) -> Sub msg
