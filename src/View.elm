module View exposing (view)

import Html exposing (Html, div, text, input, button)
import Html.Attributes exposing (value, href, class, type_)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))

import Types exposing (Msg(..), FormMsg(..), Model, ApiError(..), InitState(..))
import Route exposing (Route(..))
import PwdRec exposing (PwdRec)


link : String -> Route -> Html Msg
link label route =
    Html.a [onClick (NavigateTo route), class "action"] [text label]

action : String -> Msg -> Html Msg
action label msg =
    Html.a [onClick msg, class "action"] [text label]

viewList : List PwdRec -> Maybe String -> Html Msg
viewList pwds selected =
    let
        actions r =
            div [class "rec-actions"] <| List.intersperse (text " | ")
                [ action "copy password" <| CopyToClipboard r.password
                , action "delete" <| DeleteItem r.name
                ]
        viewRec r =
            div [class "rec"] 
                [ link r.name <| RtEdit r.name
                , text " | "
                , action "actions" <| SelectItem r.name
                , if selected == Just r.name then actions r else text ""
                ]
        lst = div [] <| List.map viewRec pwds
    in
    div []
        [ button [onClick <| NavigateTo RtNew] [text "New"]
        , button [onClick Upload] [text "Upload"]
        , lst
        ]
    

viewForm : PwdRec -> Html Msg
viewForm rec =
    let
        row label fld =
            Html.tr [class "form-row"]
                [ Html.td [] [text label]
                , Html.td [] [fld]
                ]
        inp val msg = input [value val, onInput (MsgForm << msg)] []
        tbl =
            Html.table []
                [ row "name" <| inp rec.name FmName
                , row "url" <| inp rec.url FmUrl
                , row "password" <| inp rec.password FmPassword
                , row "group" <| inp rec.grp FmGroup
                , row "comment" <| Html.textarea [value rec.comment, onInput (MsgForm << FmComment)] []
                ]
    in
    div []
        [ div [] [ link "<- Back to list" RtList ]
        , tbl
        , div [] [button [onClick SaveForm] [text "save"]]
        ]

viewLogin : String -> String -> Html Msg
viewLogin pwd label =
    div []
        [ div [] [text label]
        , div []
            [ text "Password:"
            , input [value pwd, type_ "password", onInput FmLogin] []
            , button [onClick TryPassword] [text "login"]
            ]
        ]

viewReady : Model -> Html Msg
viewReady model =
    case model.route of
        RtList -> viewList model.passwords model.selectedItem
        RtNew -> viewForm model.form
        RtEdit name -> viewForm model.form
        RtNotFound path -> div [] [text ("Not found:" ++ path)]

view : Model -> Html Msg
view model =
    let
        content = case model.initState of
            Loading -> div [] [text "Loading ..."]
            Missing -> viewLogin model.formPassword "Creating vault. Enter new password"
            LoadingFailed err -> div [] [text <| "Error loading passwords: " ++ err]
            Sealed flag data ->
                let
                    label =
                        if flag
                            then "Bad password, try again."
                            else "Enter password"
                in
                viewLogin model.formPassword label
            Ready -> viewReady model
    in
    div [class "content"] [content]