var _= require("lodash");
var ParserUtils= require("./../../../cql/ParserUtils");
var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var CqlParser= require("./../../../cql/generated/grammar/flights/CqlParser").CqlParser;
var AttributeVisitor= require("./AttributeVisitor");
var FlightResultModel= require("./../models/FlightResultModel");

var SortAttributesVisitor= function(input) {
	CqlVisitor.call(this);
    this._input= input;
}

SortAttributesVisitor.prototype= Object.create(CqlVisitor.prototype);
SortAttributesVisitor.prototype.constructor= SortAttributesVisitor;

SortAttributesVisitor.prototype.defaultValue= function() {
    return {};
};

SortAttributesVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return _.assign({}, aggregate, nextResult);
};

SortAttributesVisitor.prototype.visitSortClause= function(ctx) {
    var result= {};
    var sortOrder= ParserUtils.getTokenName(ctx.sortOrder.type);
    var attribute= new AttributeVisitor().visit(ctx);
    if (attribute === FlightResultModel.propPrice) {
        attribute= FlightResultModel.propPriceValue;
    }
    result[sortOrder]= attribute;
    return result;
}

module.exports = SortAttributesVisitor;

