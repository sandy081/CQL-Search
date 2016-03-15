var Backbone= require("backbone");

var _PROP_NAME_= "name";
var _PROP_TEXT_= "text";
var _PROP_TYPE_= "type";
var _PROP_OPS_= "ops";

var AttributeModel= Backbone.Model.extend({
}, {
    propName: _PROP_NAME_,    
    propText: _PROP_TEXT_,    
    propType: _PROP_TYPE_,    
    propOps: _PROP_OPS_    
});

module.exports= AttributeModel;