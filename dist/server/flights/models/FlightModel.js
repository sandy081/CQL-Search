var Backbone= require("backbone");

var _PROP_FROM_= "From";
var _PROP_TO_= "To";
var _PROP_AIR_LINES_= "Airlines";
var _PROP_ADULT_PRICE_= "Adult";
var _PROP_CHILD_PRICE_= "Child";
var _PROP_INFANT_PRICE_= "Infant";

var Flight= Backbone.Model.extend({
    
    getPrice: function(adults, chidlren, infants) {
        children= children || 0;
        infants= infants || 0;
        return (this.get(_PROP_ADULT_PRICE_) * adults)
                    + (this.get(_PROP_CHILD_PRICE_) * chidlren)
                    + (this.get(_PROP_INFANT_PRICE_) * infants) + " CHF";
    }
    
}, {
    propFrom: _PROP_FROM_,    
    propTo: _PROP_TO_,    
    propAirLines: _PROP_AIR_LINES_,    
});

module.exports= Flight;