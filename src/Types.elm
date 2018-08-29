module Types exposing (Msg(..), FormMsg(..), Model, emptyModel)

import RemoteData exposing (RemoteData(..), WebData)
import Navigation exposing (Location)
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))

type alias Model =
    { passwords : WebData (List PwdRec)
    , route : Route
    , form : PwdRec
    }

emptyModel : Model
emptyModel =
    { passwords = NotAsked
    , route = RtList
    , form = PwdRec.empty
    }

type FormMsg =
    FmName String
    | FmUrl String
    | FmPassword String
    | FmGroup String
    | FmComment String

type Msg
    = PasswordsResponse (WebData (List PwdRec))
    | RouteTo Location
    | NavigateTo Route
    | MsgForm FormMsg
    | SaveForm
    | Debug String
    | Upload

