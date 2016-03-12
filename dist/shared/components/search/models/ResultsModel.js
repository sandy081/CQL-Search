var Backbone= require('backbone');
var HeaderModel= require('./HeaderModel');
var RowModel= require('./RowModel');

var _PROP_HEADERS_          = "headers";
var _PROP_ROWS_             = "rows";
var _PROP_CSS_CLASS_NAMES_  = "classNames";

var ResultsModel= Backbone.Model.extend({
    
    defaults: function() {
        var defaults= {};
        defaults[_PROP_HEADERS_]= new Backbone.Collection([], {model: HeaderModel});
        defaults[_PROP_ROWS_]= new Backbone.Collection([], {model: RowModel});
        return defaults;
    }
    
}, {
  propHeaders: _PROP_HEADERS_,
  propRows: _PROP_ROWS_,  
  propClassNames: _PROP_CSS_CLASS_NAMES_  
});

module.exports= ResultsModel;