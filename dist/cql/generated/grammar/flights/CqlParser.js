// Generated from grammar/flights/Cql.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CqlListener = require('./CqlListener').CqlListener;
var CqlVisitor = require('./CqlVisitor').CqlVisitor;

var grammarFileName = "Cql.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\rU\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004\r",
    "\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003%\n\u0003",
    "\f\u0003\u000e\u0003(\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004.\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007<\n\u0007\f\u0007\u000e",
    "\u0007?\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t",
    "\u0005\tG\n\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003",
    "\f\u0005\fO\n\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0002\u0004\u0004\f\u000f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u0002\u0006\u0003\u0002\u0005\u0006\u0003\u0002",
    "\u0007\b\u0003\u0002\u0003\u0004\u0003\u0002\n\u000bN\u0002\u001c\u0003",
    "\u0002\u0002\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0006-\u0003",
    "\u0002\u0002\u0002\b/\u0003\u0002\u0002\u0002\n3\u0003\u0002\u0002\u0002",
    "\f6\u0003\u0002\u0002\u0002\u000e@\u0003\u0002\u0002\u0002\u0010F\u0003",
    "\u0002\u0002\u0002\u0012H\u0003\u0002\u0002\u0002\u0014J\u0003\u0002",
    "\u0002\u0002\u0016N\u0003\u0002\u0002\u0002\u0018P\u0003\u0002\u0002",
    "\u0002\u001aR\u0003\u0002\u0002\u0002\u001c\u001d\u0005\u0004\u0003",
    "\u0002\u001d\u001e\u0007\u0002\u0002\u0003\u001e\u0003\u0003\u0002\u0002",
    "\u0002\u001f \b\u0003\u0001\u0002 !\u0005\u0006\u0004\u0002!&\u0003",
    "\u0002\u0002\u0002\"#\f\u0003\u0002\u0002#%\u0005\u0006\u0004\u0002",
    "$\"\u0003\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002",
    "\u0002\u0002&\'\u0003\u0002\u0002\u0002\'\u0005\u0003\u0002\u0002\u0002",
    "(&\u0003\u0002\u0002\u0002).\u0005\b\u0005\u0002*.\u0005\n\u0006\u0002",
    "+.\u0005\f\u0007\u0002,.\u0005\u000e\b\u0002-)\u0003\u0002\u0002\u0002",
    "-*\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-,\u0003\u0002\u0002",
    "\u0002.\u0007\u0003\u0002\u0002\u0002/0\u0005\u0012\n\u000201\u0005",
    "\u0014\u000b\u000212\u0005\u0016\f\u00022\t\u0003\u0002\u0002\u0002",
    "34\t\u0002\u0002\u000245\u0005\u0016\f\u00025\u000b\u0003\u0002\u0002",
    "\u000267\b\u0007\u0001\u000278\u0005\u0010\t\u00028=\u0003\u0002\u0002",
    "\u00029:\f\u0003\u0002\u0002:<\u0005\u0010\t\u0002;9\u0003\u0002\u0002",
    "\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002=>\u0003\u0002",
    "\u0002\u0002>\r\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002\u0002@A",
    "\t\u0003\u0002\u0002AB\u0007\u0003\u0002\u0002BC\u0005\u0012\n\u0002",
    "C\u000f\u0003\u0002\u0002\u0002DG\u0005\u001a\u000e\u0002EG\u0005\u0018",
    "\r\u0002FD\u0003\u0002\u0002\u0002FE\u0003\u0002\u0002\u0002G\u0011",
    "\u0003\u0002\u0002\u0002HI\u0005\u0018\r\u0002I\u0013\u0003\u0002\u0002",
    "\u0002JK\t\u0004\u0002\u0002K\u0015\u0003\u0002\u0002\u0002LO\u0005",
    "\u001a\u000e\u0002MO\u0005\u0018\r\u0002NL\u0003\u0002\u0002\u0002N",
    "M\u0003\u0002\u0002\u0002O\u0017\u0003\u0002\u0002\u0002PQ\t\u0005\u0002",
    "\u0002Q\u0019\u0003\u0002\u0002\u0002RS\u0007\t\u0002\u0002S\u001b\u0003",
    "\u0002\u0002\u0002\u0007&-=FN"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "':'", "'>'", "'#'", "'@'", "'asc'", "'dsc'" ];

var symbolicNames = [ 'null', "EQUALS", "GREATER_THAN", "MEMBERS_IDENTIFIER", 
                      "OWNER_IDENTIFIER", "SORT_ASCENDING", "SORT_DESCENDING", 
                      "NUMBER", "STRING_LITERAL", "QUOTED_STRING_LITERAL", 
                      "UNTERMINATED_QUOTED_STRING_LITERAL", "WHITESPACE" ];

var ruleNames =  [ "search", "clauses", "simpleClause", "attributeClause", 
                   "shortClause", "fullTextClause", "sortClause", "searchWord", 
                   "attribute", "operation", "value", "stringValue", "numberValue" ];

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
CqlParser.SORT_ASCENDING = 5;
CqlParser.SORT_DESCENDING = 6;
CqlParser.NUMBER = 7;
CqlParser.STRING_LITERAL = 8;
CqlParser.QUOTED_STRING_LITERAL = 9;
CqlParser.UNTERMINATED_QUOTED_STRING_LITERAL = 10;
CqlParser.WHITESPACE = 11;

CqlParser.RULE_search = 0;
CqlParser.RULE_clauses = 1;
CqlParser.RULE_simpleClause = 2;
CqlParser.RULE_attributeClause = 3;
CqlParser.RULE_shortClause = 4;
CqlParser.RULE_fullTextClause = 5;
CqlParser.RULE_sortClause = 6;
CqlParser.RULE_searchWord = 7;
CqlParser.RULE_attribute = 8;
CqlParser.RULE_operation = 9;
CqlParser.RULE_value = 10;
CqlParser.RULE_stringValue = 11;
CqlParser.RULE_numberValue = 12;

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
        this.state = 26;
        this.clauses(0);
        this.state = 27;
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
        this.state = 30;
        this.simpleClause();
        this._ctx.stop = this._input.LT(-1);
        this.state = 36;
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
                this.state = 32;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 33;
                this.simpleClause(); 
            }
            this.state = 38;
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

SimpleClauseContext.prototype.sortClause = function() {
    return this.getTypedRuleContext(SortClauseContext,0);
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
        this.state = 43;
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 39;
            this.attributeClause();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 40;
            this.shortClause();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 41;
            this.fullTextClause(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 42;
            this.sortClause();
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
        this.state = 45;
        this.attribute();
        this.state = 46;
        this.operation();
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
        this.state = 49;
        localctx.shortIdentifier = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===CqlParser.MEMBERS_IDENTIFIER || _la===CqlParser.OWNER_IDENTIFIER)) {
            localctx.shortIdentifier = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 50;
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
        this.state = 53;
        this.searchWord();
        this._ctx.stop = this._input.LT(-1);
        this.state = 59;
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
                this.state = 55;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 56;
                this.searchWord(); 
            }
            this.state = 61;
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

function SortClauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CqlParser.RULE_sortClause;
    this.sortOrder = null; // Token
    return this;
}

SortClauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SortClauseContext.prototype.constructor = SortClauseContext;

SortClauseContext.prototype.EQUALS = function() {
    return this.getToken(CqlParser.EQUALS, 0);
};

SortClauseContext.prototype.attribute = function() {
    return this.getTypedRuleContext(AttributeContext,0);
};

SortClauseContext.prototype.SORT_ASCENDING = function() {
    return this.getToken(CqlParser.SORT_ASCENDING, 0);
};

SortClauseContext.prototype.SORT_DESCENDING = function() {
    return this.getToken(CqlParser.SORT_DESCENDING, 0);
};

SortClauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.enterSortClause(this);
	}
};

SortClauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof CqlListener ) {
        listener.exitSortClause(this);
	}
};

SortClauseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof CqlVisitor ) {
        return visitor.visitSortClause(this);
    } else {
        return visitor.visitChildren(this);
    }
};




CqlParser.SortClauseContext = SortClauseContext;

CqlParser.prototype.sortClause = function() {

    var localctx = new SortClauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, CqlParser.RULE_sortClause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        localctx.sortOrder = this._input.LT(1);
        _la = this._input.LA(1);
        if(!(_la===CqlParser.SORT_ASCENDING || _la===CqlParser.SORT_DESCENDING)) {
            localctx.sortOrder = this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 63;
        this.match(CqlParser.EQUALS);
        this.state = 64;
        this.attribute();
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
    this.enterRule(localctx, 14, CqlParser.RULE_searchWord);
    try {
        this.state = 68;
        switch(this._input.LA(1)) {
        case CqlParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 66;
            this.numberValue();
            break;
        case CqlParser.STRING_LITERAL:
        case CqlParser.QUOTED_STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 67;
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
    this.enterRule(localctx, 16, CqlParser.RULE_attribute);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
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
    this.enterRule(localctx, 18, CqlParser.RULE_operation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 72;
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
    this.enterRule(localctx, 20, CqlParser.RULE_value);
    try {
        this.state = 76;
        switch(this._input.LA(1)) {
        case CqlParser.NUMBER:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.numberValue();
            break;
        case CqlParser.STRING_LITERAL:
        case CqlParser.QUOTED_STRING_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
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
    this.enterRule(localctx, 22, CqlParser.RULE_stringValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 78;
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
    this.enterRule(localctx, 24, CqlParser.RULE_numberValue);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
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
