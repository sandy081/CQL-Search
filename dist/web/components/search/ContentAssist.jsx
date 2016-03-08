var React= require('react');
var DropDownMenu= require('../dropdown/DropDownMenu.jsx');
var DropDownMenuModel= require('../dropdown/models/DropDownMenuModel');
var MenuHeaderModel= require('../dropdown/models/MenuHeaderModel');
var MenuSepartorModel= require('../dropdown/models/MenuSeparatorModel');
var MenuItemModel= require('../dropdown/models/MenuItemModel');

var SearchInput= React.createClass({
    
    actions: {
      proposalFocussed: 'proposal-focussed',
      proposalSelected: 'proposal-selected'  
    },
    
    componentDidMount: function() {
      this.refs.dropdownmenu.actions.menuItemSelected.listen(this.actions.proposalSelected);  
      this.refs.dropdownmenu.actions.menuItemFocussed.listen(this.actions.proposalFocussed);  
    },
    
    render: function() {
        var dropDownMenuModel= new DropDownMenuModel();
        var menuEntries= [];
        menuEntries.push(new MenuHeaderModel({label : "Switzerland"}));
        menuEntries.push(new MenuItemModel({displayString : "Zurich"}));
        menuEntries.push(new MenuItemModel({displayString : "Geneva"}));
        menuEntries.push(new MenuItemModel({displayString : "Berne"}));
        menuEntries.push(new MenuSepartorModel());
        menuEntries.push(new MenuHeaderModel({label : "Gernany"}));
        menuEntries.push(new MenuItemModel({displayString : "Munich"}));
        menuEntries.push(new MenuItemModel({displayString : "Frankfurt"}));
        menuEntries.push(new MenuItemModel({displayString : "Berlin"}));
        dropDownMenuModel.set(DropDownMenuModel.propMenuEntries, menuEntries);
        return (
                <div className="dropdown">
                    <button className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style={{display: 'none'}}/>
                    <DropDownMenu ref="dropdownmenu" model={dropDownMenuModel}/>
                 </div>
            );
    },
    
    showProposals: function() {
        this.$el.addClass("open");
    }
    
});

module.exports= SearchInput;