module Packages exposing (main)

import Html exposing (Html, div, text, ul, li, a)
import Html.Attributes exposing (href)

data = 
    [ "elm-lang/core"
    , "elm-lang/html"
    , "elm-lang/http"
    , "elm-community/elm-test"
    ]

viewItem : String -> Html msg
viewItem pkg =
    li [] [ a [href ("https://package.elm-lang.org/packages/" ++ pkg ++ "/latest")] [text pkg]]

main = 
    div [] [ ul [] <| List.map viewItem data ]
