var _= require("lodash");
var React= require('react');
var DropDownMenu= require('../dropdown/DropDownMenu.jsx');
var DropDownMenuModel= require('../dropdown/models/DropDownMenuModel');
var Proposal= require('../../../shared/models/proposals/Proposal');
var ContentAssistModel= require('./models/ContentAssistModel');

var _STATE_MENU_ITEMS_= "_STATE_MENU_ITEMS_";
var _STATE_ACTIVE_DESCENDANT_ = "_ACTIVE_DESCENDANT_";

var ContetnAssist= React.createClass({
    
    actions: {
      proposalsShown: 'proposals-shown',  
      proposalFocussed: 'proposal-focussed',
      proposalSelected: 'proposal-selected'  
    },
    
    getInitialState: function() {
      var initialState= {};
      initialState[_STATE_MENU_ITEMS_]= this.props.model.toMenuEntries();
      return initialState;  
    },
    
    componentDidMount: function() {
      this.refs.dropdownmenu.actions.menuItemSelected.listen(this.actions.proposalSelected);  
      this.refs.dropdownmenu.actions.menuItemFocussed.listen(this.actions.proposalFocussed);  
    },
    
    render: function() {
        var dropDownMenuModel= new DropDownMenuModel();
        dropDownMenuModel.set(DropDownMenuModel.propMenuEntries, this.getStateValue(_STATE_MENU_ITEMS_));
        var activedescendant= this.getStateValue(_STATE_ACTIVE_DESCENDANT_) || null;
        return (
                <div className="contentAssist dropdown" role="listbox" id={this.getValue(ContentAssistModel.propId)} aria-activedescendant={activedescendant}>
                    <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{display: 'none'}}/>
                    <DropDownMenu ref="dropdownmenu" model={dropDownMenuModel}/>
                 </div>
            );
    },
    
    fetchProposals: function(searchText) {
        this.props.model.fetchProposals(searchText)
                        .done(_.bind(function(){
                            this.getStateUpdater().update(_STATE_MENU_ITEMS_, this.props.model.toMenuEntries());
                            this.$el.addClass("open");
                            this.actions.proposalsShown();
                        }, this));  
    },
    
    focusNextProposal: function() {
        var currentProposal= this.props.model.getCurrent();
        var nextProposal= this.props.model.getNext();
        if (nextProposal) {
            this._proposalFocussed(nextProposal, currentProposal);
        }
    },
    
    focusPreviousProposal: function() {
        var currentProposal= this.props.model.getCurrent();
        var previousProposal= this.props.model.getPrevious();
        if (previousProposal) {
            this._proposalFocussed(previousProposal, currentProposal);
        }
    },
    
    _menuItemFocussed: function(menuItem) {
        var proposal= this.props.model.getProposalFromMenuEntry(menuItem)
        this._proposalFocussed(proposal);
    },
    
    _proposalFocussed: function(proposal, previous) {
        this.getStateUpdater().update(_STATE_ACTIVE_DESCENDANT_, proposal.get(Proposal.propId));
        if (previous) {
            this.refs.dropdownmenu.$el.find("#"+previous.get(Proposal.propId)).removeClass("focus");
        }
        this.refs.dropdownmenu.$el.find("#"+proposal.get(Proposal.propId)).addClass("focus");
        this.actions.proposalFocussed(proposal);
    }
    
});

module.exports= ContetnAssist;