module View exposing (view)

import Html exposing (Html, button, div, input, text)
import Html.Attributes as Attr exposing (class, href, type_, value)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))
import String
import Types exposing (ApiError(..), EditForm, FormMsg(..), Model, Msg(..), ViewState(..))


link : String -> Route -> Html Msg
link label route =
    Html.a [ onClick (NavigateTo route), class "action" ] [ text label ]


action : String -> Msg -> Html Msg
action label msg =
    Html.a [ onClick msg, class "action" ] [ text label ]


icon : String -> Html Msg
icon cls =
    Html.i [ class cls ] []


iconBack : Html Msg
iconBack =
    icon "fa fa-arrow-left action"


iconPlus : Html Msg
iconPlus =
    icon "fa fa-plus action"


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


form : List (Html Msg) -> Html Msg
form content =
    Html.table [] content


formRow : String -> Html Msg -> Html Msg
formRow label fld =
    Html.tr [ class "form-row" ]
        [ Html.td [] [ text label ]
        , Html.td [] [ fld ]
        ]


btn : String -> Msg -> Html Msg
btn label msg =
    button [ class "btn", onClick msg ] [ text label ]


normalView : Maybe String -> String -> List (Html Msg) -> Html Msg
normalView err label content =
    let
        hdr =
            div [ class "header" ]
                [ Html.a [ onClick (NavigateTo RtList), class "action" ] [ icon "fa fa-arrow-left action" ]
                , Html.span [ class "title" ] [ text label ]
                ]
    in
    div [] <|
        List.concat
            [ [ hdr ]
            , List.filterMap identity [ Maybe.map errMsg err ]
            , content
            ]


loginView : String -> List (Html Msg) -> Html Msg
loginView label content =
    div [] <|
        div [ class "header" ] [ text label ]
            :: content


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
        , div [] <| List.map (\r -> row [ link r.name (RtItemMenu r.name) ]) filtered
        ]


viewForm : EditForm -> Html Msg
viewForm { rec, pwdVisible } =
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
    in
    form
        [ formRow "name" <| inp rec.name FmName
        , formRow "url" <| inp rec.url FmUrl
        , formRow "user" <| inp rec.user FmUser
        , formRow "password" <| Html.span [] [ input pwdAttrs [], switch ]
        , formRow "group" <| inp rec.grp FmGroup
        , formRow "comment" <| Html.textarea [ value rec.comment, onInput (MsgForm << FmComment) ] []
        , formRow "" <| btn "save" SaveForm
        ]


viewLogin : String -> String -> List (Html Msg)
viewLogin pwd label =
    [ row [ text label ]
    , form
        [ formRow "password" <| input [ value pwd, type_ "password", onInput FmLogin ] []
        , formRow "" <| btn "login" TryPassword
        ]
    ]


viewChangeMasterPassword : String -> Html Msg
viewChangeMasterPassword newPassword =
    form
        [ formRow "new password" <| input [ value newPassword, type_ "password", onInput FmMasterPassword ] []
        , formRow "" <| btn "update" (ChangeMasterPassword newPassword)
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
    row [ inner ]


viewUpload : Html Msg
viewUpload =
    form
        [ formRow "Select file" <| input [ type_ "file", Attr.id "passwords-file" ] []
        , formRow "" <| btn "upload" UploadPasswords
        ]


viewMenu : List (Html Msg)
viewMenu =
    [ menuLink "New" RtNew
    , menuLink "Change master password" RtPasswordChangeForm
    , menuLink "Download unencrypted passwords" RtDownload
    , menuLink "Upload unencrypted passwords" RtUpload
    ]


viewItemMenu : PwdRec -> List (Html Msg)
viewItemMenu rec =
    [ menuLink "Edit" <| RtEdit rec.name
    , menuItem "Copy password" <| CopyToClipboard rec.password
    , menuItem "Delete" <| DeleteItem rec.name
    ]


viewLoggedOut : Html Msg
viewLoggedOut =
    div [] [ text "logged out" ]


viewReady : Model -> Html Msg
viewReady model =
    let
        nv =
            normalView model.err
    in
    case model.state of
        DownloadView data ->
            nv "Download" [ viewDownload data ]

        UploadView ->
            nv "Upload" [ viewUpload ]

        EditView Nothing fm ->
            nv "New" [ viewForm fm ]

        EditView (Just name) fm ->
            nv "Edit" [ viewForm fm ]

        MenuView ->
            nv "Main menu" viewMenu

        ListView ->
            viewList model.passwordsFilter model.passwords

        ItemMenuView rec ->
            nv rec.name <| viewItemMenu rec

        ErrorView label ->
            nv "Error" [ text label ]

        ChangePasswordView pwd ->
            nv "Change master password" [ viewChangeMasterPassword pwd ]

        Loading ->
            loginView "Login" [ text "loading ..." ]

        LoadingFailed err ->
            loginView "Error" [ text err ]

        Missing pwd ->
            loginView "Login" <| viewLogin pwd "Creating new vault"

        Sealed err data pwd ->
            let
                label =
                    case err of
                        True ->
                            "Bad password. Try again"

                        False ->
                            "Enter password"
            in
            loginView "Login" <| viewLogin pwd label

        LoggedOut ->
            loginView "Logged out" [ text "F5 to login" ]


view : Model -> Html Msg
view model =
    div [ class "content" ] [ viewReady model ]
