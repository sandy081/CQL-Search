var Backbone= require("backbone");
var columns= require('./Data').columns()

var _PROP_FROM_= "From";
var _PROP_TO_= "To";
var _PROP_MEMEBERS_= "#";
var _PROP_AIR_LINES_= "Airlines";
var _PROP_PRICE_= "Price";
var _PROP_PRICE_VALUE_= "PriceValue";
var _PROP_ADULT_PRICE_= "Adult";
var _PROP_CHILD_PRICE_= "Child";
var _PROP_INFANT_PRICE_= "Infant";

var Flight= Backbone.Model.extend({
    
    setPrice: function(adults, children, infants) {
        children= children || 0;
        infants= infants || 0;
        var priceValue= (this.get(_PROP_ADULT_PRICE_) * adults)
                                + (this.get(_PROP_CHILD_PRICE_) * children)
                                + (this.get(_PROP_INFANT_PRICE_) * infants);
        this.set(_PROP_PRICE_VALUE_, priceValue);                                
        this.set(_PROP_PRICE_, priceValue + " CHF");
    }
    
}, {
    propFrom: _PROP_FROM_,    
    propTo: _PROP_TO_,    
    propPriceValue: _PROP_PRICE_VALUE_,    
    propMembers: _PROP_MEMEBERS_,    
    propAirLines: _PROP_AIR_LINES_, 
    propColumns: columns   
});

module.exports= Flight;