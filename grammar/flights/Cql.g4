grammar Cql;

@lexer::members {
  CqlLexer.prototype.setExternalIndetifiers= function(externalIdentifiers) {}
}

search: clauses EOF;

clauses: simpleClause 
		 	| clauses simpleClause;

simpleClause: attributeClause
                    | sortClause
                    ;

attributeClause: attribute ':' value;

sortClause: sortOrder=(SORT_ASCENDING | SORT_DESCENDING) attribute;

attribute: stringValue;
			   
value: numberValue 
            | stringValue 
            ;

stringValue: STRING_LITERAL;
                    
numberValue: NUMBER;

// Follow this order so that symbol proposals are also in the same order

SORT_ASCENDING: 'asc:';
SORT_DESCENDING: 'dsc:';

NUMBER: [1-9][0-9]*;
STRING_LITERAL: ((~["\\ \t:]) | STRING_ESCAPE )+;
                
fragment
STRING_ESCAPE: '\\' [\\"];

WHITESPACE: [ \r\n\t] -> skip;