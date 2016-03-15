var Backbone= require("backbone");
var FlightModel= require("./FlightModel");
var FlightJourneyModel= require("./../../../shared/components/results/models/FlightJourneyModel");
var columns= require('./Data').columns()

var _PROP_FLIGHT_= "flight";
var _PROP_AIR_LINES_= "Airlines";
var _PROP_JOURNEY_= "Journey";
var _PROP_PRICE_= "Price";
var _PROP_PRICE_VALUE_= "PriceValue";

var FlightResultModel= Backbone.Model.extend({
    
    initialize: function() {
        this.set(_PROP_AIR_LINES_, this.get(_PROP_FLIGHT_).get(FlightModel.propAirLines));
    },
    
    setPrice: function(adults, children, infants, isToAndFro) {
        var flight= this.get(_PROP_FLIGHT_);
        children= children || 0;
        infants= infants || 0;
        var priceValue= (flight.get(FlightModel.propAdultPrice) * adults)
                                + (flight.get(FlightModel.propChildPrice) * children)
                                + (flight.get(FlightModel.propInfantPrice) * infants);
        priceValue= isToAndFro ? priceValue * 2 : priceValue;                                
        this.set(_PROP_PRICE_VALUE_, priceValue);                                
        this.set(_PROP_PRICE_, priceValue + " " + flight.get(FlightModel.propCurrency));
    },
    
    setJourney: function(isToAndFro) {
        var flight= this.get(_PROP_FLIGHT_);
        var journeyModel= new FlightJourneyModel();
        journeyModel.set(FlightJourneyModel.propFrom, flight.get(FlightModel.propFrom));
        journeyModel.set(FlightJourneyModel.propIconUrl, isToAndFro ? "/images/to_fro.png" : "/images/to.png");
        journeyModel.set(FlightJourneyModel.propTo, flight.get(FlightModel.propTo));
        this.set(_PROP_JOURNEY_, journeyModel);
    }
    
}, {
    propFlight: _PROP_FLIGHT_,    
    propPrice: _PROP_PRICE_,    
    propPriceValue: _PROP_PRICE_VALUE_,    
    propAirLines: _PROP_AIR_LINES_, 
    propColumns: columns   
});

module.exports= FlightResultModel;