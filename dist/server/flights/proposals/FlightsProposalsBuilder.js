var Backbone= require("backbone");
var AttributeProposals= require("./AttributeProposals");
var AirportProposals= require("./AirportProposals");
var ParserUtils= require('./../../../cql/ParserUtils');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');
var Proposal= require('./../../../shared/models/proposals/Proposal');

var FlightsProposalsBuilder= function(input) {
    this._input= input;
    this._proposals= new Backbone.Collection([], {model: ProposalsGroup});
}

FlightsProposalsBuilder.prototype.createAttributeProposals= function(selection, needsLeadingSpace) {
    var airports= new AttributeProposals().getProposals(this._getFilterText(selection));
    this._proposals.add(airports);
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