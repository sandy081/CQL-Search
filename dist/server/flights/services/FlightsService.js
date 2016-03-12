var Backbone= require('backbone');
var FlightModel= require('./../models/FlightModel');
var flights= new Backbone.Collection(require('./../models/FlightsData')(), {model:FlightModel});

var FlightsService= function() {};

FlightsService.prototype.search= function(searchString) {
    return flights;    
}

module.exports= FlightsService;