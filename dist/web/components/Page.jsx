var $= require('jquery');
var React= require('react');
var Navbar= require('./Navbar.jsx');
var Search= require('./search/Search.jsx');
var SearchModel= require('./search/models/SearchModel');

var SearchPage= React.createClass({
    
    render: function() {
        return ( 
                <div>
                    <Navbar/>
                     <Search model={new SearchModel()}/>
                </div>
            ); 
    }
});

module.exports= SearchPage;