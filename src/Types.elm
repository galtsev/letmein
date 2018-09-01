module Types exposing (Msg(..), FormMsg(..), ApiError(..), InitState(..), Model, emptyModel, errToString)

import Navigation exposing (Location)
import PwdRec exposing (PwdRec)
import Route exposing (Route(..))

type ApiError = NotFound | Other String

errToString : ApiError -> String
errToString err =
    case err of
        NotFound -> "Not found"
        Other s -> s

type InitState = 
    Loading 
    | Missing
    | LoadingFailed String
    | Sealed Bool String  -- Sealed <decryption failed> <encrypted data>
    | Ready String  -- Ready <password>

type alias Model =
    { passwords : List PwdRec
    , route : Route
    , form : PwdRec
    , initState : InitState
    , formPassword : String
    , selectedItem : Maybe String
    }

emptyModel : Model
emptyModel =
    { passwords = []
    , route = RtList
    , form = PwdRec.empty
    , initState = Loading
    , formPassword = ""
    , selectedItem = Nothing
    }

type FormMsg =
    FmName String
    | FmUrl String
    | FmPassword String
    | FmGroup String
    | FmComment String

type Msg
    = PasswordsResponse (Result ApiError String)
    | FmLogin String
    | TryPassword
    | RouteTo Location
    | NavigateTo Route
    | MsgForm FormMsg
    | SaveForm
    | Debug String
    | Upload
    | CopyToClipboard String
    | SelectItem String
    | DeleteItem String

