module Main exposing (main)

import Init exposing (init)
import Navigation
import Subscriptions exposing (subscriptions)
import Types exposing (Model, Msg(RouteTo))
import Update exposing (update)
import View exposing (view)


main : Program Never Model Msg
main =
    Navigation.program RouteTo
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> subscriptions
        }
