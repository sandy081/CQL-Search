var Backbone= require('backbone');

var _PROP_VALUE_      = "value";
var _PROP_ICON_URL_      = "iconUrl";

var EntryModel= Backbone.Model.extend({
    
}, {
  propValue: _PROP_VALUE_,
  propIconUrl: _PROP_ICON_URL_
});

module.exports= EntryModel;