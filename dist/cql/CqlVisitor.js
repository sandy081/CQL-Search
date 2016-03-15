var ParseTreeVisitor = require('./CustomParseTreeVisitor');

function CqlVisitor() {
	ParseTreeVisitor.call(this);
	return this;
}

CqlVisitor.prototype = Object.create(ParseTreeVisitor.prototype);
CqlVisitor.prototype.constructor = CqlVisitor;

// Visit a parse tree produced by CqlParser#search.
CqlVisitor.prototype.visitSearch = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#clauses.
CqlVisitor.prototype.visitClauses = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#simpleClause.
CqlVisitor.prototype.visitSimpleClause = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#attributeClause.
CqlVisitor.prototype.visitAttributeClause = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#shortClause.
CqlVisitor.prototype.visitShortClause = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#fullTextClause.
CqlVisitor.prototype.visitFullTextClause = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by CqlParser#sortClause.
CqlVisitor.prototype.visitSortClause = function(ctx) {
    return this.visitChildren(ctx);
};

// Visit a parse tree produced by CqlParser#searchWord.
CqlVisitor.prototype.visitSearchWord = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#attribute.
CqlVisitor.prototype.visitAttribute = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#operation.
CqlVisitor.prototype.visitOperation = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#value.
CqlVisitor.prototype.visitValue = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#stringValue.
CqlVisitor.prototype.visitStringValue = function(ctx) {
    return this.visitChildren(ctx);
};


// Visit a parse tree produced by CqlParser#numberValue.
CqlVisitor.prototype.visitNumberValue = function(ctx) {
    return this.visitChildren(ctx);
};

exports.CqlVisitor = CqlVisitor;