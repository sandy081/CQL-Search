var antlr4= require('antlr4');
var InputStream= antlr4.InputStream;
var CommonTokenStream= antlr4.CommonTokenStream;
var CqlLexer= require("./../../../cql/generated/grammar/flights/CqlLexer").CqlLexer;
var CqlParser= require("./../../../cql/generated/grammar/flights/CqlParser").CqlParser;

var ParserUtils= function(){};

ParserUtils.createSilentParser= function(cqlText) {
   var chars = new InputStream(cqlText);
   var lexer = new CqlLexer(chars);
   var tokens  = new CommonTokenStream(lexer);
   var parser = new CqlParser(tokens);
   parser.buildParseTrees = true;
   parser.removeAllListeners = true;
   return parser;
};

module.exports= ParserUtils;