var React= require('react');
var ResultsContainerModel= require('./models/ResultsContainerModel');
var Results= require('./../../shared/components/results/Results.jsx');

var _STATE_RESULTS_   = "_STATE_RESULTS_";

var ResultsContainer= React.createClass({
    
    getInitialState: function() {
        var initialState= {};
        initialState[_STATE_RESULTS_]= this.getValue(ResultsContainerModel.propResults);
        return initialState;
    },
    
    shouldComponentUpdate: function(nextProps, nextState) {
        var currentResults= this.getStateValue(_STATE_RESULTS_); 
        return !currentResults || currentResults.cid !== nextState[_STATE_RESULTS_].cid;
    },
    
    render: function() {
        var results= this.getStateValue(_STATE_RESULTS_);
        return ( 
                    <div className="container searchResultsContainer">
                        {results ? <Results model={results}/> : null}
                    </div>
            ); 
    },
    
    refresh: function(filter) {
        this.props.model.refresh(filter)
                        .done(_.bind(function(results){
                            this.getStateUpdater().update(_STATE_RESULTS_, results);
                        }, this));
    }
});

module.exports= ResultsContainer;