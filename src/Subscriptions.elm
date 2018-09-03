module Subscriptions exposing (subscriptions)

import Platform.Sub exposing (batch)
import Ports
import Time
import Types exposing (ApiError(NotFound), Msg(DownloadUrlCreated, FileData, PasswordsResponse, Tick))


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
    Ports.getSub (PasswordsResponse << toMsg)


gotDownloadUrl : Sub Msg
gotDownloadUrl =
    Ports.gotDownloadUrl DownloadUrlCreated


subscriptions : Sub Msg
subscriptions =
    batch
        [ gotPasswords
        , gotDownloadUrl
        , Ports.fileData FileData

        -- , Time.every (Time.second * 10) Tick
        ]
