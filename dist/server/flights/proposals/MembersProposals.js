var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var MembersProposals= function(){};

MembersProposals.prototype.getProposals= function(filterText, attribute, values) {
    var proposals= [];
    if (filterText) {
       proposals= [_toProposal(filterText)];
    } else {
        var maxValue= _getMaxValue(attribute, values);
        for (var i=1; i <= maxValue; i++) {
            proposals.push(_toProposal(i));
        }
    }
    var proposalsGroup= new ProposalsGroup();
    proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(proposals, {model : Proposal}));
    return [proposalsGroup]; 
};

var _toProposal= function(number) {
    var proposal= new Proposal();
    proposal.set(Proposal.propDisplayString, "" + number);
    return proposal;
}

var _getMaxValue= function(attribute, values) {
    var members= values['#'] ? values['#'] : 9;
    var adults= values['adults'] || 0; 
    var children= values['children'] || 0; 
    var infants= values['infants'] || 0;
    
    switch(attribute) {
        case "#":
            return 9;
        case "adults":
            return members - children - infants;
        case "children":
            return members - adults - infants;
        case "infants":
            return members - adults - children;
    } 
    
    var proposal= new Proposal();
    proposal.set(Proposal.propDisplayString, "" + number);
    return proposal;
}

module.exports= MembersProposals;