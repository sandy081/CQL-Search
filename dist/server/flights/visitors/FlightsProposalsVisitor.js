var LastChildVisitor= require("./LastChildVisitor");

var FlightsProposalVisitor= function(proposalsBuilder, selectionHelper) {
	LastChildVisitor.call(this);
    this._proposalsBuilder= proposalsBuilder;
    this._selectionHelper= selectionHelper;
}

FlightsProposalVisitor.prototype= Object.create(LastChildVisitor.prototype);
FlightsProposalVisitor.prototype.constructor= FlightsProposalVisitor;

FlightsProposalVisitor.prototype.visitSimpleClause= function(clauseCtx) {
    var handled= this.visitLastChild(clauseCtx);
    if (clauseCtx.exception !== null) {
        this._handleClauseContextException(clauseCtx);
    }
    return handled;
}

FlightsProposalVisitor.prototype.visitValue= function(valueCLauseCtx) {
    var selection= this._selectionHelper.createSelection(valueCLauseCtx);
    var addLeadingText= this._selectionHelper.needsLeadingSpace(valueCLauseCtx);
    this._proposalsBuilder.createValueProposals(null,selection, addLeadingText);
    return true;
}

FlightsProposalVisitor.prototype.visitFullTextClause= function(fullTextClauseCtx) {
    var selection= this._selectionHelper.createSelection(fullTextClauseCtx);
    if (this._selectionHelper.hasTrailingSpace(fullTextClauseCtx)) {
    } else {
        var addLeadingText= this._selectionHelper.needsLeadingSpace(fullTextClauseCtx);
        this._proposalsBuilder.createAttributeProposals(selection, addLeadingText);
    }
    return LastChildVisitor.prototype.visitFullTextClause.call(this, fullTextClauseCtx);
}

FlightsProposalVisitor.prototype._handleClauseContextException= function(clauseCtx) {
    var selection= this._selectionHelper.createSelection(clauseCtx);
    var needsLeadingSpace= this._selectionHelper.needsLeadingSpace(clauseCtx);
    this._proposalsBuilder.createAttributeProposals(selection, needsLeadingSpace);
}

module.exports = FlightsProposalVisitor;