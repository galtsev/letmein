module Update exposing (update)

import RemoteData
import Navigation exposing (newUrl)

import Types exposing (Msg(..), FormMsg(..), Model)
import PwdRec exposing (PwdRec)
import Route exposing (Route(..), toHash, parseLocation)


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
                RemoteData.Success p -> findRec name p
                _ -> PwdRec.empty
    in
    case route of
        RtNew -> { model | form = PwdRec.empty }
        RtEdit name -> {model | form = findRecX name model.passwords}
        _ -> model

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

