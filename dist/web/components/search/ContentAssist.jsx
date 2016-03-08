var _= require("lodash");
var React= require('react');
var DropDownMenu= require('../dropdown/DropDownMenu.jsx');
var DropDownMenuModel= require('../dropdown/models/DropDownMenuModel');

var _STATE_MENU_ITEMS_= "_STATE_MENU_ITEMS_";

var ContetnAssist= React.createClass({
    
    actions: {
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
        return (
                <div className="dropdown">
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
                        }, this));  
    },
    
});

module.exports= ContetnAssist;