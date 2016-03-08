var React= require('react');

var SearchEditableInput= React.createClass({
    
    actions: {
        inputFocussed: "input-focussed"  
    },
    
    render: function() {
        return (
                    <input ref="enabledInput" className="enabledInput" type="search" autoComplete="off"
                            placeholder="Type to search for flights..."
                            onClick={this._onFocus}/>
            );
    },
    
    _onFocus: function() {
        this.actions.inputFocussed();
    }
});

module.exports= SearchEditableInput;