module Main exposing (main)

import Navigation
import Man exposing (Msg(RouteTo), Model, init, update)
import View exposing (view)


main : Program Never Model Msg
main =
    Navigation.program RouteTo
        { init = init
        , update = update
        , view = view
        , subscriptions = \_ -> Sub.none
        }
