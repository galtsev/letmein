module View exposing (view)

import Html exposing (Html, button, div, input, text)
import Html.Attributes as Attr exposing (class, href, type_, value)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))
import Types exposing (ApiError(..), EditForm, FormMsg(..), InitState(..), Model, Msg(..))


link : String -> Route -> Html Msg
link label route =
    Html.a [ onClick (NavigateTo route), class "action" ] [ text label ]


action : String -> Msg -> Html Msg
action label msg =
    Html.a [ onClick msg, class "action" ] [ text label ]


backToList : Html Msg
backToList =
    div [ class "header" ]
        [ Html.i [ class "fa fa-arrow-left action" ] []
        , link " back to list" RtList
        ]


row : List (Html Msg) -> Html Msg
row content =
    div [ class "rec" ] content


errMsg : String -> Html Msg
errMsg s =
    div [ class "rec err" ] [ text s ]


menuItem : String -> Msg -> Html Msg
menuItem label msg =
    row [ action label msg ]


menuLink : String -> Route -> Html Msg
menuLink label route =
    menuItem label <| NavigateTo route


formRow : String -> Html Msg -> Html Msg
formRow label fld =
    Html.tr [ class "form-row" ]
        [ Html.td [] [ text label ]
        , Html.td [] [ fld ]
        ]


viewList : List PwdRec -> Html Msg
viewList pwds =
    div []
        [ div [ class "header" ] [ link "Menu" RtMenu ]
        , row [ Html.i [ class "fa fa-plus action" ] [], action " New" <| NavigateTo RtNew ]
        , div [] <| List.map (\r -> row [ link r.name (RtItemMenu r.name) ]) pwds
        ]


viewForm : EditForm -> Html Msg
viewForm { rec, pwdVisible, err } =
    let
        inp val msg =
            input [ value val, onInput (MsgForm << msg) ] []

        addType attrs =
            if pwdVisible then
                attrs

            else
                type_ "password" :: attrs

        pwdAttrs =
            addType [ value rec.password, onInput (MsgForm << FmPassword) ]

        switch =
            action
                (if pwdVisible then
                    "Hide"

                 else
                    "Show"
                )
                (MsgForm FmFlipPwdVisible)

        tbl =
            Html.table []
                [ formRow "name" <| inp rec.name FmName
                , formRow "url" <| inp rec.url FmUrl
                , formRow "password" <| Html.span [] [ input pwdAttrs [], switch ]
                , formRow "group" <| inp rec.grp FmGroup
                , formRow "comment" <| Html.textarea [ value rec.comment, onInput (MsgForm << FmComment) ] []
                ]

        errBar =
            case err of
                Nothing ->
                    text ""

                Just s ->
                    errMsg s
    in
    div []
        [ backToList
        , errBar
        , tbl
        , div [] [ button [ onClick SaveForm ] [ text "save" ] ]
        ]


viewLogin : String -> String -> Html Msg
viewLogin pwd label =
    div []
        [ div [] [ text label ]
        , div []
            [ text "Password:"
            , input [ value pwd, type_ "password", onInput FmLogin ] []
            , button [ onClick TryPassword ] [ text "login" ]
            ]
        ]


viewChangeMasterPassword : Model -> Html Msg
viewChangeMasterPassword model =
    div []
        [ backToList
        , Html.table []
            [ formRow "new password" <| input [ value model.formPassword, onInput FmLogin ] []
            , Html.tr []
                [ Html.td [] []
                , Html.td [] [ button [ onClick (ChangeMasterPassword model.formPassword) ] [ text "Update" ] ]
                ]
            ]
        ]


viewDownload : { url : String, label : String } -> Html Msg
viewDownload { url, label } =
    div []
        [ backToList
        , row
            [ Html.a [ href url, Attr.downloadAs "passwords.json" ] [ text label ]
            ]
        ]


viewUpload : Html Msg
viewUpload =
    div []
        [ backToList
        , Html.table []
            [ formRow "Select file" <| input [ type_ "file", Attr.id "passwords-file" ] []
            , formRow "" <| button [ onClick UploadPasswords ] [ text "Upload" ]
            ]
        ]


viewMenu : Html Msg
viewMenu =
    div []
        [ backToList
        , menuLink "Change master password" RtPasswordChangeForm
        , menuItem "Download unencrypted passwords" PrepareDownload
        , menuLink "Upload unencrypted passwords" RtUpload
        ]


viewItemMenu : PwdRec -> Html Msg
viewItemMenu rec =
    div []
        [ backToList
        , row [ Html.h3 [] [ text rec.name ] ]
        , menuLink "Edit" <| RtEdit rec.name
        , menuItem "Copy password" <| CopyToClipboard rec.password
        , menuItem "Delete" <| DeleteItem rec.name
        ]


viewReady : Model -> Html Msg
viewReady model =
    let
        findItem : String -> List PwdRec -> PwdRec
        findItem name lst =
            case lst of
                [] ->
                    PwdRec.empty

                x :: xs ->
                    if x.name == name then
                        x

                    else
                        findItem name xs
    in
    case model.route of
        RtList ->
            viewList model.passwords

        RtNew ->
            viewForm model.form

        RtEdit name ->
            viewForm model.form

        RtItemMenu name ->
            viewItemMenu (findItem name model.passwords)

        RtNotFound path ->
            div [] [ text ("Not found:" ++ path) ]

        RtMenu ->
            viewMenu

        RtPasswordChangeForm ->
            viewChangeMasterPassword model

        RtDownload ->
            viewDownload model.download

        RtUpload ->
            viewUpload


viewLoggedOut : Html Msg
viewLoggedOut =
    div [] [ text "logged out" ]


view : Model -> Html Msg
view model =
    let
        content =
            case model.initState of
                Loading ->
                    div [] [ text "Loading ..." ]

                Missing ->
                    viewLogin model.formPassword "Creating vault. Enter new password"

                LoadingFailed err ->
                    div [] [ text <| "Error loading passwords: " ++ err ]

                Sealed flag data ->
                    let
                        label =
                            if flag then
                                "Bad password, try again."

                            else
                                "Enter password"
                    in
                    viewLogin model.formPassword label

                Ready ->
                    viewReady model

                LoggedOut ->
                    viewLoggedOut
    in
    div [ class "content" ] [ content ]
