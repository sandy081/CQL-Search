var Backbone= require('backbone');

var _PROP_DISPLAY_STRING_ 	= "displayString";		
var _PROP_TEXT_ 			= "text";		
var _PROP_ICON_URL_ 		= "iconUrl";		
var _PROP_ICON_CLASS_ 		= "iconClass";		
var _PROP_SELECTION_ 		= "selection";		
var _PROP_SELECTION_TILL_ 	= "till";		
var _PROP_SELECTION_FROM_ 	= "from";		

var Proposal= Backbone.Model.extend({
		
    getSelectionTill: function() {
        return this.getSelection()[_PROP_SELECTION_TILL_];
    },
    
    getSelectionFrom: function() {
        return this.getSelection()[_PROP_SELECTION_FROM_];
    },
    
    getSelection: function() {
        return this.get(_PROP_SELECTION_);
    },
    
}, {
    propDisplayString: _PROP_DISPLAY_STRING_,
    propText: _PROP_TEXT_,
    propIconUrl: _PROP_ICON_URL_,
    propIconClass: _PROP_ICON_CLASS_,
    propSelection: _PROP_SELECTION_,
    propSelectionTill: _PROP_SELECTION_TILL_,
    propSelectionFrom: _PROP_SELECTION_FROM_
});

module.exports= Proposal;
