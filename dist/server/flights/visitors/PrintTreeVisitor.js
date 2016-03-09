var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;

var PrintTreeVisitor= function() {
    this.result= [];
    CqlVisitor.call(this);
    return this;
};

PrintTreeVisitor.prototype= Object.create(CqlVisitor.prototype);
PrintTreeVisitor.prototype.constructor= PrintTreeVisitor;

PrintTreeVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return this.nextResult;
};

PrintTreeVisitor.prototype.visit= function(ctx) {
    return CqlVisitor.prototype.visit.call(this, ctx);
};

module.exports = PrintTreeVisitor;