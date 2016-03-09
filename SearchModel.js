var Backbone= require("backbone");
var ContentAssistModel= require("./ContentAssistModel");
var SearchInputModel= require("./SearchInputModel");

var _PROP_SEARCH_INPUT_= "SEARCH_INPUT";
var _PROP_CONTENT_ASSIST_= "CONTENT_ASSIST_MODEL";

var SearchModel= Backbone.Model.extend({
    
    defaults: function() {
        var defaults= {};
        defaults[_PROP_CONTENT_ASSIST_]= new ContentAssistModel();
        defaults[_PROP_SEARCH_INPUT_]= new SearchInputModel();
        defaults[_PROP_SEARCH_INPUT_].set(SearchInputModel.propAriaOwns, defaults[_PROP_CONTENT_ASSIST_].get(ContentAssistModel.propId));
        return defaults;
    }
}, {
    propSearchInput: _PROP_SEARCH_INPUT_,
    propContentAssist: _PROP_CONTENT_ASSIST_
});

module.exports= SearchModel;