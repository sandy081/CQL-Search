var _= require('lodash');
var Backbone= require('backbone');
var FlightModel= require('./../models/FlightModel');
var FlightResultModel= require('./../models/FlightResultModel');
var ParserUtils= require('./../../../cql/ParserUtils');
var CqlParser= require('./../../../cql/generated/grammar/flights/CqlParser').CqlParser;
var AttributeValuesVisitor= require('./../visitors/AttributeValuesVisitor');
var SortAttributesVisitor= require('./../visitors/SortAttributesVisitor');
var Data= require("./../models/Data")

var _toCollection= function(flights) {
    return new Backbone.Collection(flights, {model: FlightModel});
};
var flights= _toCollection(require('./../models/Data').flights());

var FlightsService= function() {};

FlightsService.prototype.search= function(filter) {
    var attributeValues= _getAttributeValuesFrom(filter);
    var filtered= _toCollection(flights.where(attributeValues));
    filtered= _transform(filtered, attributeValues);
    return filtered;    
}

FlightsService.prototype.flightsMessage= function(filter, flights) {
    if (flights.length === 0) {
        return "No flights with the given criteria";
    }
    return null;
}

var _getAttributeValuesFrom= function (filter) {
    var attributeValuesVisitor= new AttributeValuesVisitor();
    var parser= ParserUtils.createSilentParser(filter);
    return attributeValuesVisitor.visit(parser.search());
};

var _transform= function (flights, attributeValues) {
    var members= attributeValues['#'] || 1;
    var infants= attributeValues['infants'] || 0;
    var children= attributeValues['children'] || 0;
    var adults= attributeValues['adults'] || (members - children - infants);
    var isToAndFro= !!attributeValues['ret'];
    return _toCollection(flights.map(function(flight){
        var props= {};
        props[FlightResultModel.propFlight]= flight;
        var transformed= new FlightResultModel(props);
        transformed.setPrice(adults, children, infants, isToAndFro);
        transformed.setJourney(isToAndFro);
        return transformed;
    }));
};

module.exports= FlightsService;