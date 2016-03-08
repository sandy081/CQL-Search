var $= require('jquery');
var React= require('react');
var Navbar= require('./Navbar.jsx');
var SearchContainer= require('./search/SearchContainer.jsx');

var SearchPage= React.createClass({
    render: function() {
        return ( 
                <div>
                    <Navbar/>
                     <SearchContainer/>
                </div>
            ); 
    }
});

module.exports= SearchPage;