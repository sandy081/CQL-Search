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
    if (!handled) {
        var selection= this._selectionHelper.createSelection(ctx);
        // this._proposalsBuilder.createAttributeProposals(selection);
    }
    return handled;
}

FlightsProposalVisitor.prototype.visitAttribute= function(ctx) {
    var selection= this._selectionHelper.createSelection(ctx);
    // this._proposalsBuilder.createAttributeProposals(selection);
    return true;
}

FlightsProposalVisitor.prototype.visitValue= function(ctx) {
    if (!this._selectionHelper.hasTrailingSpace(ctx)) {
        var attribute= new AttributeVisitor().visit(ctx.parentCtx);
        var selection= this._selectionHelper.createSelection(ctx);
        var needLeadingSpace= this._selectionHelper.needsLeadingSpace(ctx);
        // this._proposalsBuilder.createValueProposals(attribute, selection, needLeadingSpace);
        return true;
    }
    return false;
}

FlightsProposalVisitor.prototype.visitSortClause= function(ctx) {
    if (!this._selectionHelper.hasTrailingSpace(ctx)) {
        var selection= this._selectionHelper.createSelection(ctx.attribute());
        this._proposalsBuilder.createSortAttributeProposals(selection, true);
        return true;
    }
    return false;
}

module.exports = FlightsProposalVisitor;

