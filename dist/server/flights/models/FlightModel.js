var Backbone= require("backbone");
var FlightJourneyModel= require("./../../../shared/components/results/models/FlightJourneyModel");
var columns= require('./Data').columns()

var _PROP_FROM_= "From";
var _PROP_TO_= "To";
var _PROP_AIR_LINES_= "Airlines";
var _PROP_MEMEBERS_= "#";
var _PROP_ADULT_PRICE_= "Adult";
var _PROP_CHILD_PRICE_= "Child";
var _PROP_INFANT_PRICE_= "Infant";
var _PROP_CURRENCEY_= "Currency";

var Flight= Backbone.Model.extend({
}, {
    propFrom: _PROP_FROM_,    
    propTo: _PROP_TO_,    
    propAirLines: _PROP_AIR_LINES_,    
    propMembers: _PROP_MEMEBERS_,    
    propAdultPrice: _PROP_ADULT_PRICE_,    
    propChildPrice: _PROP_CHILD_PRICE_,    
    propInfantPrice: _PROP_INFANT_PRICE_,   
    propCurrency: _PROP_CURRENCEY_   
});

module.exports= Flight;