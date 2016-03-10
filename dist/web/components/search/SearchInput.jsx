var _= require('lodash');
var React= require('react');
var SearchInputModel= require('./models/SearchInputModel');
var Proposal= require('./../../../shared/models/proposals/Proposal');

var _STATE_ACTIVE_DESCENDANT_ = "_ACTIVE_DESCENDANT_";

var SearchInput= React.createClass({
    
     actions: {
        inputFocussed: "input-focussed",  
        inputChanged: "input-changed",  
        arrowUp: "arrow-up", 
        arrowRight: "arrow-right", 
        arrowDown: "arrow-down"  
    },
    
    componentDidMount: function() {
	   this._delayInputChanged= _.debounce(this._inputChanged, 200);
	},
    
    render: function() {
        var activedescendant= this.getStateValue(_STATE_ACTIVE_DESCENDANT_) || null;
        return (
                <div className="searchInput">
                    <input ref="enabledInput" className="enabledInput" type="search" autoComplete="off" 
                                        placeholder="Type to search..."
                                        onClick={this._onFocus}
                                        onChange={this._onChange}
                                        onKeyDown={this._onKeyDown}
                                        aria-haspopup="true"
                                        aria-owns={this.getValue(SearchInputModel.propAriaOwns)}
                                        aria-activedescendant={activedescendant}/>
                    <input ref="disabledInput" className="disabledInput" type="search" autoComplete="off" disabled="disabled"/>
                </div>
            );
    },
    
    getSearchText: function() {
        return this.$ui.enabledInput.val();  
    },
    
    setActiveDescendant: function(id) {
        this.getStateUpdater().update(_STATE_ACTIVE_DESCENDANT_, id);
    },
    
    showValueInDisabledInput: function(value) {
        if (this.getSearchText()) {
            this.$ui.disabledInput.val(value);
        }
    },
    
    hideValueInDisabledInput: function(value) {
        this.$ui.disabledInput.val("");
    },
    
    showValueInEnabledInput: function(proposal) {
        this.$ui.enabledInput.val(proposal.get(Proposal.propDisplayString));
    },
    
    focus: function() {
        this.$ui.enabledInput.focus();  
    },
    
    _onFocus: function() {
        this.actions.inputFocussed();
    },
    
    _onChange: function() {
        if (this._hideValueInDisabledInput || !this.getSearchText()) {
            this.hideValueInDisabledInput();
            this._hideValueInDisabledInput= false;
        }
        this._delayInputChanged();
    },
    
    _inputChanged: function() {
        this.actions.inputChanged(this.$ui.enabledInput.val());
    },
    
    _onKeyDown: function(event) {
        var handled= false;
        switch(event.keyCode) {
            case 37: //ARROW_LEFT
                this._hideValueInDisabledInput= true;
                break;
            case 38: //ARROW_UP
                if (!event.ctrlKey && !event.altKey && !event.metaKey) {
                    this.actions.arrowUp();
                    handled= true;
                }
                break;
            case 39: //ARROW_RIGHT
                if (!event.ctrlKey && !event.altKey && !event.metaKey && this.$ui.enabledInput[0].selectionEnd === this.getSearchText().length) {
                    this.actions.arrowRight();
                }
                break;
            case 40: //ARROW_DOWN
                if (!event.ctrlKey && !event.altKey && !event.metaKey) {
                    this.actions.arrowDown();
                    handled= true;
                }
                break;
        }
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    
});

module.exports= SearchInput;