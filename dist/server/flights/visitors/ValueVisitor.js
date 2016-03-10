var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var ParserUtils= require("./../../../cql/ParserUtils");

var ValueVisitor= function() {
	CqlVisitor.call(this);
    return this;
}

ValueVisitor.prototype= Object.create(CqlVisitor.prototype);
ValueVisitor.prototype.constructor= ValueVisitor;

ValueVisitor.prototype.visitStringValue= function(ctx) {
    return ParserUtils.getStringValue(ctx);
}

ValueVisitor.prototype.visitNumberValue= function(ctx) {
    return  ctx.NUMBER().toString();
}

module.exports= ValueVisitor;
