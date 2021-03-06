module PwdRec exposing (PwdRec, decoder, empty, encode)

import Http
import Json.Decode as D exposing (Decoder, field, string)
import Json.Encode as E


type alias PwdRec =
    { name : String
    , url : String
    , user : String
    , password : String
    , comment : String
    , grp : String
    }


empty : PwdRec
empty =
    { name = ""
    , url = ""
    , user = ""
    , password = ""
    , comment = ""
    , grp = ""
    }


optional : a -> Decoder a -> Decoder a
optional default decoder =
    D.map (Maybe.withDefault default) (D.maybe decoder)


optStr : String -> Decoder String
optStr fn =
    optional "" (field fn string)


decoder : Decoder PwdRec
decoder =
    D.map6 PwdRec
        (field "name" string)
        (optStr "url")
        (optStr "user")
        (optStr "password")
        (optStr "comment")
        (optStr "group")


encode : PwdRec -> E.Value
encode p =
    E.object
        [ ( "name", E.string p.name )
        , ( "url", E.string p.url )
        , ( "user", E.string p.user )
        , ( "password", E.string p.password )
        , ( "comment", E.string p.comment )
        , ( "group", E.string p.grp )
        ]
