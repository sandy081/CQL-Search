var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var AttributeVisitor= require("./AttributeVisitor");
var ValueVisitor= require("./ValueVisitor");

var FlightExpressionVisitor= function() {
	CqlVisitor.call(this);
    return this;
}

FlightExpressionVisitor.prototype= Object.create(CqlVisitor.prototype);
FlightExpressionVisitor.prototype.constructor= FlightExpressionVisitor;

FlightExpressionVisitor.visitAttributeClause= function(ctx) {
    var result= {};
    var attribute= new AttributeVisitor().visit(ctx.parentCtx);
    var value= 
    result[attribute]
};

FlightExpressionVisitor.defaultResult= function() {
    return {};
};

module.exports= FlightExpressionVisitor;