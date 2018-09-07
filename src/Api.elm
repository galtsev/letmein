module Api exposing (encrypt, get, put, savePasswords)

import Crypto.Strings as Cr
import Http exposing (Error(..))
import Json.Encode as E
import Ports
import PwdRec exposing (PwdRec)
import Random
import Types exposing (ApiError(..), Model, Msg(..))


mapError : Error -> ApiError
mapError err =
    case err of
        BadUrl s ->
            Other s

        Timeout ->
            Other "Timeout"

        NetworkError ->
            Other "Network error"

        BadStatus resp ->
            case resp.status.code of
                404 ->
                    NotFound

                _ ->
                    Other resp.status.message

        BadPayload s _ ->
            Other s


get : (Result ApiError String -> Msg) -> String -> Cmd Msg
get _ key =
    Ports.get key


put : (Result ApiError String -> Msg) -> String -> String -> Cmd Msg
put _ key value =
    Ports.put ( key, value )


encrypt : Random.Seed -> String -> List PwdRec -> Result String ( String, Random.Seed )
encrypt seed masterPassword pwds =
    pwds
        |> List.map PwdRec.encode
        |> E.list
        |> E.encode 2
        |> Cr.encrypt seed masterPassword


savePasswords : String -> Cmd Msg
savePasswords =
    put (\_ -> Debug "saved") "passwords.json"


getX : (Result ApiError String -> Msg) -> String -> Cmd Msg
getX fn key =
    let
        req =
            Http.getString ("data/" ++ key)
    in
    Http.send (Result.mapError mapError >> fn) req


putX : (Result ApiError String -> Msg) -> String -> String -> Cmd Msg
putX fn key value =
    let
        url =
            "data/" ++ key

        req =
            Http.request
                { method = "PUT"
                , headers = []
                , url = url
                , body = Http.stringBody "application/binary" value
                , expect = Http.expectString
                , timeout = Nothing
                , withCredentials = False
                }
    in
    Http.send (Result.mapError mapError >> fn) req
