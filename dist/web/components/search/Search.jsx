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
            var current= this.getValue(SearchModel.propContentAssist).getCurrent();
            var next= this.getValue(SearchModel.propContentAssist).getNext();
            this.refs.contentAssist.focusProposal(next, current);
        }, this));
        
        this.refs.searchInput.actions.arrowUp.listen(_.bind(function(){
            this.refs.searchInput.hideValueInDisabledInput();
            var current= this.getValue(SearchModel.propContentAssist).getCurrent();
            var previous= this.getValue(SearchModel.propContentAssist).getPrevious();
            this.refs.contentAssist.focusProposal(previous, current);
        }, this));
        
        this.refs.searchInput.actions.arrowRight.listen(_.bind(function(){
            var proposal= this.getValue(SearchModel.propContentAssist).getCurrent();
            proposal= proposal || this.getValue(SearchModel.propContentAssist).getFirstProposal();
            if (proposal) {
                this.refs.searchInput.showValueInEnabledInput(proposal, true);
                this.refs.contentAssist.fetchProposals(this.refs.searchInput.getSearchText());
            }
        }, this));
        
        this.refs.contentAssist.actions.proposalsShown.listen(_.bind(function(){
            this.refs.searchInput.hideValueInDisabledInput();
            var firstProposal= this.getValue(SearchModel.propContentAssist).getFirstProposal();
            if (firstProposal) {
                this.refs.searchInput.showValueInDisabledInput(firstProposal);
            }
        }, this));
        
        this.refs.contentAssist.actions.proposalFocussed.listen(_.bind(function(proposal){
            this.refs.searchInput.showValueInEnabledInput(proposal, false);
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