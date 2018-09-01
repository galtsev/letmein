module Api exposing (get, put, update)

import Http exposing (Error(..))
import Types exposing (Msg(..), ApiError(..), Model)
import Json.Encode as E
import PwdRec
import Crypto.Strings as Cr
import Ports
import Random

mapError : Error -> ApiError
mapError err =
    case err of
        BadUrl s -> Other s
        Timeout -> Other "Timeout"
        NetworkError -> Other "Network error"
        BadStatus resp ->
            case resp.status.code of
                404 -> NotFound
                _ -> Other resp.status.message
        BadPayload s _ -> Other s

get : (Result ApiError String -> Msg) -> String -> Cmd Msg
get _ key = Ports.get key

put : (Result ApiError String -> Msg) -> String -> String -> Cmd Msg
put _ key value = Ports.put (key, value)


seed : Random.Seed
seed = Random.initialSeed  0

update : Model -> Cmd Msg
update model =
    let
        jsonPwds : String
        jsonPwds = 
            model.passwords
            |> List.map PwdRec.encode
            |> E.list
            |> E.encode 2
            |> Cr.justEncrypt seed model.masterPassword
        dumpRes : Result ApiError String -> String
        dumpRes r =
            case r of
                Ok s -> s
                Err e -> Types.errToString e
    in
    put (dumpRes >> Debug) "passwords.json" jsonPwds

getX : (Result ApiError String -> Msg) -> String -> Cmd Msg
getX fn key =
    let
        req = Http.getString ("data/" ++ key)
    in
    Http.send (Result.mapError mapError >> fn) req

putX : (Result ApiError String -> Msg) -> String -> String -> Cmd Msg
putX fn key value =
    let
        url = "data/" ++ key
        req = Http.request
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
