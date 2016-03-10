var _= require("lodash");
var React= require("react");
var MenuItemModel= require("./models/MenuItemModel");

var MenuItem= React.createClass({
			
    actions: {
        selected: 'selected',
        focussed: 'focussed',
        blurred: 'blurred'
    },
    
    componentDidMount: function() {
        if (this.getValue(MenuItemModel.propFocus)) {
            this._handleFocus();
        }
    },
    
    componentDidUpdate: function() {
        if (this.getValue(MenuItemModel.propFocus)) {
            this._handleFocus();
        }
    },
    
    render: function() {
        var isDisabled= this.getValue(MenuItemModel.propDisabled);
        var displayString= this.getValue(MenuItemModel.propDisplayString);
        var text= this.getValue(MenuItemModel.propText);
        var showText= text && text.trim() !== displayString.trim();
        var ariaLabel= this.getValue(MenuItemModel.propAriaLabel);
        return (<li className="components-dropdown-MenuItem" role="presentation" style={this._getStyle()}>
                    <a ref="menuItemAnchor" id={this.getValue(MenuItemModel.propId)} href="javascript:void(0);" role="menuitem" 
                                                    className={this._getAnchorClassName()}
                                                    onClick={isDisabled ? null : this._handleClick}  
                                                    onFocus={this._handleFocus} 
                                                    onKeyDown={this._handleKeyDown}
                                                    data-target="#" 
                                                    aria-label={ariaLabel ? ariaLabel : null}>
                        {this._getIconElement()}
                        <span aria-hidden={ariaLabel ? "true" : "false"}>{displayString}</span>
                        {showText ? <span aria-hidden="true" className="menu-item-text">{text}</span> : null}
                    </a>
                </li>
                );
    },
    
    _getAnchorClassName: function() {
        var classNames= [];
        if (this.getValue(MenuItemModel.propDisabled)) {
            classNames.push("disabled-menu-item");
        }
        if (this.getValue(MenuItemModel.propFocus)) {
            classNames.push("focus");
        }
        return _.isEmpty(classNames) ? null : React.className(classNames);
    },
    
    _getIconElement: function() {
        if (this.getValue(MenuItemModel.propIconUrl)) {
            return <img aria-hidden="true" src={this.getValue(MenuItemModel.propIconUrl)} className="menu-item-icon" />; 
        }
        
        if (this.getValue(MenuItemModel.propIconClass)) {
            return <span aria-hidden="true" className={React.className([this.getValue(MenuItemModel.propIconClass), "menu-item-icon"])} />;
        }
        
        return null;
    },
    
    _getStyle: function() {
        if (this.getValue(MenuItemModel.propDepth) > 0) {
            return {
                marginLeft: 20 * this.getValue(MenuItemModel.propDepth) + "px"
            };
        }
        return {};
    },
    
    _handleClick: function() {
        this.actions.selected(this.props.model);
    },
    
    _handleFocus: function() {
        this.actions.focussed(this.props.model);
    },
    
    _handleKeyDown: function(event) {
        switch(event.keyCode) {
            case 9: //TAB
                this.actions.blurred(event);
                break;
        }
    }
});

module.exports= MenuItem;
