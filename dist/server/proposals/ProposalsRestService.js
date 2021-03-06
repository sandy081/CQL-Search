// TODO: Dynamic services in node js
var FlightsProposalsService= require("./../flights/proposals/FlightsProposalsService");

var ProposalsRestService= function(){};
  
ProposalsRestService.prototype.serve= function(request, response) {
    response.setHeader('Content-Type', 'text/json');
    var proposals= new FlightsProposalsService().getProposals(request.query.input);
    response.send(proposals.toJSON());
};

module.exports= ProposalsRestService;