module PwdForm exposing (saveForm, updateForm)

import Api
import Navigation exposing (newUrl)
import PwdRec exposing (PwdRec)
import Route exposing (Route(RtEdit, RtList, RtNew), navigateTo)
import Types exposing (EditForm, FormMsg(..), Model, Msg, ViewState(..))


updateForm : FormMsg -> EditForm -> EditForm
updateForm msg frm =
    let
        rec =
            frm.rec

        pp r =
            { frm | rec = r }
    in
    case msg of
        FmName s ->
            pp { rec | name = s }

        FmUrl s ->
            pp { rec | url = s }

        FmUser s ->
            pp { rec | user = s }

        FmPassword s ->
            pp { rec | password = s }

        FmGroup s ->
            pp { rec | grp = s }

        FmComment s ->
            pp { rec | comment = s }

        FmFlipPwdVisible ->
            { frm | pwdVisible = not frm.pwdVisible }


saveForm : Maybe String -> PwdRec -> Model -> ( Model, Cmd Msg )
saveForm oldName rec model =
    let
        invalid name =
            List.any (\r -> r.name == name) model.passwords

        isErr =
            case oldName of
                Nothing ->
                    invalid rec.name

                Just name ->
                    name /= rec.name && invalid rec.name
    in
    if isErr then
        { model | err = Just "Duplicate name" } ! [ Cmd.none ]

    else
        let
            newPasswords =
                List.sortBy .name <|
                    case oldName of
                        Nothing ->
                            rec :: model.passwords

                        Just name ->
                            List.map
                                (\itm ->
                                    if itm.name == name then
                                        rec

                                    else
                                        itm
                                )
                                model.passwords
        in
        case Api.encrypt model.seed model.masterPassword newPasswords of
            Ok ( chiper, newSeed ) ->
                { model | passwords = newPasswords, seed = newSeed } ! [ Api.savePasswords chiper, navigateTo RtList ]

            Err err ->
                Debug.log err ( model, Cmd.none )
