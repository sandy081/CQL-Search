var LastChildVisitor= require("./LastChildVisitor");

var FlightsProposalVisitor= function(proposalsBuilder, selectionHelper) {
	LastChildVisitor.call(this);
    this._proposalsBuilder= proposalsBuilder;
    this._selectionHelper= selectionHelper;
}

FlightsProposalVisitor.prototype= Object.create(LastChildVisitor.prototype);
FlightsProposalVisitor.prototype.constructor= FlightsProposalVisitor;

FlightsProposalVisitor.prototype.visitSimpleClause= function(clauseCtx) {
    var handled= LastChildVisitor.prototype.visitSimpleClause.call(this, clauseCtx);
    if (clauseCtx.exception !== null) {
        this._handleClauseContextException(clauseCtx);
    }
    return handled;
}

FlightsProposalVisitor.prototype._handleClauseContextException= function(clauseCtx) {
    // var selection= this._selectionHelper.createSelection(clauseCtx);
    // var needsLeadingSpace= this._selectionHelper.needsLeadingSpace(clauseCtx);
    this._proposalsBuilder.createAttributeProposals(null, true);
}

module.exports = FlightsProposalVisitor;