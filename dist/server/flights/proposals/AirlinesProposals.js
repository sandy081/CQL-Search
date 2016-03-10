var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var Data= require("./../models/Data")
var airlines= new Backbone.Collection(Data.Airlines(), {parse: true});

var AirlinesProposals= function(){};

AirlinesProposals.prototype.getProposals= function(filterText, input) {
    var airlines= _filterAirlines(filterText);
    var proposalsGroup= new ProposalsGroup();
    proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(_.map(airlines, _toProposal), {model : Proposal}))
    return [proposalsGroup]; 
};

var _filterAirlines= function(filterText) {
  return filterText ? airlines.filter(function(attribute){
        return attribute.get("name").toLowerCase().startsWith(filterText.toLowerCase());  
    }) : airlines.models;
};

var _toProposal= function(attribute) {
    var proposal= new Proposal();
    proposal.set(Proposal.propDisplayString, attribute.get("name"));
    return proposal;
}

module.exports= AirlinesProposals;