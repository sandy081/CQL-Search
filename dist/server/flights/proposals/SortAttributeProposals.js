var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');
var sortColumns= require("./../models/Data").sortColumns();
var SortAttributeProposals= function(){};

SortAttributeProposals.prototype.getProposals= function(filterText) {
    var sortColumns= _filterSortColumns(filterText);
    if (!_.isEmpty(sortColumns)) {
        var proposalsGroup= new ProposalsGroup();
        proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(_.map(sortColumns, _toProposal), {model : Proposal}))
        return [proposalsGroup];
    }
    return [];
};

var _filterSortColumns= function(filterText) {
  return _.filter(sortColumns, function(sortColumn) {
        return sortColumn.toLowerCase().startsWith(filterText.toLowerCase());   
    });
};

var _toProposal= function(sortColumn) {
    var proposal= new Proposal();
    proposal.set(Proposal.propDisplayString, sortColumn);
    return proposal;
}

module.exports= SortAttributeProposals;