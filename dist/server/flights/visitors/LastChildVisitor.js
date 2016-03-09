var _= require("lodash");
var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;

var LastChildVisitor= function() {
	CqlVisitor.call(this);
    return this;
}

LastChildVisitor.prototype= Object.create(CqlVisitor.prototype);
LastChildVisitor.prototype.constructor= LastChildVisitor;

LastChildVisitor.prototype.visitClauses= function(ctx) {
    return this.visitLastChild(ctx);
}

LastChildVisitor.prototype.visitLastChild= function(ctx) {
    if (ctx.children == null) {
		return false;
    }

    var lastChild= _.last(ctx.children);
    return lastChild != null ? lastChild.accept(this) : false;
}

LastChildVisitor.prototype.defaultResult= function() {
    return false;
}

LastChildVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return aggregate || nextResult;
}

module.exports = LastChildVisitor;