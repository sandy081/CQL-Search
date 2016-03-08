var Backbone= require("backbone");
var Proposal= require("./Proposal");

var _PROP_TITLE_		= "title";		
var _PROP_PROPOSALS_	= "proposals";

var ProposalsGorup= Backbone.Model.extend({
    
    parse: function(data) {
        var result= _.clone(data);
        result[_PROP_PROPOSALS_]= new Backbone.Collection(data[_PROP_PROPOSALS_], {parse: true, model: Proposal});
        return result;
    }
    
}, {
    propTitle: _PROP_TITLE_,
    propProposals: _PROP_PROPOSALS_
});

module.exports= ProposalsGorup;
