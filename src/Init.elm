module Init exposing (init)

import Navigation exposing (Location)
import Types exposing (Msg(PasswordsResponse, GotSeed), Model, emptyModel)
import Route exposing (parseLocation)
import PwdRec
import Api
import Time
import Task


init : Location -> ( Model, Cmd Msg )
init location =
    { emptyModel | route = parseLocation location } !
        [ Api.get PasswordsResponse "passwords.json"
        , Time.now |> Task.perform GotSeed
        ]
