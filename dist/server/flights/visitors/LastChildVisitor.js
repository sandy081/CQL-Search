var _= require('lodash');
var CqlVisitor= require("./../../../generated/cql/grammar/flights/CqlVisitor").CqlVisitor;

var LastChildVisitor= function() {
    CqlVisitor.call(this);
};

LastChildVisitor.prototype= Object.create(CqlVisitor.prototype);
LastChildVisitor.prototype.constructor= LastChildVisitor;

LastChildVisitor.prototype.visitSearch= function(ctx) {
    return this.visitLastChild(ctx);

LastChildVisitor.prototype.visitClauses= function(ctx) {
    return this.visitLastChild(ctx);
}

LastChildVisitor.prototype.visitLastChild= function(ctx) {
    if (ctx.children == null) {
		return false;
    }

    var lastChild= ctx.children.get(ctx.children.size() - 1);
    return lastChild != null ? lastChild.accept(this) : false;
}

module.exports = LastChildVisitor;