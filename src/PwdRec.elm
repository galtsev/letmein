module PwdRec exposing (PwdRec, empty, decoder, encode, getPasswords, putPasswords)

import Json.Decode as D exposing (Decoder, field, string)
import Json.Encode as E
import Random
import Crypto.Strings as Cs
import Http
import RemoteData


masterPwd : String
masterPwd = "letmein"

type alias PwdRec =
    { name : String
    , url : String
    , password : String
    , comment : String
    , grp : String
    }

empty : PwdRec
empty =
    { name = ""
    , url = ""
    , password = ""
    , comment = ""
    , grp = ""
    }

optional : a -> Decoder a -> Decoder a
optional default decoder =
    D.map (Maybe.withDefault default) (D.maybe decoder)


optStr : String -> Decoder String
optStr fn =
    optional "" (field fn string)


decoder : Decoder PwdRec
decoder =
    D.map5 PwdRec
        (field "name" string)
        (optStr "url")
        (optStr "password")
        (optStr "comment")
        (optStr "group")

encode : PwdRec -> E.Value
encode p =
    E.object
        [ ("name", E.string p.name)
        , ("url", E.string p.url)
        , ("password", E.string p.password)
        , ("comment", E.string p.comment)
        , ("group", E.string p.grp)
        ]

seed : Random.Seed
seed = Random.initialSeed 0


getPasswords : (RemoteData.WebData (List PwdRec) -> msg) -> Cmd msg
getPasswords msg =
    Http.get "data/passwords.json" (D.list decoder)
        |> RemoteData.sendRequest
        |> Cmd.map msg

putPasswords : (String -> msg) -> List PwdRec -> Cmd msg
putPasswords msg pwds =
    let
        jsonBody = E.encode 2 (E.list << List.map encode <| pwds)
        body = Cs.justEncrypt seed masterPwd jsonBody
        url = "data/passwords.json.aes"
        req = Http.request
            { method = "PUT"
            , headers = []
            , url = url
            , body = Http.stringBody "application/binary" body
            , expect = Http.expectStringResponse (\_ -> Ok ())
            , timeout = Nothing
            , withCredentials = False
            }
    in
    Http.send (msg << toString) req