var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../shared/models/proposals/ProposalsGroup');

var _toProposal= function(displayString) {
    var proposal= new Proposal();
    proposal.set(Proposal.propDisplayString, displayString);
    return proposal;
}

var _toProposalsGroup= function(title, proposalOrProposals) {
    proposalOrProposals= _.isArray(proposalOrProposals) ? proposalOrProposals : [proposalOrProposals];
    var proposalsGroup= new ProposalsGroup();
    proposalsGroup.set(ProposalsGroup.propTitle, title);
    proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(proposalOrProposals, {model : Proposal}));
    return proposalsGroup;
}

var FlightsProposalsService= function(){};

FlightsProposalsService.prototype.getProposals= function(searchText) {
    var proposalsGroups= [];
    proposalsGroups.push(_toProposalsGroup("Germany", [_toProposal("Berlin"), _toProposal("Frankfurt"), _toProposal("Munich")]));
    proposalsGroups.push(_toProposalsGroup("Switzerland", [_toProposal("Berne"), _toProposal("Geneva"),_toProposal("Zurich")]));
    return new Backbone.Collection(proposalsGroups, {model: ProposalsGroup});                                                       
};

module.exports= FlightsProposalsService;