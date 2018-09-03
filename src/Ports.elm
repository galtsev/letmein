port module Ports exposing (fileData, get, getSub, gotDownloadUrl, makeDownloadUrl, put, readFile, writeClipboard)


port put : ( String, String ) -> Cmd msg


port get : String -> Cmd msg


port getSub : (Maybe String -> msg) -> Sub msg


port writeClipboard : String -> Cmd msg


port makeDownloadUrl : String -> Cmd msg


port gotDownloadUrl : (String -> msg) -> Sub msg


port readFile : String -> Cmd msg


port fileData : (String -> msg) -> Sub msg
