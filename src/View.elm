module View exposing (view)

import Html exposing (Html, div, text, input, button)
import Html.Attributes exposing (value, href, class)
import Html.Events exposing (onClick, onInput)
import Http exposing (Error(..))
import RemoteData exposing (RemoteData(..), WebData)


import Man exposing (Msg(..), FormMsg(..), Route(..), Model)
import PwdRec exposing (PwdRec)


viewWebData : (a -> Html Msg) -> WebData a -> Html Msg
viewWebData f wd =
    let
        errMsg s =
            div [] [ text s ]

        showErr e =
            case e of
                BadUrl s ->
                    errMsg ("Bad Url " ++ s)

                Timeout ->
                    errMsg "Timed out"

                NetworkError ->
                    errMsg "Network error"

                BadStatus resp ->
                    errMsg
                        ("Error GET "
                            ++ resp.url
                            ++ ": "
                            ++ toString resp.status.code
                            ++ " - "
                            ++ resp.status.message
                        )

                BadPayload s resp ->
                    errMsg ("Error - Bad Payload:" ++ s)
    in
    case wd of
        NotAsked ->
            div [] [ text "not asked" ]

        Loading ->
            div [] [ text "loading..." ]

        Failure e ->
            showErr e

        Success a ->
            f a

action : String -> Route -> Html Msg
action label route =
    Html.a [onClick (NavigateTo route), class "action"] [text label]

viewList : List PwdRec -> Html Msg
viewList pwds =
    let
        viewRec r =
            div [] [ action r.name <| RtEdit r.name]
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
            Html.tr []
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
        [ div [] [ action "<- Back to list" RtList ]
        , tbl
        , div [] [button [onClick SaveForm] [text "save"]]
        ]


view : Model -> Html Msg
view model =
    case model.route of
        RtList -> viewWebData viewList model.passwords
        RtNew -> viewForm model.form
        RtEdit name -> viewForm model.form
        RtNotFound path -> div [] [text ("Not found:" ++ path)]

