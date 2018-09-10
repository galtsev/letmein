module Route exposing (Route(..), navigateTo, parseLocation, toHash)

import Http
import Navigation exposing (Location, newUrl)
import UrlParser as U exposing ((</>), Parser, s, top)


type Route
    = RtList
    | RtNew
    | RtEdit String
    | RtItemMenu String
    | RtNotFound String
    | RtMenu
    | RtPasswordChangeForm
    | RtDownload
    | RtUpload


toHash : Route -> String
toHash route =
    case route of
        RtList ->
            "#"

        RtNew ->
            "#new"

        RtEdit name ->
            "#item/" ++ Http.encodeUri name ++ "/edit"

        RtItemMenu name ->
            "#item/" ++ Http.encodeUri name ++ "/actions"

        RtNotFound _ ->
            "#notfound"

        RtMenu ->
            "#menu"

        RtPasswordChangeForm ->
            "#change_pwd"

        RtDownload ->
            "#download"

        RtUpload ->
            "#upload"


locationParser : Parser (Route -> a) a
locationParser =
    U.oneOf
        [ U.map RtList top
        , U.map RtNew (s "new")
        , U.map RtMenu (s "menu")
        , U.map RtDownload (s "download")
        , U.map RtUpload (s "upload")
        , U.map RtPasswordChangeForm (s "change_pwd")
        , U.map RtEdit (s "item" </> U.map (Maybe.withDefault "" << Http.decodeUri) U.string </> s "edit")
        , U.map RtItemMenu (s "item" </> U.map (Maybe.withDefault "" << Http.decodeUri) U.string </> s "actions")
        ]


parseLocation : Location -> Route
parseLocation loc =
    Maybe.withDefault (RtNotFound loc.hash) <|
        U.parseHash locationParser loc


navigateTo : Route -> Cmd msg
navigateTo r =
    newUrl (toHash r)
