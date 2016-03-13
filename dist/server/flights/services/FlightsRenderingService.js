var Backbone= require('backbone');
var _= require('lodash');
var React= require("react");
var ReactDOMServer= require('react-dom/server');
var FlightModel= require('./../models/FlightModel');
var ResultsModel= require('./../../../shared/components/results/models/ResultsModel');
var HeaderModel= require('./../../../shared/components/results/models/HeaderModel');
var RowModel= require('./../../../shared/components/results/models/RowModel');
var EntryModel= require('./../../../shared/components/results/models/EntryModel');
var ComponentsFactory= require('./../../../shared/components/ComponentsFactory');

var FlightsRenderingService= function() {};

var _toResults= function(flights) {
    var results= new ResultsModel();
    results.set(ResultsModel.propHeaders, _headers());
    results.set(ResultsModel.propRows, _rows(flights));
    return results;
}

var _headers= function() {
    var columns= _.map(FlightModel.propColumns, _headerModel);
    columns.push(_headerModel("Price"));
    return new Backbone.Collection(columns);
}

var _rows= function(flights) {
    return new Backbone.Collection(flights.map(function(flight){
        var row= new RowModel();
        row.set(RowModel.propEntries, _toEntries(flight));
        return row;
    }, {model: RowModel}));
}

var _toEntries= function(flight) {
    var entries= _.map(FlightModel.propColumns, _.overArgs(_entryModel, _.bind(flight.get, flight)));
    entries.push(_entryModel(flight.getPrice(2)));
    return new Backbone.Collection(entries);
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

FlightsRenderingService.prototype.renderHTML= function(flights) {
    var resultsModel= _toResults(flights);
    var Component= ComponentsFactory.getComponent(ResultsModel);
    var reactElement= React.createElement(Component, {model: resultsModel});
    return ReactDOMServer.renderToString(reactElement);   
}

FlightsRenderingService.prototype.renderJSON= function(flights) {
    var resultsModel= _toResults(flights);
    return resultsModel.toJSON();
}

module.exports= FlightsRenderingService;