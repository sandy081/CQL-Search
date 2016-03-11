var Backbone= require("backbone");

var _PROP_NAME_= "name";
var _PROP_DESCRIPTION_= "description";

var DateModel= Backbone.Model.extend({
}, {
    propName: _PROP_NAME_,    
    propDescription: _PROP_DESCRIPTION_    
});

module.exports= DateModel;