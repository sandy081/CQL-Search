var Backbone= require('backbone');

var _PROP_FROM_         = "From";
var _PROP_TO_           = "To";
var _PROP_ICON_URL_     = "iconUrl";
var _PROP_TYPE_         = "type";
var _TYPE_              = "FlightJourneyModel";

var FlightJourneyModel= Backbone.Model.extend({
    
    defaults: function() {
        var defaults= {};
        defaults[_PROP_TYPE_]= _TYPE_;
        return defaults;
    }
    
    
}, {
  propFrom: _PROP_FROM_,
  propTo: _PROP_TO_,
  propIconUrl: _PROP_ICON_URL_,
  propType: _PROP_TYPE_,
  type: _TYPE_
});

module.exports= FlightJourneyModel;