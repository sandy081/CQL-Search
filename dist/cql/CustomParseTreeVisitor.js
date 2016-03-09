// var ParseTreeVisitor = require('antlr4/index').tree.ParseTreeVisitor;
var ParseTreeVisitor = require('./generated/grammar/flights/CqlVisitor').CqlVisitor;

var CustomParseTreeVisitor= function() {
	ParseTreeVisitor.call(this);
	return this;
}

CustomParseTreeVisitor.prototype = Object.create(ParseTreeVisitor.prototype);
CustomParseTreeVisitor.prototype.constructor = CustomParseTreeVisitor;

CustomParseTreeVisitor.prototype.visit= function(tree) {
    return tree.accept(this);
};  
  
CustomParseTreeVisitor.prototype.visitChildren = function(node) {
    var result= this.defaultResult();
    var n= node.getChildCount();
    for (var i=0; i < n; i++) {
        if (!this.shouldVisitNextChild(node, result)) {
            break;
        }
        
        var childNode= node.getChild(i);
        var childResult= childNode.accept(this);
        result= this.aggregateResult(result, childResult);
    }
    return result;
};

CustomParseTreeVisitor.prototype.visitTerminal= function(node) {
    return this.defaultResult();
};

CustomParseTreeVisitor.prototype.visitErrorNode= function(node) {
    return this.defaultResult();
};

CustomParseTreeVisitor.prototype.defaultResult= function() {
    return null;
};

CustomParseTreeVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return nextResult;
};

CustomParseTreeVisitor.prototype.shouldVisitNextChild= function(node, currentResult) {
    return true;
};

module.exports = CustomParseTreeVisitor;