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
    var attributes= new AttributeProposals().getProposals(this._getFilterText(selection), this._input);
    this._proposals.add(attributes);
}

FlightsProposalsBuilder.prototype.createValueProposals= function(attribute, selection, needsLeadingSpace) {
    switch (attribute.toLowerCase()) {
        case "to": 
        case "from": 
            this._proposals.add(new AirportProposals().getProposals(this._getFilterText(selection)));
            return;        
        case "on": 
        case "back": 
            this._proposals.add(new AirportProposals().getProposals(this._getFilterText(selection)));
            return;
        case "#": 
        case "adults": 
        case "children": 
        case "infants": 
            this._proposals.add(new MembersProposals().getProposals(this._getFilterText(selection), attribute, this._values));
            return;        
        case "@": 
            this._proposals.add(new AirlinesProposals().getProposals(this._getFilterText(selection)));
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

module.exports = FlightsProposalsBuilder;