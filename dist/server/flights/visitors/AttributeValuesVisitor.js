var _= require("lodash");
var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var AttributeVisitor= require("./AttributeVisitor");
var ValueVisitor= require("./ValueVisitor");

var AttributeValuesVisitor= function() {
	CqlVisitor.call(this);
}

AttributeValuesVisitor.prototype= Object.create(CqlVisitor.prototype);
AttributeValuesVisitor.prototype.constructor= AttributeValuesVisitor;

AttributeValuesVisitor.prototype.defaultValue= function() {
    return {};
};

AttributeValuesVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return _.assign(aggregate, nextResult);
};

AttributeValuesVisitor.prototype.visitAttributeClause= function(ctx) {
    var result= {};
    // TODO: Collect attribute value pair
    return result;
}

module.exports = AttributeValuesVisitor;

