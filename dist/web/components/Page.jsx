var $= require('jquery');
var React= require('react');
var Navbar= require('components/Navbar.jsx');
var SearchContainer= require('components/search/SearchContainer.jsx');

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