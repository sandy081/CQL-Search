grammar Cql;

@lexer::members {
  CqlLexer.prototype.setExternalIndetifiers= function(externalIdentifiers) {}
}

search: clauses EOF;

clauses: simpleClause 
		 	| clauses simpleClause;

simpleClause: attributeClause
                    | fullTextClause
                    | sortClause
                    ;

attributeClause: attribute operation value;

fullTextClause: searchWord 
					| fullTextClause searchWord
                    ;

sortClause: sortOrder=(SORT_ASCENDING | SORT_DESCENDING) attribute;

searchWord: numberValue 
			   | stringValue
               ;
               
attribute: stringValue;
			   
operation: EQUALS;

value: numberValue 
            | stringValue 
            ;

stringValue: QUOTED_STRING_LITERAL 
                    | STRING_LITERAL
                    ;
                    
numberValue: NUMBER;

// Follow this order so that symbol proposals are also in the same order

EQUALS: ':';

SORT_ASCENDING: 'asc:';
SORT_DESCENDING: 'dsc:';

NUMBER: [1-9][0-9]*;
STRING_LITERAL: ((~["\\ \t:]) | STRING_ESCAPE )+;
                
QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)* '"';
UNTERMINATED_QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)*;

fragment
STRING_ESCAPE: '\\' [\\"];

WHITESPACE: [ \r\n\t] -> skip;