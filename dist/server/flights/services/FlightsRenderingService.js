var Backbone= require('backbone');
var _= require('lodash');
var React= require("react");
var ReactDOMServer= require('react-dom/server');
var FlightModel= require('./../models/FlightModel');
var ResultsModel= require('./../../../shared/components/search/models/ResultsModel');
var HeaderModel= require('./../../../shared/components/search/models/HeaderModel');
var RowModel= require('./../../../shared/components/search/models/RowModel');
var EntryModel= require('./../../../shared/components/search/models/EntryModel');
var ComponentsFactory= require('./../../../shared/components/ComponentsFactory');

var FlightsRenderingService= function() {};

var _toResults= function(flights) {
    var results= new ResultsModel();
    results.set(ResultsModel.propHeaders, _headers());
    results.set(ResultsModel.propRows, _rows(flights));
    return results;
}

var _headers= function() {
    return new Backbone.Collection([
        _headerModel(FlightModel.propFrom),
        _headerModel(FlightModel.propTo),
        _headerModel("Price")
    ])
}

var _rows= function(flights) {
    return new Backbone.Collection(flights.map(function(flight){
        var row= new RowModel();
        row.set(RowModel.propEntries, _toEntries(flight));
        return row;
    }, {model: RowModel}));
}

var _toEntries= function(flight) {
    return new Backbone.Collection([
        _entryModel(flight.get(FlightModel.propFrom)),
        _entryModel(flight.get(FlightModel.propTo)),
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
    var reactElement= React.createElement(Component, {model: resultsModel});
    return ReactDOMServer.renderToString(reactElement);   
}

module.exports= FlightsRenderingService;