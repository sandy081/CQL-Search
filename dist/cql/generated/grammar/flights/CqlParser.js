// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CqlListener = require('./CqlListener').CqlListener;
var CqlVisitor = require('./CqlVisitor').CqlVisitor;

var grammarFileName = "Cql.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u000bN\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0007\u0003#\n\u0003\f\u0003\u000e\u0003",
    "&\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004+\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0007\u00079\n\u0007\f\u0007\u000e\u0007<\u000b\u0007\u0003\b\u0003",
    "\b\u0005\b@\n\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b",
    "\u0005\u000bH\n\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0002",
    "\u0004\u0004\f\u000e\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u0002\u0005\u0003\u0002\u0005\u0006\u0003\u0002\u0003\u0004",
    "\u0003\u0002\b\tG\u0002\u001a\u0003\u0002\u0002\u0002\u0004\u001d\u0003",
    "\u0002\u0002\u0002\u0006*\u0003\u0002\u0002\u0002\b,\u0003\u0002\u0002",
    "\u0002\n0\u0003\u0002\u0002\u0002\f3\u0003\u0002\u0002\u0002\u000e?",
    "\u0003\u0002\u0002\u0002\u0010A\u0003\u0002\u0002\u0002\u0012C\u0003",
    "\u0002\u0002\u0002\u0014G\u0003\u0002\u0002\u0002\u0016I\u0003\u0002",
    "\u0002\u0002\u0018K\u0003\u0002\u0002\u0002\u001a\u001b\u0005\u0004",
    "\u0003\u0002\u001b\u001c\u0007\u0002\u0002\u0003\u001c\u0003\u0003\u0002",
    "\u0002\u0002\u001d\u001e\b\u0003\u0001\u0002\u001e\u001f\u0005\u0006",
    "\u0004\u0002\u001f$\u0003\u0002\u0002\u0002 !\f\u0003\u0002\u0002!#",
    "\u0005\u0006\u0004\u0002\" \u0003\u0002\u0002\u0002#&\u0003\u0002\u0002",
    "\u0002$\"\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002\u0002%\u0005\u0003",
    "\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002\'+\u0005\b\u0005\u0002",
    "(+\u0005\n\u0006\u0002)+\u0005\f\u0007\u0002*\'\u0003\u0002\u0002\u0002",
    "*(\u0003\u0002\u0002\u0002*)\u0003\u0002\u0002\u0002+\u0007\u0003\u0002",
    "\u0002\u0002,-\u0005\u0010\t\u0002-.\u0005\u0012\n\u0002./\u0005\u0014",
    "\u000b\u0002/\t\u0003\u0002\u0002\u000201\t\u0002\u0002\u000212\u0005",
    "\u0014\u000b\u00022\u000b\u0003\u0002\u0002\u000234\b\u0007\u0001\u0002",
    "45\u0005\u000e\b\u00025:\u0003\u0002\u0002\u000267\f\u0003\u0002\u0002",
    "79\u0005\u000e\b\u000286\u0003\u0002\u0002\u00029<\u0003\u0002\u0002",
    "\u0002:8\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;\r\u0003",
    "\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002=@\u0005\u0018\r\u0002>",
    "@\u0005\u0016\f\u0002?=\u0003\u0002\u0002\u0002?>\u0003\u0002\u0002",
    "\u0002@\u000f\u0003\u0002\u0002\u0002AB\u0005\u0016\f\u0002B\u0011\u0003",
    "\u0002\u0002\u0002CD\t\u0003\u0002\u0002D\u0013\u0003\u0002\u0002\u0002",
    "EH\u0005\u0018\r\u0002FH\u0005\u0016\f\u0002GE\u0003\u0002\u0002\u0002",
    "GF\u0003\u0002\u0002\u0002H\u0015\u0003\u0002\u0002\u0002IJ\t\u0004",
    "\u0002\u0002J\u0017\u0003\u0002\u0002\u0002KL\u0007\u0007\u0002\u0002",
    "L\u0019\u0003\u0002\u0002\u0002\u0007$*:?G"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "':'", "'>'", "'#'", "'@'" ];

var symbolicNames = [ 'null', "EQUALS", "GREATER_THAN", "MEMBERS_IDENTIFIER", 
                      "OWNER_IDENTIFIER", "NUMBER", "STRING_LITERAL", "QUOTED_STRING_LITERAL", 
                      "UNTERMINATED_QUOTED_STRING_LITERAL", "WHITESPACE" ];

var ruleNames =  [ "search", "clauses", "simpleClause", "attributeClause", 
                   "shortClause", "fullTextClause", "searchWord", "attribute", 
                   "operation", "value", "stringValue", "numberValue" ];

function CqlParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CqlParser.prototype = Object.create(antlr4.Parser.prototype);
CqlParser.prototype.constructor = CqlParser;

Object.defineProperty(CqlParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CqlParser.EOF = antlr4.Token.EOF;
CqlParser.EQUALS = 1;
CqlParser.GREATER_THAN = 2;
CqlParser.MEMBERS_IDENTIFIER = 3;
CqlParser.OWNER_IDENTIFIER = 4;
CqlParser.NUMBER = 5;
CqlParser.STRING_LITERAL = 6;
CqlParser.QUOTED_STRING_LITERAL = 7;
CqlParser.UNTERMINATED_QUOTED_STRING_LITERAL = 8;
CqlParser.WHITESPACE = 9;

CqlParser.RULE_search = 0;
CqlParser.RULE_clauses = 1;
CqlParser.RULE_simpleClause = 2;
CqlParser.RULE_attributeClause = 3;
CqlParser.RULE_shortClause = 4;
CqlParser.RULE_fullTextClause = 5;
CqlParser.RULE_searchWord = 6;
CqlParser.RULE_attribute = 7;
CqlParser.RULE_operation = 8;
CqlParser.RULE_value = 9;
CqlParser.RULE_stringValue = 10;
CqlParser.RULE_numberValue = 11;

function SearchContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_search;
    return this;
}

SearchContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SearchContext.prototype.constructor = SearchContext;

SearchContext.prototype.clauses = function() {
    return this.getTypedRuleContext(ClausesContext,0);
};

SearchContext.prototype.EOF = function() {
    return this.getToken(CqlParser.EOF, 0);
};

SearchContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterSearch(this);
	}
};

SearchContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitSearch(this);
	}
};

SearchContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitSearch(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.SearchContext = SearchContext;

CqlParser.prototype.search = function() {

    var localctx = new SearchContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CqlParser.RULE_search);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.clauses(0);
        this.state = 25;
        this.match(CqlParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClausesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_clauses;
    return this;
}

ClausesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClausesContext.prototype.constructor = ClausesContext;

ClausesContext.prototype.simpleClause = function() {
    return this.getTypedRuleContext(SimpleClauseContext,0);
};

ClausesContext.prototype.clauses = function() {
    return this.getTypedRuleContext(ClausesContext,0);
};

ClausesContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterClauses(this);
	}
};

ClausesContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitClauses(this);
	}
};

ClausesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitClauses(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CqlParser.prototype.clauses = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ClausesContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, CqlParser.RULE_clauses, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.simpleClause();
        this._ctx.stop = this._input.LT(-1);
        this.state = 34;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ClausesContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CqlParser.RULE_clauses);
                this.state = 30;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 31;
                this.simpleClause(); 
            }
            this.state = 36;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function SimpleClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_simpleClause;
    return this;
}

SimpleClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleClauseContext.prototype.constructor = SimpleClauseContext;

SimpleClauseContext.prototype.attributeClause = function() {
    return this.getTypedRuleContext(AttributeClauseContext,0);
};

SimpleClauseContext.prototype.shortClause = function() {
    return this.getTypedRuleContext(ShortClauseContext,0);
};

SimpleClauseContext.prototype.fullTextClause = function() {
    return this.getTypedRuleContext(FullTextClauseContext,0);
};

SimpleClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterSimpleClause(this);
	}
};

SimpleClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitSimpleClause(this);
	}
};

SimpleClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitSimpleClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.SimpleClauseContext = SimpleClauseContext;

CqlParser.prototype.simpleClause = function() {

    var localctx = new SimpleClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CqlParser.RULE_simpleClause);
    try {
        this.state = 40;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 37;
            this.attributeClause();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 38;
            this.shortClause();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 39;
            this.fullTextClause(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_attributeClause;
    return this;
}

AttributeClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeClauseContext.prototype.constructor = AttributeClauseContext;

AttributeClauseContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
};

AttributeClauseContext.prototype.operation = function() {
    return this.getTypedRuleContext(OperationContext,0);
};

AttributeClauseContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

AttributeClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterAttributeClause(this);
	}
};

AttributeClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitAttributeClause(this);
	}
};

AttributeClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitAttributeClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.AttributeClauseContext = AttributeClauseContext;

CqlParser.prototype.attributeClause = function() {

    var localctx = new AttributeClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CqlParser.RULE_attributeClause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.attribute();
        this.state = 43;
        this.operation();
        this.state = 44;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShortClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_shortClause;
    this.shortIdentifier = null; // Token
    return this;
}

ShortClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShortClauseContext.prototype.constructor = ShortClauseContext;

ShortClauseContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

ShortClauseContext.prototype.MEMBERS_IDENTIFIER = function() {
    return this.getToken(CqlParser.MEMBERS_IDENTIFIER, 0);
};

ShortClauseContext.prototype.OWNER_IDENTIFIER = function() {
    return this.getToken(CqlParser.OWNER_IDENTIFIER, 0);
};

ShortClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterShortClause(this);
	}
};

ShortClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitShortClause(this);
	}
};

ShortClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitShortClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.ShortClauseContext = ShortClauseContext;

CqlParser.prototype.shortClause = function() {

    var localctx = new ShortClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CqlParser.RULE_shortClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        localctx.shortIdentifier = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===CqlParser.MEMBERS_IDENTIFIER || _la===CqlParser.OWNER_IDENTIFIER)) {
            localctx.shortIdentifier = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 47;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FullTextClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_fullTextClause;
    return this;
}

FullTextClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullTextClauseContext.prototype.constructor = FullTextClauseContext;

FullTextClauseContext.prototype.searchWord = function() {
    return this.getTypedRuleContext(SearchWordContext,0);
};

FullTextClauseContext.prototype.fullTextClause = function() {
    return this.getTypedRuleContext(FullTextClauseContext,0);
};

FullTextClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterFullTextClause(this);
	}
};

FullTextClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitFullTextClause(this);
	}
};

FullTextClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitFullTextClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};



CqlParser.prototype.fullTextClause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new FullTextClauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, CqlParser.RULE_fullTextClause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 50;
        this.searchWord();
        this._ctx.stop = this._input.LT(-1);
        this.state = 56;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new FullTextClauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, CqlParser.RULE_fullTextClause);
                this.state = 52;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 53;
                this.searchWord(); 
            }
            this.state = 58;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function SearchWordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_searchWord;
    return this;
}

SearchWordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SearchWordContext.prototype.constructor = SearchWordContext;

SearchWordContext.prototype.numberValue = function() {
    return this.getTypedRuleContext(NumberValueContext,0);
};

SearchWordContext.prototype.stringValue = function() {
    return this.getTypedRuleContext(StringValueContext,0);
};

SearchWordContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterSearchWord(this);
	}
};

SearchWordContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitSearchWord(this);
	}
};

SearchWordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitSearchWord(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.SearchWordContext = SearchWordContext;

CqlParser.prototype.searchWord = function() {

    var localctx = new SearchWordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CqlParser.RULE_searchWord);
    try {
        this.state = 61;
        switch(this._input.LA(1)) {
        case CqlParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 59;
            this.numberValue();
            break;
        case CqlParser.STRING_LITERAL:
        case CqlParser.QUOTED_STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.stringValue();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AttributeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_attribute;
    return this;
}

AttributeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttributeContext.prototype.constructor = AttributeContext;

AttributeContext.prototype.stringValue = function() {
    return this.getTypedRuleContext(StringValueContext,0);
};

AttributeContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterAttribute(this);
	}
};

AttributeContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitAttribute(this);
	}
};

AttributeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitAttribute(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.AttributeContext = AttributeContext;

CqlParser.prototype.attribute = function() {

    var localctx = new AttributeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, CqlParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 63;
        this.stringValue();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OperationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_operation;
    this.op = null; // Token
    return this;
}

OperationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperationContext.prototype.constructor = OperationContext;

OperationContext.prototype.EQUALS = function() {
    return this.getToken(CqlParser.EQUALS, 0);
};

OperationContext.prototype.GREATER_THAN = function() {
    return this.getToken(CqlParser.GREATER_THAN, 0);
};

OperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterOperation(this);
	}
};

OperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitOperation(this);
	}
};

OperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.OperationContext = OperationContext;

CqlParser.prototype.operation = function() {

    var localctx = new OperationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, CqlParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 65;
        localctx.op = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===CqlParser.EQUALS || _la===CqlParser.GREATER_THAN)) {
            localctx.op = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.numberValue = function() {
    return this.getTypedRuleContext(NumberValueContext,0);
};

ValueContext.prototype.stringValue = function() {
    return this.getTypedRuleContext(StringValueContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.ValueContext = ValueContext;

CqlParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, CqlParser.RULE_value);
    try {
        this.state = 69;
        switch(this._input.LA(1)) {
        case CqlParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 67;
            this.numberValue();
            break;
        case CqlParser.STRING_LITERAL:
        case CqlParser.QUOTED_STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 68;
            this.stringValue();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_stringValue;
    return this;
}

StringValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringValueContext.prototype.constructor = StringValueContext;

StringValueContext.prototype.QUOTED_STRING_LITERAL = function() {
    return this.getToken(CqlParser.QUOTED_STRING_LITERAL, 0);
};

StringValueContext.prototype.STRING_LITERAL = function() {
    return this.getToken(CqlParser.STRING_LITERAL, 0);
};

StringValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterStringValue(this);
	}
};

StringValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitStringValue(this);
	}
};

StringValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitStringValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.StringValueContext = StringValueContext;

CqlParser.prototype.stringValue = function() {

    var localctx = new StringValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, CqlParser.RULE_stringValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!(_la===CqlParser.STRING_LITERAL || _la===CqlParser.QUOTED_STRING_LITERAL)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_numberValue;
    return this;
}

NumberValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberValueContext.prototype.constructor = NumberValueContext;

NumberValueContext.prototype.NUMBER = function() {
    return this.getToken(CqlParser.NUMBER, 0);
};

NumberValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterNumberValue(this);
	}
};

NumberValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitNumberValue(this);
	}
};

NumberValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitNumberValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.NumberValueContext = NumberValueContext;

CqlParser.prototype.numberValue = function() {

    var localctx = new NumberValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, CqlParser.RULE_numberValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(CqlParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


CqlParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.clauses_sempred(localctx, predIndex);
	case 5:
			return this.fullTextClause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

CqlParser.prototype.clauses_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

CqlParser.prototype.fullTextClause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.CqlParser = CqlParser;
