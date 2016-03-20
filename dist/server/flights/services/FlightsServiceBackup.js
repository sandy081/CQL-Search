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
    var directFilterValues= _getDirectFilterValue(attributeValues);
    var filtered= _toCollection(flights.where(directFilterValues));
    filtered= _filterForMembers(filtered, attributeValues);
    filtered= _transform(filtered, attributeValues);
    filtered= _sort(filtered, filter);
    return filtered;    
}

FlightsService.prototype.flightsMessage= function(filter, flights) {
    if (flights.length === 0) {
        return "No flights with the given criteria";
    }
    
    // var attributeValues= _getAttributeValuesFrom(filter);
    // var fromMessage= attributeValues["From"] ? "from " + attributeValues["From"] + " " : "";
    // var toMessage= attributeValues["To"] ? "to " + attributeValues["To"]  + " " : "";
    // var departingMessage= _departingMessage(attributeValues.dep || "today");
    // var returningMessage= attributeValues.ret ? _returnMessage(attributeValues.ret) : "";
    // return "All flights " + fromMessage + toMessage + departingMessage + returningMessage;
    return null;
}

var _departingMessage= function(departingDate) {
    switch (departingDate) {
        case "today":
            return "departing today ";
        case "tomorrow":
            return "departing tomorrow ";
        case "2d":
            return "departing in next two days ";
        case "3d":
            return "departing in next three days ";
    }
    return "departing on " + departingDate;
}

var _returnMessage= function(retuningDate) {
    switch (retuningDate) {
        case "same":
            return "returning same day as departing day ";
        case "next":
            return "returning next day after departing day ";
        case "2d":
            return "returning two days after departing day ";
        case "3d":
            return "returning three days after departing day ";
    }
    return "returning on " + retuningDate;
}

var _getDirectFilterValue= function (attributeValues) {
    var directAttributes= _.transform(Data.Attributes(), function(result, attributes){
                                _.each(_.filter(attributes, "direct"), function(attribute) {
                                    result.push(attribute.text);
                                }); 
                            }, []);
    return _.pick(attributeValues, directAttributes);
};

var _getAttributeValuesFrom= function (filter) {
    var attributeValuesVisitor= new AttributeValuesVisitor();
    var parser= ParserUtils.createSilentParser(filter);
    return attributeValuesVisitor.visit(parser.search());
};

var _filterForMembers= function (flights, attributeValues) {
    var members= attributeValues['#'];
    if (!members) {
        var children= attributeValues['children'] || 0;
        var adults= attributeValues['adults'] || 1;
        members= adults + children;
    }
    return _toCollection(flights.filter(function(flight) {
        return flight.get(FlightModel.propMembers) >= members;  
    }));
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

var _sort= function (flights, filter) {
    var sortAttributesVisitor= new SortAttributesVisitor();
    var parser= ParserUtils.createSilentParser(filter);
    var sortAttributes= sortAttributesVisitor.visit(parser.search());
    var sortAscendingToken= ParserUtils.getTokenName(CqlParser.SORT_ASCENDING); 
    var sortDescendingToken= ParserUtils.getTokenName(CqlParser.SORT_DESCENDING); 
    if (sortAttributes[sortAscendingToken]) {
        return _toCollection(flights.sortBy(sortAttributes[sortAscendingToken]));
    } else if (sortAttributes[sortDescendingToken]) {
        return _toCollection(_.reverse(flights.sortBy(sortAttributes[sortDescendingToken])));
    }
    return _toCollection(flights.sortBy(FlightResultModel.propPriceValue));
};

module.exports= FlightsService;