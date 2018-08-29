module Man exposing (Msg(..), Route(..), FormMsg(..), Model, update, init)

import Http exposing (Error(..))
import RemoteData exposing (RemoteData(..), WebData)
import Navigation exposing (Location, newUrl)
import UrlParser as U exposing (Parser, top, s, (</>))
import Debug
import PwdRec exposing (PwdRec)


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

type alias Model =
    { passwords : WebData (List PwdRec)
    , route : Route
    , form : PwdRec
    }

emptyModel : Model
emptyModel =
    { passwords = NotAsked
    , route = RtList
    , form = PwdRec.empty
    }

type FormMsg =
    FmName String
    | FmUrl String
    | FmPassword String
    | FmGroup String
    | FmComment String

type Msg
    = PasswordsResponse (WebData (List PwdRec))
    | RouteTo Location
    | NavigateTo Route
    | MsgForm FormMsg
    | SaveForm
    | Debug String
    | Upload


routeChanged : Route -> Model -> Model
routeChanged route model =
    let
        findRec name lst =
            case lst of
                []  -> PwdRec.empty
                x :: xs ->
                    if x.name == name
                        then x
                        else findRec name xs
        findRecX name pwds =
            case pwds of
                Success p -> findRec name p
                _ -> PwdRec.empty
    in
    case route of
        RtNew -> { model | form = PwdRec.empty }
        RtEdit name -> {model | form = findRecX name model.passwords}
        _ -> model

init : Location -> ( Model, Cmd Msg )
init location =
    ( { emptyModel | route = parseLocation location }, PwdRec.getPasswords PasswordsResponse)

updateForm : FormMsg -> PwdRec -> PwdRec
updateForm msg rec =
    case msg of
        FmName s -> {rec | name = s}
        FmUrl s -> {rec | url = s}
        FmPassword s -> {rec | password = s}
        FmGroup s -> {rec | grp = s}
        FmComment s -> {rec | comment = s}

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        PasswordsResponse d ->
            ( { model | passwords = d }, Cmd.none )
        RouteTo location ->
            let
                newRoute = parseLocation location
                newModel = routeChanged newRoute model
            in
            ( {newModel | route = newRoute }, Cmd.none)
        NavigateTo route ->
            (model, newUrl (toHash route))
        MsgForm fmsg ->
            ( {model | form = updateForm fmsg model.form}, Cmd.none)
        SaveForm ->
            let
                updatePwdList k v = List.map (\itm -> if itm.name==k then v else itm)
                newPasswords =
                    case model.route of
                        RtNew -> RemoteData.map ((::) model.form) model.passwords
                        RtEdit name -> RemoteData.map (updatePwdList name model.form) model.passwords
                        _ -> model.passwords
            in
            ({model|passwords=newPasswords, route = RtList}, Cmd.none)
        Debug str -> Debug.log str (model, Cmd.none)
        Upload ->
            (model, PwdRec.putPasswords Debug <| RemoteData.withDefault [] model.passwords)

