var _= require("lodash");
var React= require("react");
var DropDownMenuModel= require("./models/DropDownMenuModel");
var MenuHeaderModel= require("./models/MenuHeaderModel");
var MenuSeparatorModel= require("./models/MenuSeparatorModel");
var MenuItemModel= require("./models/MenuItemModel");
var MenuItem= require("./MenuItem.jsx");

var DropDownMenu= React.createClass({
			
    actions: {
        menuItemFocussed: 'menu-item-focussed',
        menuItemSelected: 'menu-item-selected',
        menuBlurred: 'menu-blurred'
    },
    
    componentWillMount: function() {
        this._bindMenuItemFn = _.bind(this._bindMenuItem);
    },
    
    focus: function() {
        this.$el.find("li a").eq(0).focus();
    },
    
    render: function() {
        var alignment= this.getValue(DropDownMenuModel.propAlignment);
        return (
                <ul className={"components-dropdown-DropDownMenu dropdown-menu " + alignment} role="menu">
                    {this._renderMenuEntries()}
                </ul>
            );
    },
    
    _renderMenuEntries: function() {
        return (_.map(this._getMenuEntries(), _.bind(this._renderMenuEntry, this)));
    },
    
    _renderMenuEntry: function(menuEntry) {
        if (menuEntry instanceof MenuHeaderModel) {
            return (<li key={menuEntry.get(MenuHeaderModel.propLabel)} className="dropdown-header" role="presentation">
							{menuEntry.get(MenuHeaderModel.propLabel)}
					</li>);
        }
        
        if (menuEntry instanceof MenuSeparatorModel) {
            return <li className="divider"></li>;
        }
        
        return <MenuItem model={menuEntry} ref={this._bindMenuItemFn}/>;
    },
    
    _getMenuEntries: function() {
        return this.getValue(DropDownMenuModel.propMenuEntries);
    },
    
    _bindMenuItem: function(menuItemView) {
        if (menuItemView) {
            menuItemView.actions.selected.listen(this.actions.menuItemSelected);
            menuItemView.actions.focussed.listen(_.bind(this._onMenuItemFocussed, this, menuItemView));
            menuItemView.actions.blurred.listen(_.bind(this._onMenuItemBlurred, this, menuItemView));
        }
    },
    
    _handleKeyDown: function(event) {
        var handled= false;
        switch(event.keyCode) {
            case $.keycodes.TAB:
                if (this._getMenuEntries().length === 0 || event.shiftKey) {
                    this.actions.menuBlurred();
                }
                break;
        }
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
    },
    
     _onMenuItemFocussed: function(menuItemView, event) {
        this.actions.menuItemFocussed(menuItemView.props.model);
        menuItemView.$ui.menuItemAnchor[0].focus();
    },
    
    _onMenuItemBlurred: function(menuItemView, event) {
        var firstMenuItem= this._getFirstMenuItem();
        var lastMenuItem= this._getLastMenuItem();
        var menuItem= menuItemView.props.model;

        if (firstMenuItem === menuItem && event.shiftKey) {
            this.actions.menuBlurred();
        }
        
        if (lastMenuItem === menuItem && !event.shiftKey) {
            this.actions.menuBlurred();
        }
    },
    
    _getFirstMenuItem: function() {
        return _.find(this._getMenuEntries(), function(menuEntry) {
            return menuEntry instanceof MenuItemModel;
        });
    },
    
    _getLastMenuItem: function() {
        return _.findLast(this._getMenuEntries(), function(menuEntry) {
            return menuEntry instanceof MenuItemModel;
        });
    }
    
});

module.exports= DropDownMenu;
