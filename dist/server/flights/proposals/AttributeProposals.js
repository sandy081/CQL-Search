var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var AttributeModel= require("./../models/AttributeModel")
var Data= require("./../models/Data")
var attributesGroups= _.mapValues(Data.Attributes(), function(attributes){
   return new Backbone.Collection(attributes, {parse: true, model: AttributeModel}); 
});

var AttributeProposals= function(){};

AttributeProposals.prototype.findAttribute= function(text) {
    var attribute= null;
    _.forIn(attributesGroups, function(attributes, key){
        var attribute= attributes.find({text: text});
    });
    return attribute;
}

AttributeProposals.prototype.getProposals= function(filterText, values) {
    var proposalsGroups= [];
    _.forIn(attributesGroups, function(attributes, key){
        var filteredAttributes= _filterAttribues(attributes, filterText, values);
        var proposalsGroup= new ProposalsGroup();
        var proposals= _.map(filteredAttributes, _toProposal)
        if (!_.isEmpty(proposals)) {
            proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(_.map(filteredAttributes, _toProposal), {model : Proposal}))
            proposalsGroups.push(proposalsGroup);
        }
    });
    return proposalsGroups; 
};

var _filterAttribues= function(attributes, filterText, values) {
  return attributes.filter(function(attribute){
        return _hasToIncludeAttribute(attribute, filterText, values);  
    });
};

var _hasToIncludeAttribute= function(attribute, filterText, values) {
    if (_.has(values, attribute.get(AttributeModel.propText).toLowerCase())) {
        return false;
    }
    
    if (!attribute.get(AttributeModel.propText).toLowerCase().startsWith(filterText.toLowerCase())) {
        return false;
    }
      
    var members= parseInt(values['#'] || "9");
    var adults= parseInt(values['adults'] || "0"); 
    var children= parseInt(values['children'] || "0"); 
    var infants= parseInt(values['infants'] || "0");

    switch(attribute.get(AttributeModel.propText)) {
        case "adults":
            return members > (children + infants);
        case "children":
            return members > (adults + infants);
        case "infants":
            return members > (adults + children);
    }
    
    return true;
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