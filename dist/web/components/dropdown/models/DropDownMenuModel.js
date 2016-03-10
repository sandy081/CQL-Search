var Backbone= require('backbone');

var _PROP_MENU_ENTRIES_			= "menuEntries";
var _PROP_ALIGNMENT_ 			= "alignment";
			
var DropDownMenuModel= Backbone.Model.extend({
		
    initialize: function() {
        this._current= -1;   
    },   
        
    defaults: function() {
        var defaults= {};
        defaults[_PROP_ALIGNMENT_]= "dropdown-menu-left";
        return defaults;
    }, 
    
    getNext: function() {
        return this._current < this._allProposals.length ?  this._allProposals[++this._current] : null;
    },
    
    getCurrent: function() {
        return this._current > -1 && this._current < this._allProposals.length ? this._allProposals[this._current] : null;
    },
    
    getPrevious: function() {
        return this._current > -1 ?  this._allProposals[--this._current] : null;
    },
    
}, {
    propMenuEntries: _PROP_MENU_ENTRIES_,
    propAlignment: _PROP_ALIGNMENT_
});

module.exports= DropDownMenuModel;