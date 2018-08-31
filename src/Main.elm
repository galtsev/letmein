module Main exposing (main)

import Navigation
import Types exposing (Msg(RouteTo), Model)
import Update exposing (update)
import View exposing (view)
import Init exposing (init)
import Subscriptions exposing (gotPasswords)


main : Program Never Model Msg
main =
    Navigation.program RouteTo
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> gotPasswords
        }
