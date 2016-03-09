var Backbone= require("backbone");

var _PROP_COUNTRY_= "country";
var _PROP_CITY_= "city";

var AirportModel= Backbone.Model.extend({
}, {
    propCountry: _PROP_COUNTRY_,    
    propCity: _PROP_CITY_    
});

module.exports= AirportModel;