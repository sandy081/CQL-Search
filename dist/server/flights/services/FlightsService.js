var Backbone= require('backbone');
var FlightModel= require('./../models/FlightModel');
var ParserUtils= require('./../../../cql/ParserUtils');
var AttributeValuesVisitor= require('./../visitors/AttributeValuesVisitor');

var _toCollection= function(flights) {
    return new Backbone.Collection(flights, {model: FlightModel});
};
var flights= _toCollection(require('./../models/FlightsData').flights());

var FlightsService= function() {};

FlightsService.prototype.search= function(filter) {
    var attributeValues= _getAttributeValuesFrom(filter);
    return _toCollection(flights.where(attributeValues));    
}

var _getAttributeValuesFrom= function (filter) {
    var attributeValuesVisitor= new AttributeValuesVisitor();
    var parser= ParserUtils.createSilentParser(filter);
    return attributeValuesVisitor.visit(parser.search());
}

module.exports= FlightsService;