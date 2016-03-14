var _= require("lodash");
var React= require('react');
var DropDownMenu= require('../dropdown/DropDownMenu.jsx');
var DropDownMenuModel= require('../dropdown/models/DropDownMenuModel');
var Proposal= require('../../../shared/models/proposals/Proposal');
var ContentAssistModel= require('./models/ContentAssistModel');

var _STATE_SHOW_PROPOSALS_= "_STATE_SHOW_PROPOSALS_";
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
      initialState[_STATE_SHOW_PROPOSALS_]= false;
      initialState[_STATE_MENU_ITEMS_]= this.props.model.toMenuEntries();
      return initialState;  
    },
    
    componentDidMount: function() {
      this.refs.dropdownmenu.actions.menuItemSelected.listen(_.bind(this._menuItemSelected, this));  
      this.refs.dropdownmenu.actions.menuItemFocussed.listen(_.bind(this._menuItemFocussed, this));  
    },
    
    componentDidUpdate: function() {
        this.refs.dropdownmenu.$el.find("li a").removeClass("focus");
    },
    
    render: function() {
        var dropDownMenuModel= new DropDownMenuModel();
        dropDownMenuModel.set(DropDownMenuModel.propMenuEntries, this.getStateValue(_STATE_MENU_ITEMS_));
        var activedescendant= this.getStateValue(_STATE_ACTIVE_DESCENDANT_) || null;
        return (
                <div className={this._getDropdownClassName()} role="listbox" id={this.getValue(ContentAssistModel.propId)} aria-activedescendant={activedescendant}>
                    <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{display: 'none'}}/>
                    <DropDownMenu ref="dropdownmenu" model={dropDownMenuModel}/>
                 </div>
            );
    },
    
    fetchProposals: function(searchText) {
        this.props.model.fetchProposals(searchText)
                        .done(_.bind(function(){
                            this.getStateUpdater()
                                    .set(_STATE_MENU_ITEMS_, this.props.model.toMenuEntries())
                                    .set(_STATE_SHOW_PROPOSALS_, true)
                                    .update();
                            this.actions.proposalsShown();
                        }, this));  
    },
    
    hideProposals: function(searchText) {
        this.getStateUpdater().update(_STATE_SHOW_PROPOSALS_, false);
    },
    
    _getDropdownClassName: function() {
        var className= "contentAssist dropdown";
        if (this.areProposalsShown()) {
            className= React.className([className, "open"]);
        }
        return className;
    },
    
    _menuItemSelected: function(menuItem) {
        this.actions.proposalSelected(this.props.model.getProposalFromMenuEntry(menuItem));
    },
    
    _menuItemFocussed: function(menuItem) {
        this.actions.proposalFocussed(this.props.model.getProposalFromMenuEntry(menuItem));
    },
    
    areProposalsShown: function() {
        return this.getStateValue(_STATE_SHOW_PROPOSALS_); 
    },
    
    focusNext: function() {
        if (this.areProposalsShown()) {
            this.refs.dropdownmenu.focusNext();
        }
    },
    
    focusPrevious: function() {
        if (this.areProposalsShown()) {
            this.refs.dropdownmenu.focusPrevious();
        }
    },
    
    getFocussedProposal: function() {
        var menuItem= this.refs.dropdownmenu.getFocussedMenuItem()
        return menuItem ? this.props.model.getProposalFromMenuEntry(menuItem) : null;
    }
    
});

module.exports= ContetnAssist;