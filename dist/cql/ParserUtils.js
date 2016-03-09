var antlr4= require('antlr4');
var InputStream= antlr4.InputStream;
var CommonTokenStream= antlr4.CommonTokenStream;
var CqlLexer= require("./generated/grammar/flights/CqlLexer").CqlLexer;
var CqlParser= require("./generated/grammar/flights/CqlParser").CqlParser;

var ParserUtils= function(){};

ParserUtils.QUOTE= "\"";

ParserUtils.createSilentParser= function(cqlText) {
   var chars = new InputStream(cqlText);
   var lexer = new CqlLexer(chars);
   var tokens  = new CommonTokenStream(lexer);
   var parser = new CqlParser(tokens);
   parser.buildParseTrees = true;
   parser.removeErrorListeners();
   return parser;
};

ParserUtils.getAllTokens= function(cqlText) {
   var chars = new InputStream(cqlText);
   var lexer = new CqlLexer(chars);
   return lexer.getAllTokens();
};

ParserUtils.isQuoted= function(text) {
    return text.length > 1 && text.startsWith(ParserUtils.QUOTE) && text.endsWith(ParserUtils.QUOTE);
};

ParserUtils.stripQuotes= function(text) {
    if (ParserUtils.isQuoted(text)) {
        return text.substring(1, text.length - 1);
    }
    return text;
};

module.exports= ParserUtils;