var _= require('lodash');
var React= require('react');
var SearchInputModel= require('./models/SearchInputModel');
var Proposal= require('./../../../shared/models/proposals/Proposal');

var _STATE_ACTIVE_DESCENDANT_ = "_ACTIVE_DESCENDANT_";

var SearchInput= React.createClass({
    
     actions: {
        inputFocussed: "input-focussed",  
        inputChanged: "input-changed",  
        escape: "escape", 
        arrowLeft: "arrow-left", 
        arrowUp: "arrow-up", 
        arrowRight: "arrow-right", 
        arrowDown: "arrow-down",
        submit: "submit"  
    },
    
    componentDidMount: function() {
        this._comittedValue= "";
	   this._delayInputChanged= _.debounce(this._inputChanged, 100);
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
    
    commit: function() {
        this._comittedValue= this.$ui.enabledInput.val();
        this.$ui.disabledInput.val(this._comittedValue);
    },
    
    uncommit: function() {
        this.$ui.enabledInput.val(this._comittedValue);
        this.$ui.disabledInput.val(this._comittedValue);
    },
    
    focus: function() {
        this.$ui.enabledInput.focus();  
    },
    
    getSearchText: function() {
        return this.$ui.enabledInput.val();  
    },
    
    getSearchTextTillSelection: function() {
        var input= this.$ui.enabledInput.get(0); 
        var inputText= input.value;
        var selectionStart= input.selectionStart;
        return selectionStart > -1 ? inputText.substring(0, selectionStart) : inputText;
    },
    
    setActiveDescendant: function(id) {
        this.getStateUpdater().update(_STATE_ACTIVE_DESCENDANT_, id);
    },
    
    showValueInDisabledInput: function(proposal) {
        var searchText= this.getSearchText();
        if (searchText && !proposal.get(Proposal.propDisabled)) {
            var newInput= this._getValueAfterApplyingProposal(proposal);
            if (newInput.startsWith(searchText)) {
                this.$ui.disabledInput.val(newInput);
            }
        }
    },
    
    hideValueInDisabledInput: function() {
        this.$ui.disabledInput.val("");
    },
    
    showValueInEnabledInput: function(proposal, commit) {
        var newInput= proposal.get(Proposal.propDisabled) ? this._comittedValue : this._getValueAfterApplyingProposal(proposal);
        this.$ui.enabledInput.val(newInput);
        if (commit) {
            this.commit();
        }
    },
    
    _getValueAfterApplyingProposal: function(proposal, addEndingString) {
        var proposalText= proposal.get(Proposal.propDisplayString);
        var from= proposal.getSelectionFrom();
        var till= proposal.getSelectionTill();
        var newInput= this._comittedValue.substring(0, from);
        newInput+= proposalText;
        if (till !== -1 && (till > from && till + 1 < this._comittedValue.length) || (till > from || till < this._comittedValue.length)) {
            newInput+= this._comittedValue.substring(till + 1);
        }
        return newInput;
    },
    
    _onFocus: function() {
        this.actions.inputFocussed();
    },
    
    _onChange: function() {
        this.commit();
        this._delayInputChanged();
    },
    
    _inputChanged: function() {
        this.actions.inputChanged(this.$ui.enabledInput.val());
    },
    
    _onKeyDown: function(event) {
        var handled= false;
        switch(event.keyCode) {
            case 9: //TAB
                // Eat tab
                // TODO: Propagate outside
                handled= true;
                break;
            case 13: //ENTER
                this.actions.submit(this.getSearchText());
                handled= true;
                break;
            case 27: //ESCAPE
                this.actions.escape();
                handled= true;
                break;
            case 37: //ARROW_LEFT
                this.actions.arrowLeft(event);
                break;
            case 38: //ARROW_UP
                if (!event.ctrlKey && !event.altKey && !event.metaKey) {
                    this.actions.arrowUp(event);
                    handled= true;
                }
                break;
            case 39: //ARROW_RIGHT
                this.actions.arrowRight(event);
                break;
            case 40: //ARROW_DOWN
                if (!event.ctrlKey && !event.altKey && !event.metaKey) {
                    this.actions.arrowDown(event);
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