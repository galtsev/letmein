module Types exposing
    ( ApiError(..)
    , EditForm
    , FormMsg(..)
    , InitState(..)
    , Model
    , Msg(..)
    , ViewState(..)
    , emptyForm
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
    { rec : PwdRec
    , pwdVisible : Bool
    , err : Maybe String
    }


type ViewState
    = RouteView Route
    | DownloadView (Maybe { url : String, label : String })


emptyForm : EditForm
emptyForm =
    { rec = PwdRec.empty
    , pwdVisible = False
    , err = Nothing
    }


type alias Model =
    { passwords : List PwdRec
    , passwordsFilter : String
    , masterPassword : String
    , form : EditForm
    , initState : InitState
    , formPassword : String
    , seed : Random.Seed
    , state : ViewState
    , ticks : Int
    }


emptyModel : Model
emptyModel =
    { passwords = []
    , passwordsFilter = ""
    , masterPassword = ""
    , form = emptyForm
    , initState = Loading
    , formPassword = ""
    , seed = Random.initialSeed 0
    , state = RouteView RtList
    , ticks = 0
    }


type FormMsg
    = FmName String
    | FmUrl String
    | FmUser String
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
      -- password list
    | FmFilter String
      -- password add/edit form
    | MsgForm FormMsg
    | SaveForm
      -- item menu
    | CopyToClipboard String
    | DeleteItem String
      -- menu
    | ChangeMasterPassword String
    | DownloadUrlCreated String
    | UploadPasswords
    | FileData String
      -- misc
    | Debug String
    | Tick Time.Time
