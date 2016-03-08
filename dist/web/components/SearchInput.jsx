var React= require('react');

var SearchInput= React.createClass({
    actions: {
        inputFocussed: "input-focussed"  
    },
    
    render: function() {
        return (
                <div className="searchInputContainer">
                    <input ref="disabledInput" type="search" autoComplete="off" disabled="disabled"/>
                    <input ref="enabledInput" className="enabledInput" type="search" autoComplete="off"
                            placeholder="Type to search for flights..."
                            onClick={this._onFocus}/>
                </div>
            );
    },
    
    _onFocus: function() {
        this.actions.inputFocussed();
    }
});

module.exports= SearchInput;