module View exposing (view)

import Html exposing (Html, button, div, input, text)
import Html.Attributes as Attr exposing (class, href, type_, value)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))
import String
import Types exposing (ApiError(..), EditForm, FormMsg(..), InitState(..), Model, Msg(..), ViewState(..))


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


btn : String -> Msg -> Html Msg
btn label msg =
    button [ class "btn", onClick msg ] [ text label ]


viewList : String -> List PwdRec -> Html Msg
viewList filter pwds =
    let
        match r =
            String.contains filter r.name

        filtered =
            List.filter match pwds
    in
    div []
        [ div [ class "header" ] [ link "Menu" RtMenu ]
        , row [ input [ value filter, onInput FmFilter ] [], Html.i [ class "fa fa-search" ] [] ]
        , row [ Html.i [ class "fa fa-plus action" ] [], action " New" <| NavigateTo RtNew ]
        , div [] <| List.map (\r -> row [ link r.name (RtItemMenu r.name) ]) filtered
        ]


viewForm : EditForm -> Maybe String -> Html Msg
viewForm { rec, pwdVisible } err =
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
                , formRow "user" <| inp rec.user FmUser
                , formRow "password" <| Html.span [] [ input pwdAttrs [], switch ]
                , formRow "group" <| inp rec.grp FmGroup
                , formRow "comment" <| Html.textarea [ value rec.comment, onInput (MsgForm << FmComment) ] []
                , formRow "" <| btn "save" SaveForm
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
        ]


viewLogin : String -> String -> Html Msg
viewLogin pwd label =
    div []
        [ div [ class "header" ] [ text "login" ]
        , row <| [ text label ]
        , Html.table []
            [ formRow "password" <| input [ value pwd, type_ "password", onInput FmLogin ] []
            , formRow "" <| btn "login" TryPassword
            ]
        ]


viewChangeMasterPassword : String -> Html Msg
viewChangeMasterPassword newPassword =
    div []
        [ backToList
        , Html.table []
            [ formRow "new password" <| input [ value newPassword, type_ "password", onInput FmMasterPassword ] []
            , formRow "" <| btn "update" ChangeMasterPassword
            ]
        ]


viewDownload : Maybe { url : String, label : String } -> Html Msg
viewDownload v =
    let
        inner =
            case v of
                Nothing ->
                    text "Preparing..."

                Just { url, label } ->
                    Html.a [ href url, Attr.downloadAs "passwords.json" ] [ text label ]
    in
    div []
        [ backToList
        , row [ inner ]
        ]


viewUpload : Html Msg
viewUpload =
    div []
        [ backToList
        , Html.table []
            [ formRow "Select file" <| input [ type_ "file", Attr.id "passwords-file" ] []
            , formRow "" <| btn "upload" UploadPasswords
            ]
        ]


viewMenu : Html Msg
viewMenu =
    div []
        [ backToList
        , menuLink "Change master password" RtPasswordChangeForm
        , menuLink "Download unencrypted passwords" RtDownload
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


viewErr : String -> Html Msg
viewErr label =
    div [] [ text label ]


viewLoggedOut : Html Msg
viewLoggedOut =
    div [] [ text "logged out" ]


viewReady : Model -> Html Msg
viewReady model =
    case model.state of
        DownloadView data ->
            viewDownload data

        UploadView ->
            viewUpload

        EditView _ fm ->
            viewForm fm model.err

        MenuView ->
            viewMenu

        ListView ->
            viewList model.passwordsFilter model.passwords

        ItemMenuView rec ->
            viewItemMenu rec

        ErrorView label ->
            viewErr label

        ChangePasswordView pwd ->
            viewChangeMasterPassword pwd


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
