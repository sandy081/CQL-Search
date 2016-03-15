grammar Cql;

search: clauses EOF;

clauses: simpleClause 
		 	| clauses simpleClause;

simpleClause: attributeClause | shortClause | fullTextClause | sortClause;

attributeClause: attribute operation value;

shortClause: shortIdentifier=(MEMBERS_IDENTIFIER
                                | OWNER_IDENTIFIER) value;

fullTextClause: searchWord 
						| fullTextClause searchWord;
                        
sortClause: sortOrder=(SORT_ASCENDING | SORT_DESCENDING) EQUALS attribute;

searchWord: numberValue 
			   | stringValue;
			   
attribute: stringValue;

operation: op=(EQUALS 
                | GREATER_THAN);

value: numberValue | stringValue ;

stringValue: QUOTED_STRING_LITERAL | STRING_LITERAL;

numberValue: NUMBER;

// Follow this order so that symbol proposals are also in the same order

EQUALS: ':';
GREATER_THAN: '>';

MEMBERS_IDENTIFIER: '#';
OWNER_IDENTIFIER: '@';

SORT_ASCENDING: 'asc';
SORT_DESCENDING: 'dsc';

NUMBER: [1-9][0-9]*;
STRING_LITERAL: ((~["\\ \t:#@]) | STRING_ESCAPE )+;
QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)* '"';
UNTERMINATED_QUOTED_STRING_LITERAL: '"' ((~["\\]) | STRING_ESCAPE)*;

fragment
STRING_ESCAPE: '\\' [\\"];

WHITESPACE: [ \r\n\t] -> skip;