var antlr4 = require('antlr4/index');

var ParseTreeVisitor= function() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ParseTreeVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ParseTreeVisitor.prototype.constructor = ParseTreeVisitor;

ParseTreeVisitor.prototype.visit= function(tree) {
    return tree.accept(this);
};  
  
ParseTreeVisitor.prototype.visitChildren = function(node) {
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

ParseTreeVisitor.prototype.visitTerminal= function(node) {
    return this.defaultResult();
};

ParseTreeVisitor.prototype.visitErrorNode= function(node) {
    return this.defaultResult();
};

ParseTreeVisitor.prototype.defaultResult= function() {
    return null;
};

ParseTreeVisitor.prototype.aggregateResult= function(aggregate, nextResult) {
    return nextResult;
};

ParseTreeVisitor.prototype.shouldVisitNextChild= function(node, currentResult) {
    return true;
};

exports.ParseTreeVisitor = ParseTreeVisitor;