module Route exposing (Route(..), parseLocation, toHash)

import Navigation exposing (Location)
import UrlParser as U exposing ((</>), Parser, s, top)


type Route
    = RtList
    | RtNew
    | RtEdit String
    | RtNotFound String
    | RtMenu


toHash : Route -> String
toHash route =
    case route of
        RtList ->
            "#"

        RtNew ->
            "#new"

        RtEdit name ->
            "#item/" ++ name ++ "/edit"

        RtNotFound _ ->
            "#notfound"

        RtMenu ->
            "#menu"


locationParser : Parser (Route -> a) a
locationParser =
    U.oneOf
        [ U.map RtList top
        , U.map RtNew (s "new")
        , U.map RtMenu (s "menu")
        , U.map RtEdit (s "item" </> U.string </> s "edit")
        ]


parseLocation : Location -> Route
parseLocation loc =
    Maybe.withDefault (RtNotFound loc.hash) <|
        U.parseHash locationParser loc
