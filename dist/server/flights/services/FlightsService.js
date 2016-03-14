var _= require('lodash');
var Backbone= require('backbone');
var FlightModel= require('./../models/FlightModel');
var ParserUtils= require('./../../../cql/ParserUtils');
var AttributeValuesVisitor= require('./../visitors/AttributeValuesVisitor');

var _toCollection= function(flights) {
    return new Backbone.Collection(flights, {model: FlightModel});
};
var flights= _toCollection(require('./../models/Data').flights());

var FlightsService= function() {};

FlightsService.prototype.search= function(filter) {
    var attributeValues= _getAttributeValuesFrom(filter);
    var directFilterValues= _getDirectFilterValue(attributeValues);
    var filtered= _toCollection(flights.where(directFilterValues));
    filtered= _filterForMembers(filtered, attributeValues);
    filtered= _transform(filtered, attributeValues);
    filtered= _sort(filtered, attributeValues);
    return filtered;    
}

var _getDirectFilterValue= function (attributeValues) {
    return _.pick(attributeValues, [FlightModel.propFrom, FlightModel.propTo]);
};

var _getAttributeValuesFrom= function (filter) {
    var attributeValuesVisitor= new AttributeValuesVisitor();
    var parser= ParserUtils.createSilentParser(filter);
    return attributeValuesVisitor.visit(parser.search());
};

var _filterForMembers= function (flights, attributeValues) {
    var members= attributeValues['#'] || 1;
    return _toCollection(flights.filter(function(flight) {
        return flight.get(FlightModel.propMembers) >= members;  
    }));
};

var _transform= function (flights, attributeValues) {
    var members= attributeValues['#'] || 1;
    var infants= attributeValues['infants'] || 0;
    var children= attributeValues['children'] || 0;
    var adults= attributeValues['adults'] || (members - children - infants);
    return _toCollection(flights.map(function(flight){
        var transformed= flight.clone();
        transformed.setPrice(adults , children, infants);
        return transformed;
    }));
};

var _sort= function (flights, attributeValues) {
    return _toCollection(flights.sortBy(FlightModel.propPriceValue));
};

module.exports= FlightsService;