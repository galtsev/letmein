module Update exposing (update)

import Api
import Json.Decode as D
import Json.Encode as E
import Navigation exposing (Location)
import Ports
import PwdForm
import PwdRec exposing (PwdRec)
import Random
import RemoteData exposing (RemoteData(..))
import Route exposing (Route(..), navigateTo, parseLocation, toHash)
import Time
import Types exposing (ApiError(..), EditForm, FormMsg(..), InitState(..), Model, Msg(..), ViewState(..), emptyForm, emptyModel)


unexpectedMessage : ViewState -> Msg -> Model -> ( Model, Cmd Msg )
unexpectedMessage st msg model =
    Debug.log ("Unexpected message " ++ toString msg ++ " for state " ++ toString st) (model ! [])


routeChanged : Location -> Model -> ( Model, Cmd Msg )
routeChanged loc model =
    let
        route =
            parseLocation loc

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

        newModel =
            { model | state = RouteView route }

        newState : ViewState -> ( Model, Cmd Msg )
        newState st =
            { model | state = st } ! []
    in
    case route of
        RtNew ->
            newState <| EditView Nothing emptyForm

        RtEdit name ->
            newState <| EditView (Just name) { emptyForm | rec = findRec name model.passwords }

        RtPasswordChangeForm ->
            { newModel | formPassword = "" } ! []

        RtDownload ->
            let
                jsonPwds =
                    model.passwords
                        |> List.map PwdRec.encode
                        |> E.list
                        |> E.encode 2
            in
            { model | state = DownloadView Nothing } ! [ Ports.makeDownloadUrl jsonPwds ]

        RtUpload ->
            newState UploadView

        RtMenu ->
            newState MenuView

        RtList ->
            newState ListView

        RtNotFound path ->
            newState <| ErrorView <| "Not found: " ++ path

        RtItemMenu name ->
            newState <| ItemMenuView <| findRec name model.passwords


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
                    case Api.decrypt pwd data of
                        Ok pwds ->
                            ( { model | passwords = List.sortBy .name pwds, initState = Ready, masterPassword = pwd }, navigateTo RtList )

                        Err str ->
                            ( { model | initState = Sealed True data, formPassword = "" }, Cmd.none )

                Missing ->
                    ( { model | passwords = [], initState = Ready, masterPassword = pwd }, Cmd.none )

                _ ->
                    ( model, Cmd.none )

        RouteTo location ->
            routeChanged location model

        NavigateTo route ->
            model ! [ navigateTo route ]

        MsgForm fmsg ->
            case model.state of
                EditView key form ->
                    ( { model | state = EditView key <| PwdForm.updateForm fmsg form }, Cmd.none )

                st ->
                    unexpectedMessage st msg model

        SaveForm ->
            case model.state of
                EditView key form ->
                    PwdForm.saveForm key form.rec model

                st ->
                    unexpectedMessage st msg model

        Debug str ->
            Debug.log str ( model, Cmd.none )

        CopyToClipboard s ->
            ( model, Ports.writeClipboard s )

        DeleteItem name ->
            let
                newPasswords =
                    List.filter (\r -> r.name /= name) model.passwords
            in
            case Api.encrypt model.seed model.masterPassword newPasswords of
                Ok ( chiper, newSeed ) ->
                    { model | passwords = newPasswords, seed = newSeed } ! [ Api.savePasswords chiper, navigateTo RtList ]

                Err err ->
                    Debug.log err ( model, Cmd.none )

        GotSeed tm ->
            { model | seed = Random.initialSeed (truncate (Time.inMilliseconds tm)) } ! [ Cmd.none ]

        ChangeMasterPassword newPwd ->
            case Api.encrypt model.seed newPwd model.passwords of
                Ok ( chiper, newSeed ) ->
                    { model | masterPassword = newPwd, seed = newSeed } ! [ Api.savePasswords chiper, navigateTo RtList ]

                Err err ->
                    Debug.log err ( model, Cmd.none )

        DownloadUrlCreated url ->
            let
                download =
                    { url = url
                    , label = "Click here to start download"
                    }
            in
            { model | state = DownloadView (Just download) } ! []

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
            in
            case Api.encrypt model.seed model.masterPassword newPasswords of
                Ok ( chiper, newSeed ) ->
                    { model | passwords = newPasswords, seed = newSeed } ! [ Api.savePasswords chiper, navigateTo RtList ]

                Err err ->
                    Debug.log err ( model, Cmd.none )

        FmFilter s ->
            { model | passwordsFilter = s } ! [ Cmd.none ]
