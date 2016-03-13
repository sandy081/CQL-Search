var Backbone= require('backbone');

var _PROP_RESULTS_  = "results";

var ResultsContainerModel= Backbone.Model.extend({
    
    fetch: function(searchText) {
        return Backbone.ajax("/search/flights").done(function(result){
        });
    }
    
},{
  propResults= _PROP_RESULTS_  
});

module.exports= ResultsContainerModel;