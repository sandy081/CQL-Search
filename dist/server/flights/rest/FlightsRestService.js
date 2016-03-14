var FlightsService= require("./../services/FlightsService");
var FlightsRenderingService= require("./../services/FlightsRenderingService");

var FlightsRestService= function() {};

FlightsRestService.prototype.serve= function(req, res) {
    res.setHeader('Content-Type', 'text/json');
    var searchString= req.query.searchText !== null ? req.query.searchText : "";
    var flightsService= new FlightsService();
    var flights= flightsService.search(searchString);
    res.send(new FlightsRenderingService().renderJSON(flights, flightsService.flightsMessage(searchString, flights)));
};

module.exports= FlightsRestService;