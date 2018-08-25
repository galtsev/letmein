module Example exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)
import Json.Decode exposing (Decoder, decodeString)
import Main as M

decoderOk : String -> M.PwdRec -> () -> Expectation
decoderOk src expected () =
    let
        r = decodeString M.pwdRecDecoder src
    in
        Expect.equal r (Ok expected)

emptyRec : M.PwdRec
emptyRec = {name="", url="", password="", comment="", grp=""}

suite : Test
suite =
    describe "test suite"
        [ describe "PwdRec decoder"
            [ test "all fields present" <| 
                decoderOk
                    """{"name":"hi","url":"http:", "password":"letmein", "comment":"hi", "group": "g" }"""
                    {name = "hi", url="http:", password="letmein", comment="hi", grp="g"}

            , test "decode with just a name" <|
                decoderOk
                    """{"name":"fb"}"""
                    {emptyRec | name="fb"}
            , test "name and pwd" <|
                decoderOk
                    """{"name": "foo", "password":"123"}"""
                    {emptyRec | name="foo", password="123"}
            ]
        ]