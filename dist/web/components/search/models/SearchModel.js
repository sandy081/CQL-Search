var Backbone= require("backbone");
var ContentAssistModel= require("./ContentAssistModel");

var _PROP_CONTENT_ASSIST_= "CONTENT_ASSIST_MODEL";

var SearchModel= Backbone.Model.extend({
    
    defaults: function() {
        var defaults= {};
        defaults[_PROP_CONTENT_ASSIST_]= new ContentAssistModel();
        return defaults;
    }
}, {
    propContentAssist: _PROP_CONTENT_ASSIST_
});

module.exports= SearchModel;