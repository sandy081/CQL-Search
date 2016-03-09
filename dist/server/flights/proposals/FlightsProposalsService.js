var ParserUtils= require('./../../../cql/ParserUtils');
var SelectionHelper= require('./../../../cql/SelectionHelper');
var FlightsProposalsVisitor= require('./../visitors/FlightsProposalsVisitor');
var FlightsProposalsBuilder= require('./FlightsProposalsBuilder');

var FlightsProposalsService= function(){};

FlightsProposalsService.prototype.getProposals= function(searchText) {
   var parser= ParserUtils.createSilentParser(searchText);
   var flightsProposalsBuilder= new FlightsProposalsBuilder();
   new FlightsProposalsVisitor(flightsProposalsBuilder, new SelectionHelper(searchText)).visit(parser.search());
   return flightsProposalsBuilder.getProposals();
};

module.exports= FlightsProposalsService;