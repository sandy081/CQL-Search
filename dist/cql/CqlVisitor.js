var ParseTreeVisitor = require('./ParseTreeVisitor');

function CqlVisitor() {
	ParseTreeVisitor.call(this);
	return this;
}

CqlVisitor.prototype = Object.create(ParseTreeVisitor.prototype);
CqlVisitor.prototype.constructor = CqlVisitor;

// Visit a parse tree produced by CqlParser#search.
CqlVisitor.prototype.visitSearch = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#clauses.
CqlVisitor.prototype.visitClauses = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#simpleClause.
CqlVisitor.prototype.visitSimpleClause = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#attributeClause.
CqlVisitor.prototype.visitAttributeClause = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#shortClause.
CqlVisitor.prototype.visitShortClause = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#fullTextClause.
CqlVisitor.prototype.visitFullTextClause = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#searchWord.
CqlVisitor.prototype.visitSearchWord = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#attribute.
CqlVisitor.prototype.visitAttribute = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#operation.
CqlVisitor.prototype.visitOperation = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#value.
CqlVisitor.prototype.visitValue = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#stringValue.
CqlVisitor.prototype.visitStringValue = function(ctx) {
    this.visitChildren();
};


// Visit a parse tree produced by CqlParser#numberValue.
CqlVisitor.prototype.visitNumberValue = function(ctx) {
    this.visitChildren();
};

exports.CqlVisitor = CqlVisitor;