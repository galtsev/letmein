module Subscriptions exposing (gotPasswords)

import Types exposing (Msg(PasswordsResponse), ApiError(NotFound))
import Ports exposing (getSub)

gotPasswords : Sub Msg
gotPasswords =
    let
        toMsg : Maybe String -> Result ApiError String
        toMsg v =
            case v of
                Nothing -> Err NotFound
                Just s -> Ok s
    in
    getSub (PasswordsResponse << toMsg)