var Backbone= require('backbone');

var _PROP_MENU_ENTRIES_			= "menuEntries";
var _PROP_ALIGNMENT_ 			= "alignment";
			
var DropDownMenuModel= Backbone.Model.extend({
		
    defaults: function() {
        var defaults= {};
        defaults[_PROP_ALIGNMENT_]= "dropdown-menu-left";
        return defaults;
    }
    
}, {
    propMenuEntries: _PROP_MENU_ENTRIES_,
    propAlignment: _PROP_ALIGNMENT_
});

module.exports= DropDownMenuModel;