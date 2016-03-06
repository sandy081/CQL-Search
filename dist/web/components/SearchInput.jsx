var React= require('React');

var SearchInput= React.createClass({
   
    render: function() {
        return (
                <div className="searchInputContainer">
                      <input type="search" autoComplete="off" disabled="disabled"/>
                      <input className="enabledInput" type="search" autoComplete="off"
                             placeholder="Type to search..."/>
                </div>
              );
    }
});  

module.exports= SearchInput;