var Backbone= require('backbone');
var URI= require('urijs');
var HeaderModel= require('./HeaderModel');
var RowModel= require('./RowModel');

var _PROP_HEADERS_          = "headers";
var _PROP_ROWS_             = "rows";
var _PROP_CSS_CLASS_NAMES_  = "classNames";
var _PROP_MESSAGE_  = "message";

var ResultsModel= Backbone.Model.extend({
    
    defaults: function() {
        var defaults= {};
        defaults[_PROP_HEADERS_]= new Backbone.Collection([], {model: HeaderModel});
        defaults[_PROP_ROWS_]= new Backbone.Collection([], {model: RowModel});
        defaults[_PROP_CSS_CLASS_NAMES_]= "table table-striped table-hover";
        return defaults;
    }, 
    
    parse: function(data) {
        data[_PROP_HEADERS_]= new Backbone.Collection(data[_PROP_HEADERS_], {model: HeaderModel, parse: true});
        data[_PROP_ROWS_]= new Backbone.Collection(data[_PROP_ROWS_], {model: RowModel, parse: true});
        return data;
    },
    
    fetch: function(searchInput) {
        var result= $.Deferred();
        var options= {};
        options.accepts = {};
        options.accepts.json = 'text/json'; 
        options.dataType = 'json';
        options.parse = true;
        var url= new URI("/search/flights");
        url.search({searchText: searchInput});
        options.url= url.toString();
        
        Backbone.Model.prototype.fetch.call(this, options)
                            .done(_.bind(function(){
                                result.resolve(this);
                            }, this))
                            .fail(result.reject);
        result.notify();
        return result.promise();
    }
}, {
  propHeaders: _PROP_HEADERS_,
  propRows: _PROP_ROWS_,  
  propCssClassNames: _PROP_CSS_CLASS_NAMES_,  
  propMessage: _PROP_MESSAGE_  
});

module.exports= ResultsModel;