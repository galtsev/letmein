module PwdForm exposing (saveForm, updateForm)

import Api
import Navigation exposing (newUrl)
import PwdRec exposing (PwdRec)
import Route exposing (Route(RtEdit, RtList, RtNew), toHash)
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


saveForm : Model -> ( Model, Cmd Msg )
saveForm model =
    let
        invalid name =
            List.any (\r -> r.name == name) model.passwords

        isErr =
            let
                name =
                    model.form.rec.name
            in
            case model.state of
                RouteView RtNew ->
                    invalid name

                RouteView (RtEdit oldName) ->
                    name /= oldName && invalid name

                _ ->
                    False

        updateForm fm err =
            if isErr then
                { fm | err = err }

            else
                fm
    in
    if isErr then
        { model | form = updateForm model.form (Just "Duplicate name") } ! [ Cmd.none ]

    else
        let
            newPasswords =
                List.sortBy .name <|
                    case model.state of
                        RouteView RtNew ->
                            model.form.rec :: model.passwords

                        RouteView (RtEdit name) ->
                            List.map
                                (\itm ->
                                    if itm.name == name then
                                        model.form.rec

                                    else
                                        itm
                                )
                                model.passwords

                        _ ->
                            model.passwords
        in
        case Api.encrypt model.seed model.masterPassword newPasswords of
            Ok ( chiper, newSeed ) ->
                { model | passwords = newPasswords, seed = newSeed } ! [ Api.savePasswords chiper, newUrl (toHash RtList) ]

            Err err ->
                Debug.log err ( model, Cmd.none )
