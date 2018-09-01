module Update exposing (update)

import Api
import Crypto.Strings as Cr
import Json.Decode as D
import Json.Encode as E
import Navigation exposing (newUrl)
import Ports
import PwdRec exposing (PwdRec)
import Random
import RemoteData exposing (RemoteData(..))
import Route exposing (Route(..), parseLocation, toHash)
import Time
import Types exposing (ApiError(..), FormMsg(..), InitState(..), Model, Msg(..))


routeChanged : Route -> Model -> Model
routeChanged route model =
    let
        findRec : String -> List PwdRec -> PwdRec
        findRec name lst =
            case lst of
                [] ->
                    PwdRec.empty

                x :: xs ->
                    if x.name == name then
                        x

                    else
                        findRec name xs
    in
    case route of
        RtNew ->
            { model | form = PwdRec.empty }

        RtEdit name ->
            { model | form = findRec name model.passwords }

        RtPasswordChangeForm ->
            { model | formPassword = "" }

        _ ->
            model


updateForm : FormMsg -> PwdRec -> PwdRec
updateForm msg rec =
    case msg of
        FmName s ->
            { rec | name = s }

        FmUrl s ->
            { rec | url = s }

        FmPassword s ->
            { rec | password = s }

        FmGroup s ->
            { rec | grp = s }

        FmComment s ->
            { rec | comment = s }


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
                        Err NotFound ->
                            Missing

                        Err (Other err) ->
                            LoadingFailed err

                        Ok data ->
                            Sealed False data
            in
            ( { model | initState = newState }, Cmd.none )

        FmLogin pwd ->
            ( { model | formPassword = pwd }, Cmd.none )

        TryPassword ->
            let
                pwd =
                    model.formPassword
            in
            case model.initState of
                Sealed _ data ->
                    case decrypt pwd data of
                        Ok pwds ->
                            ( { model | passwords = pwds, initState = Ready, masterPassword = pwd }, Cmd.none )

                        Err str ->
                            ( { model | initState = Sealed True data, formPassword = "" }, Cmd.none )

                Missing ->
                    ( { model | passwords = [], initState = Ready, masterPassword = pwd }, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        RouteTo location ->
            let
                newRoute =
                    parseLocation location

                newModel =
                    routeChanged newRoute model
            in
            ( { newModel | route = newRoute }, Cmd.none )

        NavigateTo route ->
            ( model, newUrl (toHash route) )

        MsgForm fmsg ->
            ( { model | form = updateForm fmsg model.form }, Cmd.none )

        SaveForm ->
            let
                newPasswords =
                    case model.route of
                        RtNew ->
                            model.form :: model.passwords

                        RtEdit name ->
                            List.map
                                (\itm ->
                                    if itm.name == name then
                                        model.form

                                    else
                                        itm
                                )
                                model.passwords

                        _ ->
                            model.passwords

                ( newModel, updateCmd ) =
                    Api.update { model | passwords = newPasswords }
            in
            newModel ! [ updateCmd, newUrl (toHash RtList) ]

        Debug str ->
            Debug.log str ( model, Cmd.none )

        CopyToClipboard s ->
            ( model, Ports.writeClipboard s )

        SelectItem name ->
            let
                selected =
                    if model.selectedItem == Just name then
                        Nothing

                    else
                        Just name
            in
            ( { model | selectedItem = selected }, Cmd.none )

        DeleteItem name ->
            let
                newPasswords =
                    List.filter (\r -> r.name /= name) model.passwords

                newModel =
                    { model | passwords = newPasswords, selectedItem = Nothing }
            in
            Api.update newModel

        GotSeed tm ->
            { model | seed = Random.initialSeed (truncate (Time.inMilliseconds tm)) } ! [ Cmd.none ]

        ChangeMasterPassword newPwd ->
            let
                ( newModel, cmd ) =
                    Api.update { model | masterPassword = newPwd }
            in
            newModel ! [ cmd, newUrl (toHash RtList) ]
