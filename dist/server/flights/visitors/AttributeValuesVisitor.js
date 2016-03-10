var _= require("lodash");
var ParserUtils= require("./../../../cql/ParserUtils");
var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var CqlParser= require("./../../../cql/generated/grammar/flights/CqlParser").CqlParser;
var AttributeVisitor= require("./AttributeVisitor");
var Proposal= require('./../../../shared/models/proposals/Proposal');

var AttributeValuesVisitor= function(input, selectionHelper) {
	CqlVisitor.call(this);
    this._input= input;
    this._selectionHelper= selectionHelper;
}

AttributeValuesVisitor.prototype= Object.create(CqlVisitor.prototype);
AttributeValuesVisitor.prototype.constructor= AttributeValuesVisitor;

AttributeValuesVisitor.prototype.defaultValue= function() {
    return {};
};

AttributeValuesVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return _.assign({}, aggregate, nextResult);
};

AttributeValuesVisitor.prototype.visitValue= function(valueClauseCtx) {
    var result= {};
    var selection= this._selectionHelper.createSelection(valueClauseCtx);
    var attribute= new AttributeVisitor().visit(valueClauseCtx.parentCtx);
    var text= this._input.substring(selection[Proposal.propSelectionFrom], selection[Proposal.propSelectionTill] + 1);
    result[attribute]= text;
    return result;
}

module.exports = AttributeValuesVisitor;

