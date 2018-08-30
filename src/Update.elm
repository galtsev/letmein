module Update exposing (update)

import RemoteData exposing (RemoteData(..))
import Navigation exposing (newUrl)

import Types exposing (Msg(..), FormMsg(..), ApiError(..), InitState(..), Model)
import PwdRec exposing (PwdRec)
import Route exposing (Route(..), toHash, parseLocation)
import Json.Decode as D
import Json.Encode as E
import Api
import Random
import Crypto.Strings as Cr

seed : Random.Seed
seed = Random.initialSeed  0


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
    in
    case route of
        RtNew -> { model | form = PwdRec.empty }
        RtEdit name -> {model | form = findRec name model.passwords}
        _ -> model

updateForm : FormMsg -> PwdRec -> PwdRec
updateForm msg rec =
    case msg of
        FmName s -> {rec | name = s}
        FmUrl s -> {rec | url = s}
        FmPassword s -> {rec | password = s}
        FmGroup s -> {rec | grp = s}
        FmComment s -> {rec | comment = s}

decrypt : String -> String -> Result String (List PwdRec)
decrypt pwd data =
    data
    |> Cr.decrypt pwd
    |> Result.andThen (D.decodeString (D.list PwdRec.decoder))

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        PasswordsResponse d ->
            let
                newState =
                    case d of
                        Err NotFound -> Missing
                        Err (Other err) -> LoadingFailed err
                        Ok data -> Sealed False data
            in
            ( { model | initState = newState}, Cmd.none )
        FmLogin pwd ->
            ( { model | formPassword = pwd}, Cmd.none)
        TryPassword ->
            let
                pwd = model.formPassword
            in
            case model.initState of
                Sealed _ data ->
                    case decrypt pwd data of
                        Ok pwds ->
                            ( { model | passwords = pwds, initState = Ready pwd}, Cmd.none)
                        Err str ->
                            ( { model | initState = Sealed True data, formPassword = ""}, Cmd.none)
                Missing ->
                    ( { model | passwords = [], initState = Ready pwd}, Cmd.none)
                _ -> (model, Cmd.none)

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
                newPasswords =
                    case model.route of
                        RtNew -> model.form::model.passwords
                        RtEdit name -> List.map (\itm -> if itm.name==name then model.form else itm) model.passwords
                        _ -> model.passwords
            in
            ({model|passwords=newPasswords}, newUrl (toHash RtList))
        Debug str -> Debug.log str (model, Cmd.none)
        Upload ->
            let
                pwd = case model.initState of
                    Ready p -> p
                    _ -> ""
                jsonPwds : String
                jsonPwds = 
                    model.passwords
                    |> List.map PwdRec.encode
                    |> E.list
                    |> E.encode 2
                    |> Cr.justEncrypt seed pwd
                dumpRes : Result ApiError String -> String
                dumpRes r =
                    case r of
                        Ok s -> s
                        Err e -> Types.errToString e
                cmd = Api.put (dumpRes >> Debug) "passwords.json" jsonPwds
            in
            (model, cmd)

