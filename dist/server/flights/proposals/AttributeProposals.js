var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var AttributeModel= require("./../models/AttributeModel")
var Data= require("./../models/Data")
var attributes= new Backbone.Collection(Data.Attributes(), {parse: true, model: AttributeModel});

var AttributeProposals= function(){};

AttributeProposals.prototype.getProposals= function(filterText, input) {
    var attributes= input ? _filterAttribues(filterText) : _getInitialAttributes();
    var proposalsGroup= new ProposalsGroup();
    proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(_.map(attributes, _toProposal), {model : Proposal}))
    return [proposalsGroup]; 
};

var _filterAttribues= function(filterText) {
  return filterText ? attributes.filter(function(attribute){
        return attribute.get(AttributeModel.propText).toLowerCase().startsWith(filterText.toLowerCase());  
    }) : attributes.models;
};

var _getInitialAttributes= function() {
  var initialAttributes= ["to", "from"];  
  return attributes.filter(function(attribute){
        return _.indexOf(initialAttributes, attribute.get(AttributeModel.propText)) !== -1;  
    });
};

var _toProposal= function(attribute) {
    var proposal= new Proposal();
    var name= attribute.get(AttributeModel.propName);
    var text= attribute.get(AttributeModel.propText);
    var ops= attribute.get(AttributeModel.propOps);
    proposal.set(Proposal.propDisplayString, ops ? text + ops[0] : text);
    if (name !== text) {
        proposal.set(Proposal.propText, attribute.get(AttributeModel.propName));
    }
    return proposal;
}

module.exports= AttributeProposals;