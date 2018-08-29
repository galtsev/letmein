module Update exposing (update)

import RemoteData exposing (RemoteData(..))
import Navigation exposing (newUrl)

import Types exposing (Msg(..), FormMsg(..), ApiError(..), Model)
import PwdRec exposing (PwdRec)
import Route exposing (Route(..), toHash, parseLocation)
import Json.Decode as D
import Json.Encode as E
import Api


routeChanged : Route -> Model -> Model
routeChanged route model =
    let
        findRec : String -> List PwdRec -> PwdRec
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
            let
                decode : String -> Result ApiError (List PwdRec)
                decode json = D.decodeString (D.list PwdRec.decoder) json
                    |> Result.mapError Other

                pwds : RemoteData ApiError (List PwdRec)
                pwds = Result.andThen decode d
                    |> RemoteData.fromResult
            in
            ( { model | passwords = pwds }, Cmd.none )
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
            let
                jsonPwds : String
                jsonPwds = RemoteData.withDefault [] model.passwords
                    |> List.map PwdRec.encode
                    |> E.list
                    |> E.encode 2
                dumpRes : Result ApiError String -> String
                dumpRes r =
                    case r of
                        Ok s -> s
                        Err e -> Types.errToString e
                cmd = Api.put (dumpRes >> Debug) "passwords.json" jsonPwds
            in
            (model, cmd)

