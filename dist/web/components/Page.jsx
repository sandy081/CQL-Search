var $= require('jquery');
var React= require('react');
var Navbar= require('./Navbar.jsx');
var PageModel= require('./models/PageModel');
var Search= require('./search/Search.jsx');
var ResultsContainer= require('./ResultsContainer.jsx');

var SearchPage= React.createClass({
    
    componentDidMount: function() {
        this.refs.search.actions.submit.listen(_.bind(function(searchText) {
            this.refs.resultsContainer.refresh(searchText);
        }, this));
    },
    
    render: function() {
        return ( 
                <div>
                    <Navbar/>
                     <Search ref="search" model={this.getValue(PageModel.propSearch)}/>
                     <ResultsContainer ref="resultsContainer" model={this.getValue(PageModel.propResultsContainer)}/>
                </div>
            ); 
    }
});

module.exports= SearchPage;