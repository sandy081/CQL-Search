define([
        'react'
       ],
function(
         React
        ) {

    return React.createClass({
        
        actions: {
          inputFocussed: "input-focussed"  
        },
        
        render: function() {
            return (
                    <div className="searchInputContainer">
                        <input ref="disabledInput" type="search" autoComplete="off" disabled="disabled"/>
                        <input ref="enabledInput" className="enabledInput" type="search" autoComplete="off"
                                placeholder="Type to search..."
                                onClick={this._onFocus}/>
                    </div>
                );
        },
        
        _onFocus: function() {
            this.actions.inputFocussed();
        }
        
    });
      
});  
