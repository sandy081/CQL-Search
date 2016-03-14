var _= require('lodash');
var Backbone= require('backbone');
var FlightJourneyModel= require('./FlightJourneyModel');

var _PROP_VALUE_      = "value";
var _PROP_ICON_URL_      = "iconUrl";

var EntryModel= Backbone.Model.extend({
    
    parse: function(data) {
        var value= data.value;
        if (_.isObject(value) && value.type) {
            switch(value.type) {
                case FlightJourneyModel.type:
                    data.value= new FlightJourneyModel(value, {parse: true});
                    break;
            }
        }   
        return data;
    }
    
}, {
  propValue: _PROP_VALUE_,
  propIconUrl: _PROP_ICON_URL_
});

module.exports= EntryModel;