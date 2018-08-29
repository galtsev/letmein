module Api exposing (get, put)

import Http exposing (Error(..))
import Types exposing (Msg(..), ApiError(..))

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
get fn key =
    let
        req = Http.getString ("data/" ++ key)
    in
    Http.send (Result.mapError mapError >> fn) req

put : (Result ApiError String -> Msg) -> String -> String -> Cmd Msg
put fn key value =
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
