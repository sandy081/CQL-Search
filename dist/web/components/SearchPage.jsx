var $= require('jquery');
var React= require('react');
var SearchNavbar= require('components/SearchNavbar.jsx');
var SearchContainer= require('components/SearchContainer.jsx');

var SearchPage= React.createClass({
    render: function() {
        return ( 
                <div>
                    <SearchNavbar/>
                        <SearchContainer/>
                </div>
            ); 
    }
});

module.exports= SearchPage;