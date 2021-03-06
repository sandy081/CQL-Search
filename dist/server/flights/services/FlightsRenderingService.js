var Backbone= require('backbone');
var _= require('lodash');
var React= require("react");
var ReactDOMServer= require('react-dom/server');
var FlightResultModel= require('./../models/FlightResultModel');
var ResultsModel= require('./../../../shared/components/results/models/ResultsModel');
var HeaderModel= require('./../../../shared/components/results/models/HeaderModel');
var RowModel= require('./../../../shared/components/results/models/RowModel');
var EntryModel= require('./../../../shared/components/results/models/EntryModel');
var ComponentsFactory= require('./../../../shared/components/ComponentsFactory');

var FlightsRenderingService= function() {};

var _toResults= function(flights) {
    var results= new ResultsModel();
    if (flights.length !== 0) {
        results.set(ResultsModel.propHeaders, _headers());
        results.set(ResultsModel.propRows, _rows(flights));
    }
    return results;
}

var _headers= function() {
    var columns= _.map(FlightResultModel.propColumns, _headerModel);
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
    var entries= _.map(FlightResultModel.propColumns, _.overArgs(_entryModel, function(column) {
        return flight.get(column.attribute);
    }));
    return new Backbone.Collection(entries);
}

var _headerModel= function(column) {
    var headerModel= new HeaderModel();
    headerModel.set(HeaderModel.propName, column.title);
    return headerModel;
}

var _entryModel= function(value) {
    var entryModel= new EntryModel();
    if (_.has(value, "iconUrl")) {
        entryModel.set(EntryModel.propIconUrl, value.iconUrl);
        entryModel.set(EntryModel.propValue, value.value);
    } else {
        entryModel.set(EntryModel.propValue, value);
    }
    return entryModel;
}

FlightsRenderingService.prototype.renderHTML= function(flights) {
    var resultsModel= _toResults(flights);
    var Component= ComponentsFactory.getComponent(ResultsModel);
    var reactElement= React.createElement(Component, {model: resultsModel});
    return ReactDOMServer.renderToString(reactElement);   
}

FlightsRenderingService.prototype.renderJSON= function(flights, message) {
    var resultsModel= _toResults(flights);
    resultsModel.set(ResultsModel.propMessage, message);
    return resultsModel.toJSON();
}

module.exports= FlightsRenderingService;