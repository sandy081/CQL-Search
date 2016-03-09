var Backbone= require('backbone');
var MenuEntryModel= require('./MenuEntryModel');

var _PROP_ID_ 	            = "id";		
var _PROP_DISPLAY_STRING_ 	= "displayString";		
var _PROP_TEXT_ 			= "text";		
var _PROP_ICON_URL_ 		= "iconUrl";		
var _PROP_ICON_CLASS_ 		= "iconClass";		
var _PROP_DEPTH_ 			= "depth";		
var _PROP_DISABLED_ 		= "disabled";		
var _PROP_ARIA_LABEL_ 		= "aria-label";		

var MenuItemModel= MenuEntryModel.extend({
    
}, {
    propId: _PROP_ID_,
    propDisplayString: _PROP_DISPLAY_STRING_,
    propText: _PROP_TEXT_,
    propIconUrl: _PROP_ICON_URL_,
    propIconClass: _PROP_ICON_CLASS_,
    propDepth: _PROP_DEPTH_,
    propDisabled: _PROP_DISABLED_,
    propAriaLabel: _PROP_ARIA_LABEL_
});

module.exports= MenuItemModel;