// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CqlParser.
function CqlListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CqlListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CqlListener.prototype.constructor = CqlListener;

// Enter a parse tree produced by CqlParser#search.
CqlListener.prototype.enterSearch = function(ctx) {
};

// Exit a parse tree produced by CqlParser#search.
CqlListener.prototype.exitSearch = function(ctx) {
};


// Enter a parse tree produced by CqlParser#clauses.
CqlListener.prototype.enterClauses = function(ctx) {
};

// Exit a parse tree produced by CqlParser#clauses.
CqlListener.prototype.exitClauses = function(ctx) {
};


// Enter a parse tree produced by CqlParser#simpleClause.
CqlListener.prototype.enterSimpleClause = function(ctx) {
};

// Exit a parse tree produced by CqlParser#simpleClause.
CqlListener.prototype.exitSimpleClause = function(ctx) {
};


// Enter a parse tree produced by CqlParser#attributeClause.
CqlListener.prototype.enterAttributeClause = function(ctx) {
};

// Exit a parse tree produced by CqlParser#attributeClause.
CqlListener.prototype.exitAttributeClause = function(ctx) {
};


// Enter a parse tree produced by CqlParser#fullTextClause.
CqlListener.prototype.enterFullTextClause = function(ctx) {
};

// Exit a parse tree produced by CqlParser#fullTextClause.
CqlListener.prototype.exitFullTextClause = function(ctx) {
};


// Enter a parse tree produced by CqlParser#sortClause.
CqlListener.prototype.enterSortClause = function(ctx) {
};

// Exit a parse tree produced by CqlParser#sortClause.
CqlListener.prototype.exitSortClause = function(ctx) {
};


// Enter a parse tree produced by CqlParser#searchWord.
CqlListener.prototype.enterSearchWord = function(ctx) {
};

// Exit a parse tree produced by CqlParser#searchWord.
CqlListener.prototype.exitSearchWord = function(ctx) {
};


// Enter a parse tree produced by CqlParser#attribute.
CqlListener.prototype.enterAttribute = function(ctx) {
};

// Exit a parse tree produced by CqlParser#attribute.
CqlListener.prototype.exitAttribute = function(ctx) {
};


// Enter a parse tree produced by CqlParser#operation.
CqlListener.prototype.enterOperation = function(ctx) {
};

// Exit a parse tree produced by CqlParser#operation.
CqlListener.prototype.exitOperation = function(ctx) {
};


// Enter a parse tree produced by CqlParser#value.
CqlListener.prototype.enterValue = function(ctx) {
};

// Exit a parse tree produced by CqlParser#value.
CqlListener.prototype.exitValue = function(ctx) {
};


// Enter a parse tree produced by CqlParser#stringValue.
CqlListener.prototype.enterStringValue = function(ctx) {
};

// Exit a parse tree produced by CqlParser#stringValue.
CqlListener.prototype.exitStringValue = function(ctx) {
};


// Enter a parse tree produced by CqlParser#numberValue.
CqlListener.prototype.enterNumberValue = function(ctx) {
};

// Exit a parse tree produced by CqlParser#numberValue.
CqlListener.prototype.exitNumberValue = function(ctx) {
};



exports.CqlListener = CqlListener;