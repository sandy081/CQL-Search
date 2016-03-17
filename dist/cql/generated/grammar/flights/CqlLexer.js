// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\nE\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005\"\n\u0005\f\u0005\u000e",
    "\u0005%\u000b\u0005\u0003\u0006\u0003\u0006\u0006\u0006)\n\u0006\r\u0006",
    "\u000e\u0006*\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u00070\n\u0007",
    "\f\u0007\u000e\u00073\u000b\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\b:\n\b\f\b\u000e\b=\u000b\b\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b\u0003\u0003\u0005",
    "\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\u0002\u0013",
    "\n\u0003\u0002\u0007\u0003\u00023;\u0003\u00022;\u0007\u0002\u000b\u000b",
    "\"\"$$<<^^\u0004\u0002$$^^\u0005\u0002\u000b\f\u000f\u000f\"\"J\u0002",
    "\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002",
    "\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002",
    "\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002",
    "\u000f\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0003",
    "\u0015\u0003\u0002\u0002\u0002\u0005\u0017\u0003\u0002\u0002\u0002\u0007",
    "\u001b\u0003\u0002\u0002\u0002\t\u001f\u0003\u0002\u0002\u0002\u000b",
    "(\u0003\u0002\u0002\u0002\r,\u0003\u0002\u0002\u0002\u000f6\u0003\u0002",
    "\u0002\u0002\u0011>\u0003\u0002\u0002\u0002\u0013A\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0007<\u0002\u0002\u0016\u0004\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0007c\u0002\u0002\u0018\u0019\u0007u\u0002\u0002",
    "\u0019\u001a\u0007e\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0007f\u0002\u0002\u001c\u001d\u0007u\u0002\u0002\u001d",
    "\u001e\u0007e\u0002\u0002\u001e\b\u0003\u0002\u0002\u0002\u001f#\t\u0002",
    "\u0002\u0002 \"\t\u0003\u0002\u0002! \u0003\u0002\u0002\u0002\"%\u0003",
    "\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002",
    "$\n\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&)\n\u0004\u0002",
    "\u0002\')\u0005\u0011\t\u0002(&\u0003\u0002\u0002\u0002(\'\u0003\u0002",
    "\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003",
    "\u0002\u0002\u0002+\f\u0003\u0002\u0002\u0002,1\u0007$\u0002\u0002-",
    "0\n\u0005\u0002\u0002.0\u0005\u0011\t\u0002/-\u0003\u0002\u0002\u0002",
    "/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002",
    "\u000212\u0003\u0002\u0002\u000224\u0003\u0002\u0002\u000231\u0003\u0002",
    "\u0002\u000245\u0007$\u0002\u00025\u000e\u0003\u0002\u0002\u00026;\u0007",
    "$\u0002\u00027:\n\u0005\u0002\u00028:\u0005\u0011\t\u000297\u0003\u0002",
    "\u0002\u000298\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002\u0002;9\u0003",
    "\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<\u0010\u0003\u0002\u0002",
    "\u0002=;\u0003\u0002\u0002\u0002>?\u0007^\u0002\u0002?@\t\u0005\u0002",
    "\u0002@\u0012\u0003\u0002\u0002\u0002AB\t\u0006\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002CD\b\n\u0002\u0002D\u0014\u0003\u0002\u0002\u0002",
    "\n\u0002#(*/19;\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function CqlLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

CqlLexer.prototype = Object.create(antlr4.Lexer.prototype);
CqlLexer.prototype.constructor = CqlLexer;

CqlLexer.EOF = antlr4.Token.EOF;
CqlLexer.EQUALS = 1;
CqlLexer.SORT_ASCENDING = 2;
CqlLexer.SORT_DESCENDING = 3;
CqlLexer.NUMBER = 4;
CqlLexer.STRING_LITERAL = 5;
CqlLexer.QUOTED_STRING_LITERAL = 6;
CqlLexer.UNTERMINATED_QUOTED_STRING_LITERAL = 7;
CqlLexer.WHITESPACE = 8;


CqlLexer.modeNames = [ "DEFAULT_MODE" ];

CqlLexer.literalNames = [ 'null', "':'", "'asc'", "'dsc'" ];

CqlLexer.symbolicNames = [ 'null', "EQUALS", "SORT_ASCENDING", "SORT_DESCENDING", 
                           "NUMBER", "STRING_LITERAL", "QUOTED_STRING_LITERAL", 
                           "UNTERMINATED_QUOTED_STRING_LITERAL", "WHITESPACE" ];

CqlLexer.ruleNames = [ "EQUALS", "SORT_ASCENDING", "SORT_DESCENDING", "NUMBER", 
                       "STRING_LITERAL", "QUOTED_STRING_LITERAL", "UNTERMINATED_QUOTED_STRING_LITERAL", 
                       "STRING_ESCAPE", "WHITESPACE" ];

CqlLexer.grammarFileName = "Cql.g4";


  CqlLexer.prototype.setExternalIndetifiers= function(externalIdentifiers) {}



exports.CqlLexer = CqlLexer;

