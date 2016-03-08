var Backbone= require('backbone');
var MenuEntryModel= require('./MenuEntryModel');

var _PROP_LABEL_ 			= "label";		

var MenuHeaderModel= MenuEntryModel.extend({
    
}, {
    propLabel: _PROP_LABEL_
});

module.exports= MenuHeaderModel;