var Backbone= require('backbone');
var _= require('lodash');
var ReactDOM= require('react-dom');
var AirportModel= require('./../models/AirportModel');
var ResultsModel= require('./../../../shared/components/search/models/ResultsModel');
var HeaderModel= require('./../../../shared/components/search/models/HeaderModel');
var RowModel= require('./../../../shared/components/search/models/RowModel');
var EntryModel= require('./../../../shared/components/search/models/EntryModel');
var ComponentsFactory= require('./../../../shared/components/ComponentsFactory');

var FlightsRenderingService= function() {};

var _toResults= function(flights) {
    var results= new ResultsModel();
    results.set(ResultsModel.propHeaders, _headers());
    results.set(ResultsModel.propRows, _rows(flights.models));
    return results;
}

var _headers= function() {
    return new Backbone.Collection([
        _headerModel(AirportModel.propFrom),
        _headerModel(AirportModel.propTo),
        _headerModel(AirportModel.propPrice)
    ])
}

var _rows= function(flights) {
    return _.map(flights, function(flight){
        var row= new RowModel();
        row.set(RowModel.propEntries, _toEntries(flight));
        return row;
    });
}

var _toEntries= function(flight) {
    return new Backbone.Collection([
        _entryModel(flight.get(AirportModel.propFrom)),
        _entryModel(flight.get(AirportModel.propTo)),
        _entryModel(flight.getPrice(2))
    ])
}

var _headerModel= function(name) {
    var headerModel= new HeaderModel();
    headerModel.set(HeaderModel.propName, name);
    return headerModel;
}

var _entryModel= function(value) {
    var entryModel= new EntryModel();
    entryModel.set(EntryModel.propValue, value);
    return entryModel;
}

FlightsRenderingService.prototype.render= function(flights) {
    var resultsModel= _toResults(flights);
    var Component= ComponentsFactory.getComponent(ResultsModel);
    return ReactDOM.renderToString(<Component model={resultsModel}/>);   
}

module.exports= FlightsRenderingService;