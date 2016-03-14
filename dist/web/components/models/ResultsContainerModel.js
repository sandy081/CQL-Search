var _= require("lodash");
var Backbone= require("backbone");
var ResultsModel= require('./../../../shared/components/results/models/ResultsModel');

var _PROP_FILTER_ = "filter";
var _PROP_RESULTS_ = "results";

var ResultsContainerModel= Backbone.Model.extend({
    
    refresh: function(searchText) {
        return this._refresh(searchText).done(_.bind(function(results) {
                    this.set(_PROP_RESULTS_, results);
                }, this));
    },
        
    _refresh: function(searchText){
          var results= new ResultsModel();
          return results.fetch(searchText);
    }
}, {
    propFilter: _PROP_FILTER_,
    propResults: _PROP_RESULTS_
});

module.exports= ResultsContainerModel;