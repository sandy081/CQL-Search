grammar Cql;

tokens {
  SHORT_IDENTIFIER
}

@lexer::members {
  
  CqlLexer.SHORT_IDENTIFIER= require('./CqlParser').CqlParser.SHORT_IDENTIFIER;
  CqlLexer.prototype.shortIdentifiers= [];
  
  CqlLexer.prototype.setShortIndetifiers= function(shortIdentifiers) {
        this.shortIdentifiers = shortIdentifiers;
        return this;
  }
  
  CqlLexer.prototype.generateShortIdentifierToken= function() {
       this.type= CqlLexer.SHORT_IDENTIFIER;
  }
  
  CqlLexer.prototype.isShortIdentifierText= function(text) {
        for (var i= 0; i < this.shortIdentifiers.length; i++) {
            if (text.startsWith(this.shortIdentifiers[i])) {
                return true;
            }
        }
        return false;
  }
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

attributeClause: attribute operation value;

fullTextClause: searchWord 
					| fullTextClause searchWord
                    ;

sortClause: sortOrder=(SORT_ASCENDING | SORT_DESCENDING) EQUALS attribute;

searchWord: numberValue 
			   | stringValue
               ;
               
attribute: stringValue;
			   
operation: EQUALS;

value: numberValue 
            | stringValue 
            ;

stringValue: QUOTED_STRING_LITERAL 
                    | ANY_CHAR
                    | STRING_LITERAL
                    ;
                    
numberValue: NUMBER;

// Follow this order so that symbol proposals are also in the same order

EQUALS: ':';

SORT_ASCENDING: 'asc';
SORT_DESCENDING: 'dsc';

NUMBER: [1-9][0-9]*;
ANY_CHAR: . {this.isShortIdentifierText(this.text)}? {this.generateShortIdentifierToken()};
STRING_LITERAL: ((~["\\ \t:]) | STRING_ESCAPE )+ {!this.isShortIdentifierText(this.text)}?;
                
QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)* '"';
UNTERMINATED_QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)*;

fragment
STRING_ESCAPE: '\\' [\\"];

WHITESPACE: [ \r\n\t] -> skip;