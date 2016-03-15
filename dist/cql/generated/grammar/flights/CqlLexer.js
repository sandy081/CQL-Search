// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\rQ\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0007\b.\n\b\f\b\u000e\b1\u000b\b\u0003\t\u0003\t\u0006\t5",
    "\n\t\r\t\u000e\t6\u0003\n\u0003\n\u0003\n\u0007\n<\n\n\f\n\u000e\n?",
    "\u000b\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "F\n\u000b\f\u000b\u000e\u000bI\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0002\u0002\u000e\u0003\u0003\u0005\u0004",
    "\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015",
    "\f\u0017\u0002\u0019\r\u0003\u0002\u0007\u0003\u00023;\u0003\u00022",
    ";\b\u0002\u000b\u000b\"\"$%<<BB^^\u0004\u0002$$^^\u0005\u0002\u000b",
    "\f\u000f\u000f\"\"V\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005",
    "\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t",
    "\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r",
    "\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011",
    "\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0003\u001b",
    "\u0003\u0002\u0002\u0002\u0005\u001d\u0003\u0002\u0002\u0002\u0007\u001f",
    "\u0003\u0002\u0002\u0002\t!\u0003\u0002\u0002\u0002\u000b#\u0003\u0002",
    "\u0002\u0002\r\'\u0003\u0002\u0002\u0002\u000f+\u0003\u0002\u0002\u0002",
    "\u00114\u0003\u0002\u0002\u0002\u00138\u0003\u0002\u0002\u0002\u0015",
    "B\u0003\u0002\u0002\u0002\u0017J\u0003\u0002\u0002\u0002\u0019M\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0007<\u0002\u0002\u001c\u0004\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0007@\u0002\u0002\u001e\u0006\u0003",
    "\u0002\u0002\u0002\u001f \u0007%\u0002\u0002 \b\u0003\u0002\u0002\u0002",
    "!\"\u0007B\u0002\u0002\"\n\u0003\u0002\u0002\u0002#$\u0007c\u0002\u0002",
    "$%\u0007u\u0002\u0002%&\u0007e\u0002\u0002&\f\u0003\u0002\u0002\u0002",
    "\'(\u0007f\u0002\u0002()\u0007u\u0002\u0002)*\u0007e\u0002\u0002*\u000e",
    "\u0003\u0002\u0002\u0002+/\t\u0002\u0002\u0002,.\t\u0003\u0002\u0002",
    "-,\u0003\u0002\u0002\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002",
    "\u0002/0\u0003\u0002\u0002\u00020\u0010\u0003\u0002\u0002\u00021/\u0003",
    "\u0002\u0002\u000225\n\u0004\u0002\u000235\u0005\u0017\f\u000242\u0003",
    "\u0002\u0002\u000243\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u0002",
    "64\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u00027\u0012\u0003\u0002",
    "\u0002\u00028=\u0007$\u0002\u00029<\n\u0005\u0002\u0002:<\u0005\u0017",
    "\f\u0002;9\u0003\u0002\u0002\u0002;:\u0003\u0002\u0002\u0002<?\u0003",
    "\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002",
    ">@\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A\u0007$\u0002",
    "\u0002A\u0014\u0003\u0002\u0002\u0002BG\u0007$\u0002\u0002CF\n\u0005",
    "\u0002\u0002DF\u0005\u0017\f\u0002EC\u0003\u0002\u0002\u0002ED\u0003",
    "\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "GH\u0003\u0002\u0002\u0002H\u0016\u0003\u0002\u0002\u0002IG\u0003\u0002",
    "\u0002\u0002JK\u0007^\u0002\u0002KL\t\u0005\u0002\u0002L\u0018\u0003",
    "\u0002\u0002\u0002MN\t\u0006\u0002\u0002NO\u0003\u0002\u0002\u0002O",
    "P\b\r\u0002\u0002P\u001a\u0003\u0002\u0002\u0002\n\u0002/46;=EG\u0003",
    "\b\u0002\u0002"].join("");


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
CqlLexer.SORT_ASCENDING = 5;
CqlLexer.SORT_DESCENDING = 6;
CqlLexer.NUMBER = 7;
CqlLexer.STRING_LITERAL = 8;
CqlLexer.QUOTED_STRING_LITERAL = 9;
CqlLexer.UNTERMINATED_QUOTED_STRING_LITERAL = 10;
CqlLexer.WHITESPACE = 11;


CqlLexer.modeNames = [ "DEFAULT_MODE" ];

CqlLexer.literalNames = [ 'null', "':'", "'>'", "'#'", "'@'", "'asc'", "'dsc'" ];

CqlLexer.symbolicNames = [ 'null', "EQUALS", "GREATER_THAN", "MEMBERS_IDENTIFIER", 
                           "OWNER_IDENTIFIER", "SORT_ASCENDING", "SORT_DESCENDING", 
                           "NUMBER", "STRING_LITERAL", "QUOTED_STRING_LITERAL", 
                           "UNTERMINATED_QUOTED_STRING_LITERAL", "WHITESPACE" ];

CqlLexer.ruleNames = [ "EQUALS", "GREATER_THAN", "MEMBERS_IDENTIFIER", "OWNER_IDENTIFIER", 
                       "SORT_ASCENDING", "SORT_DESCENDING", "NUMBER", "STRING_LITERAL", 
                       "QUOTED_STRING_LITERAL", "UNTERMINATED_QUOTED_STRING_LITERAL", 
                       "STRING_ESCAPE", "WHITESPACE" ];

CqlLexer.grammarFileName = "Cql.g4";



exports.CqlLexer = CqlLexer;

