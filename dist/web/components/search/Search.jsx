var React= require('react');
var SearchInput= require('./SearchInput.jsx');
var ContentAssist= require('./ContentAssist.jsx');
var SearchModel= require('./models/SearchModel');
var Proposal= require('./../../../shared/models/proposals/Proposal');

var SearchContainer= React.createClass({
    
    componentDidMount: function() {
        this.refs.searchInput.actions.inputFocussed.listen(_.bind(function(){
            this.refs.contentAssist.fetchProposals(this.refs.searchInput.getSearchText());
        }, this));
        
        this.refs.searchInput.actions.inputChanged.listen(_.bind(function(input){
            this.refs.contentAssist.fetchProposals(input);
        }, this));
        
        this.refs.searchInput.actions.arrowDown.listen(_.bind(function(){
            this.refs.searchInput.hideValueInDisabledInput();
            this.refs.contentAssist.focusNextProposal();
        }, this));
        
        this.refs.searchInput.actions.arrowUp.listen(_.bind(function(){
            this.refs.searchInput.hideValueInDisabledInput();
            this.refs.contentAssist.focusPreviousProposal();
        }, this));
        
        this.refs.searchInput.actions.arrowRight.listen(_.bind(function(){
            var firstProposal= this.getValue(SearchModel.propContentAssist).getFirstProposal();
            if (firstProposal) {
                this.refs.searchInput.showValueInEnabledInput(firstProposal.get(Proposal.propDisplayString));
                this.refs.contentAssist.fetchProposals(this.refs.searchInput.getSearchText());
            }
        }, this));
        
        this.refs.contentAssist.actions.proposalsShown.listen(_.bind(function(){
            this.refs.searchInput.hideValueInDisabledInput();
            var firstProposal= this.getValue(SearchModel.propContentAssist).getFirstProposal();
            if (firstProposal) {
                this.refs.searchInput.showValueInDisabledInput(firstProposal.get(Proposal.propDisplayString));
            }
        }, this));
        
        this.refs.contentAssist.actions.proposalFocussed.listen(_.bind(function(proposal){
            this.refs.searchInput.showValueInEnabledInput(proposal.get(Proposal.propDisplayString));
            this.refs.searchInput.setActiveDescendant(proposal.get(Proposal.propId));
        }, this));
        
        this.refs.searchInput.focus();
    },
    
    render: function() {
        return ( <div ref="searchContainer" className="searchContainer container">
                    <table>
                        <tbody>
                            <tr>
                                <td className="searchIconContainer"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></td>
                                <td className="searchInputContainer">
                                    <SearchInput ref="searchInput" model={this.getValue(SearchModel.propSearchInput)}/>
                                 </td>
                            </tr>
                            <tr>
                                <td/>
                                <td className="contentAssistContainer">
                                    <ContentAssist ref="contentAssist" model={this.getValue(SearchModel.propContentAssist)}/>
                                 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ); 
    }
    
});

module.exports= SearchContainer;