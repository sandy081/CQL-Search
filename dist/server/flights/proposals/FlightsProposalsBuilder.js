var Backbone= require("backbone");
var AirportProposals= require("./AirportProposals");
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var FlightsProposalsBuilder= function() {
    this._proposals= new Backbone.Collection([], {model: ProposalsGroup});
}

FlightsProposalsBuilder.prototype.createAttributeProposals= function(selection, needsLeadingSpace) {
    var airports= new AirportProposals().getProposals("");
    this._proposals.add(airports);
}

FlightsProposalsBuilder.prototype.getProposals= function() {
    return this._proposals;
}

module.exports = FlightsProposalsBuilder;