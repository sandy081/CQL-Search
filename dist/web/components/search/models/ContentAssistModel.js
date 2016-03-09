var $= require("jquery");
var Backbone= require("backbone");
var ProposalsGroup= require("./../../../../shared/models/proposals/ProposalsGroup");
var Proposal= require("./../../../../shared/models/proposals/Proposal");
var MenuHeaderModel= require("./../../dropdown/models/MenuHeaderModel");
var MenuSeparatorModel= require("./../../dropdown/models/MenuSeparatorModel");
var MenuItemModel= require("./../../dropdown/models/MenuItemModel");

var _PROP_ID_				   = "id";
var _PROP_MODEL_				= "model";
var _PROP_PROPOSALS_			= "proposals";

var ContentAssistModel= Backbone.Model.extend({
    
    initialize: function() {
      this._current= -1;  
    },
    
    defaults: function() {
      var defaults= {};
      defaults[_PROP_ID_]= this.cid;
      defaults[_PROP_PROPOSALS_]= new Backbone.Collection([], {model: ProposalsGroup});
      return defaults;   
    },
    
    toMenuEntries: function() {
        return this._toMenuEntriesFromGroups(this.get(_PROP_PROPOSALS_));
    },
    
    getProposalFromMenuEntry: function(menuEntry) {
		return menuEntry.get(_PROP_MODEL_);
	},
    
    getFirstProposal: function() {
        var proposals= this.get(_PROP_PROPOSALS_);
        return proposals.length > 0 ? proposals.at(0).get(ProposalsGroup.propProposals).at(0) : null;
    },
    
    fetchProposals: function(text) {
        var result= $.Deferred();
        var innerOptions= {};
        innerOptions.accepts = {};
        innerOptions.accepts.json = 'text/json'; 
        innerOptions.dataType = 'json';
        innerOptions.reset = true;
        innerOptions.url= "/proposals/flights?input=" + text;
        this.get(_PROP_PROPOSALS_).fetch(innerOptions)
                                    .done(_.bind(function(){
                                        this._current= -1;
                                        this._allProposals= this._toFlatList(this.get(_PROP_PROPOSALS_)); 
                                        result.resolve();
                                    }, this))
                                    .fail(result.reject);
        result.notify();
        return result.promise();
    },
    
    getNext: function() {
        return this._current < this._allProposals.length ?  this._allProposals[++this._current] : null;
    },
    
    getCurrent: function() {
        return this._current > -1 && this._current < this._allProposals.length ? this._allProposals[this._current] : null;
    },
    
    getPrevious: function() {
        return this._current > -1 ?  this._allProposals[--this._current] : null;
    },
    
    _toFlatList: function(proposalGroups) {
       var proposals= [];
        proposalGroups.each(function(proposalGroup, index){
            proposals= proposals.concat(proposalGroup.get(ProposalsGroup.propProposals).models)
        }, this);
        return proposals; 
    },
    
    _toMenuEntriesFromGroups: function(proposalGroups) {
        var menuEntries= [];
        proposalGroups.each(function(proposalGroup, index){
            var menuHeader= new MenuHeaderModel();
            menuHeader.set(MenuHeaderModel.propLabel, proposalGroup.get(ProposalsGroup.propTitle));
            menuEntries.push(menuHeader);
            
            var menuItems= this._toMenuEntriesFromProposals(proposalGroup.get(ProposalsGroup.propProposals));
            menuEntries= menuEntries.concat(menuItems);
            
            if (index < proposalGroups.length - 1) {
                menuEntries.push(new MenuSeparatorModel());
            }
        }, this);
        return menuEntries;
    },
    
    _toMenuEntriesFromProposals: function(proposals) {
		return proposals.map(function(proposal){
			proposal.set(Proposal.propId, proposal.cid);
			var menuItem= new MenuItemModel(_.clone(proposal.attributes));
			menuItem.set(_PROP_MODEL_, proposal);
			return menuItem;
		});
	}
}, {
    propId: _PROP_ID_
});

module.exports= ContentAssistModel;
