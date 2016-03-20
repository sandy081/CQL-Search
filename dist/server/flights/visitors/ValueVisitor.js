var CqlVisitor= require("./../../../cql/CqlVisitor").CqlVisitor;
var ParserUtils= require("./../../../cql/ParserUtils");

var ValueVisitor= function() {
	CqlVisitor.call(this);
    return this;
}

ValueVisitor.prototype= Object.create(CqlVisitor.prototype);
ValueVisitor.prototype.constructor= ValueVisitor;

ValueVisitor.prototype.visitValue= function(ctx) {
    if (ctx.children !== null) {
        var numberValue= ctx.numberValue();
        if (numberValue !== null) {
            return  parseInt(numberValue.NUMBER().toString());    
        }
        var stringValue= ctx.stringValue();
        if (stringValue !== null) {
            return ParserUtils.getStringValue(stringValue);    
        }
    }
    return null;
}

module.exports= ValueVisitor;
