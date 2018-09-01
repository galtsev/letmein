module Types exposing (ApiError(..), FormMsg(..), InitState(..), Model, Msg(..), emptyModel, errToString)

import Navigation exposing (Location)
import PwdRec exposing (PwdRec)
import Random
import Route exposing (Route(..))
import Time


type ApiError
    = NotFound
    | Other String


errToString : ApiError -> String
errToString err =
    case err of
        NotFound ->
            "Not found"

        Other s ->
            s


type InitState
    = Loading
    | Missing
    | LoadingFailed String
    | Sealed Bool String -- Sealed <decryption failed> <encrypted data>
    | Ready


type alias Model =
    { passwords : List PwdRec
    , masterPassword : String
    , route : Route
    , form : PwdRec
    , initState : InitState
    , formPassword : String
    , selectedItem : Maybe String
    , seed : Random.Seed
    }


emptyModel : Model
emptyModel =
    { passwords = []
    , masterPassword = ""
    , route = RtList
    , form = PwdRec.empty
    , initState = Loading
    , formPassword = ""
    , selectedItem = Nothing
    , seed = Random.initialSeed 0
    }


type FormMsg
    = FmName String
    | FmUrl String
    | FmPassword String
    | FmGroup String
    | FmComment String


type
    Msg
    -- login/unseal flow
    = PasswordsResponse (Result ApiError String)
    | GotSeed Time.Time
    | FmLogin String
    | TryPassword
      -- Navigation
    | RouteTo Location
    | NavigateTo Route
      -- password add/edit form
    | MsgForm FormMsg
    | SaveForm
      -- password list
    | SelectItem String
    | DeleteItem String
      -- misc
    | Debug String
    | CopyToClipboard String
    | ChangeMasterPassword String
