module Route exposing (Route(..), toHash, parseLocation)

import Navigation exposing (Location)
import UrlParser as U exposing (Parser, top, s, (</>))

type Route =
    RtList
    | RtNew
    | RtEdit String
    | RtNotFound String

toHash : Route -> String
toHash route =
    case route of
        RtList -> "#"
        RtNew -> "#new"
        RtEdit name -> "#item/" ++ name ++ "/edit"
        RtNotFound _ -> "#notfound"

locationParser : Parser (Route -> a) a
locationParser = U.oneOf
    [ U.map RtList top
    , U.map RtNew (s "new")
    , U.map RtEdit (s "item" </> U.string </> s "edit")
    ]

parseLocation : Location -> Route
parseLocation loc = 
    Maybe.withDefault (RtNotFound loc.hash)
    <| U.parseHash locationParser loc

