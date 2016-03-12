var FlightsService= require("./../services/FlightsService");
var FlightsRenderingService= require("./../services/FlightsRenderingService");

var FlightsRestService= function() {};

FlightsRestService.prototype.serve= function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    var searchString= req.query.searchString;
    var flights= new FlightsService().search(searchString);
    res.send(new FlightsRenderingService().render(flights));
};

module.exports= FlightsRestService;