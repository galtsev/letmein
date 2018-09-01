module View exposing (view)

import Html exposing (Html, button, div, input, text)
import Html.Attributes exposing (class, href, type_, value)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))
import Types exposing (ApiError(..), FormMsg(..), InitState(..), Model, Msg(..))


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


viewList : List PwdRec -> Maybe String -> Html Msg
viewList pwds selected =
    let
        actions r =
            div [ class "rec-actions" ] <|
                List.intersperse (text " | ")
                    [ action "copy password" <| CopyToClipboard r.password
                    , action "delete" <| DeleteItem r.name
                    ]

        viewRec r =
            div [ class "rec" ]
                [ link r.name <| RtEdit r.name
                , text " | "
                , action "actions" <| SelectItem r.name
                , if selected == Just r.name then
                    actions r

                  else
                    text ""
                ]

        lst =
            div [] <| List.map viewRec pwds
    in
    div []
        [ div [ class "header" ] [ link "Menu" RtMenu ]
        , div [ class "rec" ] [ Html.i [ class "fa fa-plus action" ] [], action " New" <| NavigateTo RtNew ]
        , lst
        ]


formRow : String -> Html Msg -> Html Msg
formRow label fld =
    Html.tr [ class "form-row" ]
        [ Html.td [] [ text label ]
        , Html.td [] [ fld ]
        ]


viewForm : PwdRec -> Html Msg
viewForm rec =
    let
        inp val msg =
            input [ value val, onInput (MsgForm << msg) ] []

        tbl =
            Html.table []
                [ formRow "name" <| inp rec.name FmName
                , formRow "url" <| inp rec.url FmUrl
                , formRow "password" <| inp rec.password FmPassword
                , formRow "group" <| inp rec.grp FmGroup
                , formRow "comment" <| Html.textarea [ value rec.comment, onInput (MsgForm << FmComment) ] []
                ]
    in
    div []
        [ backToList
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


viewMenu : Html Msg
viewMenu =
    let
        menuItem : String -> Msg -> Html Msg
        menuItem label msg =
            div [ class "rec" ] [ action label msg ]

        menuLink : String -> Route -> Html Msg
        menuLink label route =
            menuItem label <| NavigateTo route
    in
    div []
        [ backToList
        , menuLink "Change master password" <| RtPasswordChangeForm
        ]


viewReady : Model -> Html Msg
viewReady model =
    case model.route of
        RtList ->
            viewList model.passwords model.selectedItem

        RtNew ->
            viewForm model.form

        RtEdit name ->
            viewForm model.form

        RtNotFound path ->
            div [] [ text ("Not found:" ++ path) ]

        RtMenu ->
            viewMenu

        RtPasswordChangeForm ->
            viewChangeMasterPassword model


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
    in
    div [ class "content" ] [ content ]
