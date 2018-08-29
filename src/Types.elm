module Types exposing (Msg(..), FormMsg(..), ApiError(..), Model, emptyModel, errToString)

import RemoteData exposing (RemoteData(..), WebData)
import Navigation exposing (Location)
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))

type ApiError = NotFound | Other String

errToString : ApiError -> String
errToString err =
    case err of
        NotFound -> "Not found"
        Other s -> s

type alias Model =
    { passwords : RemoteData ApiError (List PwdRec)
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
    = PasswordsResponse (Result ApiError String)
    | RouteTo Location
    | NavigateTo Route
    | MsgForm FormMsg
    | SaveForm
    | Debug String
    | Upload

