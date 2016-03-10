var ParserUtils= require("./../../../cql/ParserUtils");
var CqlParser= require("./../../../cql/generated/grammar/flights/CqlParser").CqlParser;
var LastChildVisitor= require("./LastChildVisitor");
var AttributeVisitor= require("./AttributeVisitor");

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

FlightsProposalVisitor.prototype.visitShortClause= function(ctx) {
    var isValidValue= this._isValidValue(ctx.value());
    var hasTrailingSpace= this._selectionHelper.hasTrailingSpace(ctx);
    if (!isValidValue || !hasTrailingSpace) {
        var attribute= ParserUtils.getTokenName(ctx.shortIdentifier.type);
        var selection= isValidValue ? this._selectionHelper.createSelection(ctx.value()) : this._selectionHelper.createAfterSelectionWithContext(ctx);
        this._proposalsBuilder.createValueProposals(attribute, selection, true);
    }
    return true;
}

FlightsProposalVisitor.prototype.visitValue= function(valueClauseCtx) {
    if (valueClauseCtx.exception != null || !this._proposalsBuilder.hasTrailingSpace(valueClauseCtx)) {
        var selection= this._selectionHelper.createSelection(valueClauseCtx);
        var attribute= new AttributeVisitor().visit(valueClauseCtx.parentCtx);
        var addLeadingText= this._selectionHelper.needsLeadingSpace(valueClauseCtx);
        this._proposalsBuilder.createValueProposals(attribute, selection, addLeadingText);
        return true;
    }
    return false;
}

FlightsProposalVisitor.prototype.visitFullTextClause= function(fullTextClauseCtx) {
    var selection= this._selectionHelper.createSelection(fullTextClauseCtx);
    var addLeadingText= this._selectionHelper.needsLeadingSpace(fullTextClauseCtx);
    this._proposalsBuilder.createAttributeProposals(selection, addLeadingText);
    return LastChildVisitor.prototype.visitFullTextClause.call(this, fullTextClauseCtx);
}

FlightsProposalVisitor.prototype._handleClauseContextException= function(clauseCtx) {
    var selection= this._selectionHelper.createSelection(clauseCtx);
    var needsLeadingSpace= this._selectionHelper.needsLeadingSpace(clauseCtx);
    this._proposalsBuilder.createAttributeProposals(selection, needsLeadingSpace);
}

FlightsProposalVisitor.prototype._isValidValue= function(ctx) {
    if (ctx === null) {
        return false;
    }
    if (ctx.exception === null) {
        return true;
    }
    if (ctx.exception.offendingToken.type === CqlParser.EOF) {
        return false;
    }
    if (ctx.exception.offendingToken.toString()) {
        return true;
    }
    return false;
}

module.exports = FlightsProposalVisitor;

