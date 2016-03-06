var React= require('React');

var SearchInput= React.createClass({
   
    render: function() {
        return (
                <div className="searchInputContainer">
                      <input ref="disabledInput" type="search" autoComplete="off" disabled="disabled"/>
                      <input ref="enabledInput" className="enabledInput" type="search" autoComplete="off"
                             placeholder="Type to search..."/>
                </div>
              );
    }
});  

module.exports= SearchInput;