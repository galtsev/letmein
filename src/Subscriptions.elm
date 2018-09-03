module Subscriptions exposing (subscriptions)

import Platform.Sub exposing (batch)
import Ports exposing (getSub)
import Time
import Types exposing (ApiError(NotFound), Msg(DownloadUrlCreated, PasswordsResponse, Tick))


gotPasswords : Sub Msg
gotPasswords =
    let
        toMsg : Maybe String -> Result ApiError String
        toMsg v =
            case v of
                Nothing ->
                    Err NotFound

                Just s ->
                    Ok s
    in
    getSub (PasswordsResponse << toMsg)


gotDownloadUrl : Sub Msg
gotDownloadUrl =
    Ports.gotDownloadUrl DownloadUrlCreated


subscriptions : Sub Msg
subscriptions =
    batch
        [ gotPasswords
        , gotDownloadUrl

        -- , Time.every (Time.second * 10) Tick
        ]
