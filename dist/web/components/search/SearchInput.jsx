var React= require('react');

var SearchInput= React.createClass({
    
     actions: {
        inputFocussed: "input-focussed",  
        inputChanged: "input-changed",  
        arrowDown: "arrow-down"  
    },
    
    render: function() {
        return (
                <div className="searchInput">
                    <input ref="enabledInput" className="enabledInput" type="search" autoComplete="off" 
                                        placeholder="Type to search..."
                                        onClick={this._onFocus}
                                        onChange={this._onChange}
                                        onKeyDown={this._onKeyDown}/>
                    <input ref="disabledInput" className="disabledInput" type="search" autoComplete="off" disabled="disabled"/>
                </div>
            );
    },
    
    showValueInDisabledInput: function(value) {
        this.$ui.disabledInput.val(value);
    },
    
    showValueInEnabledInput: function(value) {
        this.$ui.enabledInput.val(value);
    },
    
    _onFocus: function() {
        this.actions.inputFocussed();
    },
    
    _onChange: function() {
        this.actions.inputChanged(this.$ui.enabledInput.val());
    },
    
    _onKeyDown: function(event) {
        var handled= false;
        switch(event.keyCode) {
            case 40: //ARROW_DOWN
                this.actions.arrowDown();
                handled= true;
                break;
        }
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    
});

module.exports= SearchInput;