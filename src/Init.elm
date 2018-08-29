module Init exposing (init)

import Navigation exposing (Location)
import Types exposing (Msg(PasswordsResponse), Model, emptyModel)
import Route exposing (parseLocation)
import PwdRec
import Api


init : Location -> ( Model, Cmd Msg )
init location =
    ( { emptyModel | route = parseLocation location }, Api.get PasswordsResponse "passwords.json")
