var Backbone= require('backbone');
var EntryModel= require('./EntryModel');

var _PROP_ENTRIES_      = "entries";

var RowModel= Backbone.Model.extend({
    
    parse: function(data) {
        data[_PROP_ENTRIES_]= new Backbone.Collection(data[_PROP_ENTRIES_], {model: EntryModel, parse: true});
        return data;
    },
    
}, {
  propEntries: _PROP_ENTRIES_
});

module.exports= RowModel;