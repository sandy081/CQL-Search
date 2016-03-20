var _= require("lodash");
var Backbone= require("backbone");
var AttributeProposals= require("./AttributeProposals");
var AirportProposals= require("./AirportProposals");
var AirlinesProposals= require("./AirlinesProposals");
var MembersProposals= require("./MembersProposals");
var DatesProposals= require("./DatesProposals");
var SortAttributeProposals= require("./SortAttributeProposals");
var ParserUtils= require('./../../../cql/ParserUtils');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var AttributeValuesVisitor= require('./../visitors/AttributeValuesVisitor');
var AttributeModel= require('./../models/AttributeModel');

var FlightsProposalsBuilder= function(input) {
    this._input= input;
    this._proposals= new Backbone.Collection([], {model: ProposalsGroup});
    var parser= ParserUtils.createSilentParser(input);
    this._values= _toLowerCase(new AttributeValuesVisitor().visit(parser.search())); 
}

FlightsProposalsBuilder.prototype.createAttributeProposals= function(selection) {
    var attributeProposals= new AttributeProposals().getProposals(this._getFilterText(selection), this._values);
    this._addToProposals(attributeProposals, selection, false);
}

FlightsProposalsBuilder.prototype.createValueProposals= function(attribute, selection, needsLeadingSpace) {
    var attributeModel= new AttributeProposals().findAttribute(attribute);
    if (attributeModel && attributeModel.get(AttributeModel.propType) === "city") {
        this._addToProposals(new AirportProposals().getProposals(this._getFilterText(selection), attribute.toLowerCase(), this._values), selection, true);
        return;
    }
    
    attribute= attribute.toLowerCase();
    switch (attribute) {
        case "to": 
        case "from": 
            this._addToProposals(new AirportProposals().getProposals(this._getFilterText(selection), attribute, this._values), selection, true);
            return;        
        case "dep": 
        case "ret": 
            this._addToProposals(new DatesProposals().getProposals(this._getFilterText(selection), attribute, this._values), selection, true);
            return;
        case "#": 
        case "adults": 
        case "children": 
        case "infants": 
            this._addToProposals(new MembersProposals().getProposals(this._getFilterText(selection), attribute, this._values), selection, true);
            return;        
        case "@": 
            this._addToProposals(new AirlinesProposals().getProposals(this._getFilterText(selection)), selection, true);
            return;        
    }
}

FlightsProposalsBuilder.prototype.createSortAttributeProposals= function(selection, needsLeadingSpace) {
    var sortProposals= new SortAttributeProposals().getProposals(this._getFilterText(selection), this._values);
    this._addToProposals(sortProposals, selection, true);
}


FlightsProposalsBuilder.prototype.getProposals= function() {
    return this._proposals;
}

FlightsProposalsBuilder.prototype._getFilterText= function(selection) {
    var text= this._input.substring(selection[Proposal.propSelectionFrom], selection[Proposal.propSelectionTill] + 1);
    if (!text) {
        return "";
    }

    if (ParserUtils.isQuoted(text)) {
        return ParserUtils.stripQuotes(text);
    }

    if (text.startsWith(ParserUtils.QUOTE)) {
        if (text.length === 1) {
            return " ";
        }
        return text.substring(1);
    }
    return text;
}

FlightsProposalsBuilder.prototype._addToProposals= function(proposalsGroups, selection, addTrailingSpace) {
    this._updateProposal(proposalsGroups, selection, addTrailingSpace);
    this._proposals.add(proposalsGroups);
};

FlightsProposalsBuilder.prototype._updateProposal= function(proposalsGroups, selection, addTrailingSpace) {
    _.each(proposalsGroups, function(proposalsGroup){
       proposalsGroup.get(ProposalsGroup.propProposals).each(function(proposal){
          proposal.set(Proposal.propSelection, selection);
          if (addTrailingSpace) {
            proposal.set(Proposal.propDisplayString, proposal.get(Proposal.propDisplayString) + " ");
          } 
       }); 
    });
};

var _toLowerCase= function(attributeValues) {
    return _.transform(attributeValues, function(result, value, key){
        result[key.toLowerCase()]= value;
    }, {});  
};

module.exports = FlightsProposalsBuilder;