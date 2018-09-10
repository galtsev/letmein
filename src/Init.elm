module Init exposing (init)

import Api
import Navigation exposing (Location)
import PwdRec
import Route exposing (parseLocation)
import Task
import Time
import Types exposing (Model, Msg(GotSeed, PasswordsResponse), ViewState(..), emptyModel)


init : Location -> ( Model, Cmd Msg )
init location =
    emptyModel
        ! [ Api.get PasswordsResponse "passwords.json"
          , Time.now |> Task.perform GotSeed
          ]
