var React= require('react');
var EditableInput= require('components/search/EditableInput.jsx');

var SearchInput= React.createClass({
    
    render: function() {
        return (
                <div className="searchInputContainer">
                    <input ref="disabledInput" type="search" autoComplete="off" disabled="disabled"/>
                    <EditableInput/>
                </div>
            );
    }
    
});

module.exports= SearchInput;