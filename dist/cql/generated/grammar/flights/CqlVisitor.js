// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CqlParser.

function CqlVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CqlVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CqlVisitor.prototype.constructor = CqlVisitor;

// Visit a parse tree produced by CqlParser#search.
CqlVisitor.prototype.visitSearch = function(ctx) {
};


// Visit a parse tree produced by CqlParser#clauses.
CqlVisitor.prototype.visitClauses = function(ctx) {
};


// Visit a parse tree produced by CqlParser#simpleClause.
CqlVisitor.prototype.visitSimpleClause = function(ctx) {
};


// Visit a parse tree produced by CqlParser#attributeClause.
CqlVisitor.prototype.visitAttributeClause = function(ctx) {
};


// Visit a parse tree produced by CqlParser#fullTextClause.
CqlVisitor.prototype.visitFullTextClause = function(ctx) {
};


// Visit a parse tree produced by CqlParser#sortClause.
CqlVisitor.prototype.visitSortClause = function(ctx) {
};


// Visit a parse tree produced by CqlParser#searchWord.
CqlVisitor.prototype.visitSearchWord = function(ctx) {
};


// Visit a parse tree produced by CqlParser#attribute.
CqlVisitor.prototype.visitAttribute = function(ctx) {
};


// Visit a parse tree produced by CqlParser#operation.
CqlVisitor.prototype.visitOperation = function(ctx) {
};


// Visit a parse tree produced by CqlParser#value.
CqlVisitor.prototype.visitValue = function(ctx) {
};


// Visit a parse tree produced by CqlParser#stringValue.
CqlVisitor.prototype.visitStringValue = function(ctx) {
};


// Visit a parse tree produced by CqlParser#numberValue.
CqlVisitor.prototype.visitNumberValue = function(ctx) {
};



exports.CqlVisitor = CqlVisitor;