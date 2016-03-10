var _= require("lodash");
var ParserUtils= require("./../../../cql/ParserUtils");
var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var CqlParser= require("./../../../cql/generated/grammar/flights/CqlParser").CqlParser;
var AttributeVisitor= require("./AttributeVisitor");
var ValueVisitor= require("./ValueVisitor");
var Proposal= require('./../../../shared/models/proposals/Proposal');

var AttributeValuesVisitor= function(input) {
	CqlVisitor.call(this);
    this._input= input;
}

AttributeValuesVisitor.prototype= Object.create(CqlVisitor.prototype);
AttributeValuesVisitor.prototype.constructor= AttributeValuesVisitor;

AttributeValuesVisitor.prototype.defaultValue= function() {
    return {};
};

AttributeValuesVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return _.assign({}, aggregate, nextResult);
};

AttributeValuesVisitor.prototype.visitValue= function(ctx) {
    var result= {};
    var attribute= new AttributeVisitor().visit(ctx.parentCtx);
    var text= new ValueVisitor().visit(ctx);
    result[attribute]= text;
    return result;
}

module.exports = AttributeValuesVisitor;

