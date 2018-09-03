module Types exposing
    ( ApiError(..)
    , EditForm
    , FormMsg(..)
    , InitState(..)
    , Model
    , Msg(..)
    , emptyModel
    , errToString
    )

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
    | LoggedOut


type alias EditForm =
    { rec : PwdRec, pwdVisible : Bool }


type alias Model =
    { passwords : List PwdRec
    , masterPassword : String
    , route : Route
    , form : EditForm
    , initState : InitState
    , formPassword : String
    , seed : Random.Seed
    , download : { url : String, label : String }
    , ticks : Int
    }


emptyModel : Model
emptyModel =
    { passwords = []
    , masterPassword = ""
    , route = RtList
    , form = { rec = PwdRec.empty, pwdVisible = False }
    , initState = Loading
    , formPassword = ""
    , seed = Random.initialSeed 0
    , download = { url = "", label = "" }
    , ticks = 0
    }


type FormMsg
    = FmName String
    | FmUrl String
    | FmPassword String
    | FmGroup String
    | FmComment String
    | FmFlipPwdVisible


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
      -- item menu
    | CopyToClipboard String
    | DeleteItem String
      -- menu
    | ChangeMasterPassword String
    | PrepareDownload
    | DownloadUrlCreated String
      -- misc
    | Debug String
    | Tick Time.Time
