// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u000bE\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0007\u0006\"\n\u0006\f\u0006",
    "\u000e\u0006%\u000b\u0006\u0003\u0007\u0003\u0007\u0006\u0007)\n\u0007",
    "\r\u0007\u000e\u0007*\u0003\b\u0003\b\u0003\b\u0007\b0\n\b\f\b\u000e",
    "\b3\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t:\n\t\f\t",
    "\u000e\t=\u000b\t\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u0002\u0015\u000b\u0003",
    "\u0002\u0007\u0003\u00023;\u0003\u00022;\b\u0002\u000b\u000b\"\"$%<",
    "<BB^^\u0004\u0002$$^^\u0005\u0002\u000b\f\u000f\u000f\"\"J\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019",
    "\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002\u0002\u0002\t\u001d",
    "\u0003\u0002\u0002\u0002\u000b\u001f\u0003\u0002\u0002\u0002\r(\u0003",
    "\u0002\u0002\u0002\u000f,\u0003\u0002\u0002\u0002\u00116\u0003\u0002",
    "\u0002\u0002\u0013>\u0003\u0002\u0002\u0002\u0015A\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0007<\u0002\u0002\u0018\u0004\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0007@\u0002\u0002\u001a\u0006\u0003\u0002\u0002",
    "\u0002\u001b\u001c\u0007%\u0002\u0002\u001c\b\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0007B\u0002\u0002\u001e\n\u0003\u0002\u0002\u0002\u001f",
    "#\t\u0002\u0002\u0002 \"\t\u0003\u0002\u0002! \u0003\u0002\u0002\u0002",
    "\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002",
    "\u0002\u0002$\f\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002\u0002&)",
    "\n\u0004\u0002\u0002\')\u0005\u0013\n\u0002(&\u0003\u0002\u0002\u0002",
    "(\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*(\u0003\u0002",
    "\u0002\u0002*+\u0003\u0002\u0002\u0002+\u000e\u0003\u0002\u0002\u0002",
    ",1\u0007$\u0002\u0002-0\n\u0005\u0002\u0002.0\u0005\u0013\n\u0002/-",
    "\u0003\u0002\u0002\u0002/.\u0003\u0002\u0002\u000203\u0003\u0002\u0002",
    "\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002\u000224\u0003\u0002",
    "\u0002\u000231\u0003\u0002\u0002\u000245\u0007$\u0002\u00025\u0010\u0003",
    "\u0002\u0002\u00026;\u0007$\u0002\u00027:\n\u0005\u0002\u00028:\u0005",
    "\u0013\n\u000297\u0003\u0002\u0002\u000298\u0003\u0002\u0002\u0002:",
    "=\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002",
    "\u0002<\u0012\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002>?\u0007",
    "^\u0002\u0002?@\t\u0005\u0002\u0002@\u0014\u0003\u0002\u0002\u0002A",
    "B\t\u0006\u0002\u0002BC\u0003\u0002\u0002\u0002CD\b\u000b\u0002\u0002",
    "D\u0016\u0003\u0002\u0002\u0002\n\u0002#(*/19;\u0003\b\u0002\u0002"].join("");


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
CqlLexer.GREATER_THAN = 2;
CqlLexer.MEMBERS_IDENTIFIER = 3;
CqlLexer.OWNER_IDENTIFIER = 4;
CqlLexer.NUMBER = 5;
CqlLexer.STRING_LITERAL = 6;
CqlLexer.QUOTED_STRING_LITERAL = 7;
CqlLexer.UNTERMINATED_QUOTED_STRING_LITERAL = 8;
CqlLexer.WHITESPACE = 9;


CqlLexer.modeNames = [ "DEFAULT_MODE" ];

CqlLexer.literalNames = [ 'null', "':'", "'>'", "'#'", "'@'" ];

CqlLexer.symbolicNames = [ 'null', "EQUALS", "GREATER_THAN", "MEMBERS_IDENTIFIER", 
                           "OWNER_IDENTIFIER", "NUMBER", "STRING_LITERAL", 
                           "QUOTED_STRING_LITERAL", "UNTERMINATED_QUOTED_STRING_LITERAL", 
                           "WHITESPACE" ];

CqlLexer.ruleNames = [ "EQUALS", "GREATER_THAN", "MEMBERS_IDENTIFIER", "OWNER_IDENTIFIER", 
                       "NUMBER", "STRING_LITERAL", "QUOTED_STRING_LITERAL", 
                       "UNTERMINATED_QUOTED_STRING_LITERAL", "STRING_ESCAPE", 
                       "WHITESPACE" ];

CqlLexer.grammarFileName = "Cql.g4";



exports.CqlLexer = CqlLexer;

