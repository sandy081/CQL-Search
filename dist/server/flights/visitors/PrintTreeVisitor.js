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

PrintTreeVisitor.prototype.visitSearch= function(ctx) {
    return this.result;
};

module.exports = PrintTreeVisitor;