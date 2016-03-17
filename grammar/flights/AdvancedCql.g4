grammar Cql;

tokens {
  OPERATOR_IDENTIFIER,
  SHORT_IDENTIFIER
}

@lexer::members {
  var _ = require('lodash');
  var CqlParser = require('./CqlParser').CqlParser;
  
  CqlLexer.OPERATOR_IDENTIFIER= CqlParser.OPERATOR_IDENTIFIER;
  CqlLexer.SHORT_IDENTIFIER= CqlParser.SHORT_IDENTIFIER;
  CqlLexer.prototype.externalIdentifiers= {
        operatorIdentifiers: [],
        shortIdentifiers: []
  };
  
  CqlLexer.prototype.setExternalIndetifiers= function(externalIdentifiers) {
        this.externalIdentifiers = externalIdentifiers;
        return this;
  }
  
  CqlLexer.prototype.generateExternalIdentifierToken= function(identifier) {
       if (_isOperatorIdentifier(identifier, this.externalIdentifiers)) {
            this.type= CqlLexer.OPERATOR_IDENTIFIER;
       }
       if (_isShortIdentifier(identifier, this.externalIdentifiers)) {
            this.type= CqlLexer.SHORT_IDENTIFIER;
       }
  }
  
  CqlLexer.prototype.isExternalIdentifier= function(identifier) {
        return _isOperatorIdentifier(identifier, this.externalIdentifiers) || _isShortIdentifier(identifier, this.externalIdentifiers); 
  }
  
  CqlLexer.prototype.isExternalIdentifierText= function(text) {
        return _isOperatorIdentifierText(text, this.externalIdentifiers) || _isShortIdentifierText(text, this.externalIdentifiers); 
  }
  
  var _isShortIdentifier= function(identifier, externalIdentifiers) {
    return _.indexOf(externalIdentifiers.shortIdentifiers, identifier) !== -1;
  };
  
  var _isOperatorIdentifier= function(identifier, externalIdentifiers) {
    return _.indexOf(externalIdentifiers.operatorIdentifiers, identifier) !== -1;
  };
  
  var _isOperatorIdentifierText= function(identifier, externalIdentifiers) {
    return _.findIndex(externalIdentifiers.operatorIdentifiers, function(operatorIdentifier){
        return identifier.indexOf(operatorIdentifier) !== -1;
    }) !== -1;
  };
  
  var _isShortIdentifierText= function(identifier, externalIdentifiers) {
    return _.findIndex(externalIdentifiers.shortIdentifiers, function(shortIdentifier){
        return identifier.startsWith(shortIdentifier);
    }) !== -1;
  };
}

search: clauses EOF;

clauses: simpleClause 
		 	| clauses simpleClause;

simpleClause: shortClause
                    | attributeClause
                    | fullTextClause
                    | sortClause
                    ;

shortClause: SHORT_IDENTIFIER value;

attributeClause: attribute OPERATOR_IDENTIFIER value;

fullTextClause: searchWord 
					| fullTextClause searchWord
                    ;

sortClause: sortOrder=(SORT_ASCENDING | SORT_DESCENDING) attribute;

searchWord: numberValue 
			   | stringValue
               ;
               
attribute: stringValue;
			   
value: numberValue 
            | stringValue 
            ;

stringValue: QUOTED_STRING_LITERAL 
                    | ANY_CHAR
                    | STRING_LITERAL
                    ;
                    
numberValue: NUMBER;

// Follow this order so that symbol proposals are also in the same order

SORT_ASCENDING: 'asc:';
SORT_DESCENDING: 'dsc:';

NUMBER: [1-9][0-9]*;
ANY_CHAR: . {this.isExternalIdentifier(this.text)}? {this.generateExternalIdentifierToken(this.text)};
STRING_LITERAL: ((~["\\ \t:]) | STRING_ESCAPE )+ {!this.isExternalIdentifierText(this.text)}?;
                
QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)* '"';
UNTERMINATED_QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)*;

fragment
STRING_ESCAPE: '\\' [\\"];

WHITESPACE: [ \r\n\t] -> skip;