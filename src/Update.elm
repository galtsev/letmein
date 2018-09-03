module Update exposing (update)

import Api
import Crypto.Strings as Cr
import Json.Decode as D
import Json.Encode as E
import Navigation exposing (newUrl)
import Platform.Cmd exposing (batch)
import Ports
import PwdForm
import PwdRec exposing (PwdRec)
import Random
import RemoteData exposing (RemoteData(..))
import Route exposing (Route(..), parseLocation, toHash)
import Time
import Types exposing (ApiError(..), EditForm, FormMsg(..), InitState(..), Model, Msg(..), emptyForm, emptyModel)


navigateTo : Route -> Cmd Msg
navigateTo r =
    newUrl (toHash r)


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
            { model | form = emptyForm }

        RtEdit name ->
            { model | form = { emptyForm | rec = findRec name model.passwords } }

        RtPasswordChangeForm ->
            { model | formPassword = "" }

        _ ->
            model


decrypt : String -> String -> Result String (List PwdRec)
decrypt pwd data =
    data
        |> Cr.decrypt pwd
        |> Result.andThen (D.decodeString (D.list PwdRec.decoder))


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model_ =
    let
        model =
            case msg of
                Tick _ ->
                    model_

                _ ->
                    { model_ | ticks = 0 }
    in
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
                            ( { model | passwords = List.sortBy .name pwds, initState = Ready, masterPassword = pwd }, Cmd.none )

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
            ( { model | form = PwdForm.updateForm fmsg model.form }, Cmd.none )

        SaveForm ->
            PwdForm.saveForm model

        Debug str ->
            Debug.log str ( model, Cmd.none )

        CopyToClipboard s ->
            ( model, Ports.writeClipboard s )

        DeleteItem name ->
            let
                newPasswords =
                    List.filter (\r -> r.name /= name) model.passwords

                ( newModel, cmd ) =
                    Api.update { model | passwords = newPasswords }
            in
            newModel ! [ cmd, navigateTo RtList ]

        GotSeed tm ->
            { model | seed = Random.initialSeed (truncate (Time.inMilliseconds tm)) } ! [ Cmd.none ]

        ChangeMasterPassword newPwd ->
            let
                ( newModel, cmd ) =
                    Api.update { model | masterPassword = newPwd }
            in
            newModel ! [ cmd, navigateTo RtList ]

        PrepareDownload ->
            let
                jsonPwds =
                    model.passwords
                        |> List.map PwdRec.encode
                        |> E.list
                        |> E.encode 2
            in
            model ! [ Ports.makeDownloadUrl jsonPwds ]

        DownloadUrlCreated url ->
            let
                download =
                    { url = url
                    , label = "Click here to start download"
                    }
            in
            { model | download = download } ! [ navigateTo RtDownload ]

        Tick _ ->
            let
                newTicks =
                    model.ticks + 1

                newModel =
                    if newTicks < 30 then
                        { model | ticks = newTicks }

                    else
                        { emptyModel | initState = LoggedOut }
            in
            ( newModel, Cmd.none )

        UploadPasswords ->
            model ! [ Ports.readFile "passwords-file" ]

        FileData data ->
            let
                newPasswords =
                    case D.decodeString (D.list PwdRec.decoder) data of
                        Ok pwds ->
                            pwds

                        -- TODO: show error
                        Err _ ->
                            model.passwords

                ( newModel, cmd ) =
                    Api.update { model | passwords = newPasswords }
            in
            newModel ! [ cmd, navigateTo RtList ]
