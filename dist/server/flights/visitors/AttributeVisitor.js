var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var ParserUtils= require("./../../../cql/ParserUtils");

var AttributeVisitor= function() {
	CqlVisitor.call(this);
    return this;
}

AttributeVisitor.prototype= Object.create(CqlVisitor.prototype);
AttributeVisitor.prototype.constructor= AttributeVisitor;

AttributeVisitor.prototype.visitShortClause= function(ctx) {
    return ParserUtils.getTokenName(ctx.shortIdentifier.type);
}

AttributeVisitor.prototype.visitAttribute= function(ctx) {
    return ParserUtils.getStringValue(ctx.stringValue());
}

module.exports= AttributeVisitor;
