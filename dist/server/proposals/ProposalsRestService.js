// TODO: Dynamic services in node js
var FlightsProposalsService= require("./../flights/FlightsProposalsService");

var ProposalsRestService= function(){};
  
ProposalsRestService.prototype.serve= function(request, response) {
  var proposals= new FlightsProposalsService().getProposals("");
  response.send(proposals.toJSON());
};

module.exports= ProposalsRestService;