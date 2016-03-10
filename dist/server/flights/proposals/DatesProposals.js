var Backbone= require('backbone');
var _= require('lodash');
var DateModel= require("./../models/DateModel")
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var Data= require("./../models/Data")
var dates= new Backbone.Collection(Data.Dates(), {parse: true, model: DateModel});

var DatesProposals= function(){};

DatesProposals.prototype.getProposals= function(filterText, attribute, values) {
    var proposalsGroups= [];
    var otherDateAttribute= attribute === "dep" ? "ret" : "dep";
    var filteredDates= _filterDates(filterText, otherDateAttribute, values[otherDateAttribute]);
    
    var proposals= _.map(filteredDates, _toProposal);
    if (!_.isEmpty(proposals)) {
        var proposalsGroup= new ProposalsGroup();
        proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(proposals, {model : Proposal}))
        proposalsGroups.push(proposalsGroup);
    }   
    proposalsGroups.push(_createAnyDateProposalGroup());   
    return proposalsGroups;
};

var _filterDates= function(filterText, attribute, value) {
  return attribute === "dep" ? _filterDatesBefore(filterText, value) : _filterDatesAfter(filterText, value);   
};

var _filterDatesBefore= function(filterText, dateValue) {
  return dates.filter(function(date){
        return (!dateValue || date.isBefore(dateValue)) && date.get(DateModel.propName).toLowerCase().startsWith(filterText.toLowerCase());  
    });
};

var _filterDatesAfter= function(filterText, dateValue) {
  return dates.filter(function(date){
        return (!dateValue || !date.isBefore(dateValue)) && date.get(DateModel.propName).toLowerCase().startsWith(filterText.toLowerCase());  
    });
};

var _toProposal= function(date) {
    var proposal= new Proposal();
    var description= date.get(DateModel.propDescription);
    proposal.set(Proposal.propDisplayString, date.get(DateModel.propName));
    if (description) {
        proposal.set(Proposal.propText, description);
    }
    return proposal;
};

var _createAnyDateProposalGroup= function(date) {
    var anyDateProposalsGroup= new ProposalsGroup();
    var anyDateProposal= new Proposal();
    anyDateProposal.set(Proposal.propDisplayString, "dd-mm");
    anyDateProposal.set(Proposal.propText, "Date format");
    anyDateProposal.set(Proposal.propDisabled, true);
    anyDateProposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection([anyDateProposal], {model : Proposal}))
    return anyDateProposalsGroup;
};

module.exports= DatesProposals;