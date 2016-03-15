var Backbone= require('backbone');
var _= require('lodash');
var Proposal= require('./../../../shared/models/proposals/Proposal');
var ProposalsGroup= require('./../../../shared/models/proposals/ProposalsGroup');

var AirportModel= require("./../models/AirportModel")
var Data= require("./../models/Data");
var airports= new Backbone.Collection(Data.Airports(), {parse: true, model: AirportModel});

var AirportProposals= function(){};

AirportProposals.prototype.getProposals= function(filterText, attribute, values) {
    return _.transform(_filterAirports(filterText, values[attribute === "to" ? "from" : "to"] || ""), function(result, airports, country){
        result.push(_toProposalsGroup(country, _.map(airports, _toProposal)));
        return result;
    }, []);
};

var _filterAirports= function(filterText, usedValue) {
  var filtered= airports.filter(function(airport){
        return usedValue !== airport.get(AirportModel.propCity) && (airport.get(AirportModel.propCountry) === filterText || airport.get(AirportModel.propCity).toLowerCase().startsWith(filterText.toLowerCase()));  
    });
  return _.reduce(filtered, function(result, airport) {
      var values= result[airport.get(AirportModel.propCountry)];
      if (!values) {
          values= [];
          result[airport.get(AirportModel.propCountry)]= values;
      }
      values.push(airport);
      return result;
  }, {});    
};

var _toProposal= function(aiport) {
    var proposal= new Proposal();
    proposal.set(Proposal.propDisplayString, aiport.get(AirportModel.propCity));
    proposal.set(Proposal.propIconClass, "glyphicon glyphicon-globe");
    return proposal;
}

var _toProposalsGroup= function(title, proposalOrProposals) {
    proposalOrProposals= _.isArray(proposalOrProposals) ? proposalOrProposals : [proposalOrProposals];
    var proposalsGroup= new ProposalsGroup();
    proposalsGroup.set(ProposalsGroup.propTitle, title);
    proposalsGroup.set(ProposalsGroup.propProposals, new Backbone.Collection(proposalOrProposals, {model : Proposal}));
    return proposalsGroup;
}

module.exports= AirportProposals;