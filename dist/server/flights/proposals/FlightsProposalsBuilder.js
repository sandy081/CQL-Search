var _= require("lodash");
var Backbone= require("backbone");
var AttributeProposals= require("./AttributeProposals");
var AirportProposals= require("./AirportProposals");
var AirlinesProposals= require("./AirlinesProposals");
var MembersProposals= require("./MembersProposals");
var ParserUtils= require('./../../../cql/ParserUtils');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var AttributeValuesVisitor= require('./../visitors/AttributeValuesVisitor');
var SelectionHelper= require('./../../../cql/SelectionHelper');

var FlightsProposalsBuilder= function(input) {
    this._input= input;
    this._proposals= new Backbone.Collection([], {model: ProposalsGroup});
    var parser= ParserUtils.createSilentParser(input);
    this._values= new AttributeValuesVisitor(input, new SelectionHelper(input)).visit(parser.search()); 
}

FlightsProposalsBuilder.prototype.createAttributeProposals= function(selection, needsLeadingSpace) {
    var attributeProposals= new AttributeProposals().getProposals(this._getFilterText(selection), this._values);
    this._addToProposals(attributeProposals, selection);
}

FlightsProposalsBuilder.prototype.createValueProposals= function(attribute, selection, needsLeadingSpace) {
    switch (attribute.toLowerCase()) {
        case "to": 
        case "from": 
            this._addToProposals(new AirportProposals().getProposals(this._getFilterText(selection), attribute, this._values), selection);
            return;        
        case "on": 
        case "back": 
            this._addToProposals(new AirportProposals().getProposals(this._getFilterText(selection)), selection);
            return;
        case "#": 
        case "adults": 
        case "children": 
        case "infants": 
            this._addToProposals(new MembersProposals().getProposals(this._getFilterText(selection), attribute, this._values), selection);
            return;        
        case "@": 
            this._addToProposals(new AirlinesProposals().getProposals(this._getFilterText(selection)), selection);
            return;        
    }
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
        if (text.length() == 1) {
            return " ";
        }
        return text.substring(1);
    }
    return text;
}

FlightsProposalsBuilder.prototype._addToProposals= function(proposalsGroups, selection) {
    this._setSelection(proposalsGroups, selection);
    this._proposals.add(proposalsGroups);
};

FlightsProposalsBuilder.prototype._setSelection= function(proposalsGroups, selection) {
    _.each(proposalsGroups, function(proposalsGroup){
       proposalsGroup.get(ProposalsGroup.propProposals).each(function(proposal){
          proposal.set(Proposal.propSelection, selection); 
       }); 
    });
};

module.exports = FlightsProposalsBuilder;