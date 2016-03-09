var ParserUtils= require("./../visitors/ParserUtils");
var PrintTreeVisitor= require("./../visitors/PrintTreeVisitor");

var FlightsGrammarVisitorRestService= function(){};

FlightsGrammarVisitorRestService.prototype.serve= function(req, res) {
   var cqlText= req.query.cqlText;
   var parser= ParserUtils.createSilentParser(cqlText);
   var result= new PrintTreeVisitor().visit(parser.search());
   res.send(result);
};

module.exports= FlightsGrammarVisitorRestService;