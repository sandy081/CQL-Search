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

FlightsProposalVisitor.prototype.visitSimpleClause= function(ctx) {
    var handled= this.visitLastChild(ctx);
    if (!handled || ctx.exception !== null) {
        var selection= this._selectionHelper.createSelection(ctx);
        var needsLeadingSpace= this._selectionHelper.needsLeadingSpace(ctx);
        this._proposalsBuilder.createAttributeProposals(selection, needsLeadingSpace);
    }
    return handled;
}

FlightsProposalVisitor.prototype.visitShortClause= function(ctx) {
    var isValidValue= _isValidValue(ctx.value());
    var hasTrailingSpace= this._selectionHelper.hasTrailingSpace(ctx);
    if (!isValidValue || !hasTrailingSpace) {
        var attribute= ParserUtils.getTokenName(ctx.shortIdentifier.type);
        var selection= isValidValue ? this._selectionHelper.createSelection(ctx.value()) : this._selectionHelper.createAfterSelectionWithContext(ctx);
        this._proposalsBuilder.createValueProposals(attribute, selection, true);
        return true;
    }
    return false;
}

FlightsProposalVisitor.prototype.visitSortClause= function(ctx) {
    if (ctx.EQUALS() === null) {
        var selection= this._selectionHelper.createSelection(ctx);
        var needsLeadingSpace= this._selectionHelper.needsLeadingSpace(ctx);
        this._proposalsBuilder.createAttributeProposals(selection, needsLeadingSpace);
        return true;
    }
    
    var isValidValue= _isValidValue(ctx.attribute());
    var hasTrailingSpace= this._selectionHelper.hasTrailingSpace(ctx);
    if (!isValidValue || !hasTrailingSpace) {
        var selection= isValidValue ? this._selectionHelper.createSelection(ctx.attribute()) : this._selectionHelper.createAfterSelectionWithContext(ctx);
        this._proposalsBuilder.createSortAttributeProposals(selection, true);
        return true;
    }
    return false;
}

FlightsProposalVisitor.prototype.visitValue= function(ctx) {
    if (ctx.exception != null || !this._selectionHelper.hasTrailingSpace(ctx)) {
        var selection= this._selectionHelper.createSelection(ctx);
        var attribute= new AttributeVisitor().visit(ctx.parentCtx);
        var addLeadingText= this._selectionHelper.needsLeadingSpace(ctx);
        this._proposalsBuilder.createValueProposals(attribute, selection, addLeadingText);
        return true;
    }
    return false;
}

FlightsProposalVisitor.prototype.visitFullTextClause= function(ctx) {
    var selection= this._selectionHelper.createSelection(ctx);
    var addLeadingText= this._selectionHelper.needsLeadingSpace(ctx);
    this._proposalsBuilder.createAttributeProposals(selection, addLeadingText);
    return true;
}

var _isValidValue= function(ctx) {
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

