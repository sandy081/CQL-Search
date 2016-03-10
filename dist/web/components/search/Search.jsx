var React= require('react');
var SearchInput= require('./SearchInput.jsx');
var ContentAssist= require('./ContentAssist.jsx');
var ContentAssistModel= require('./models/ContentAssistModel');
var SearchModel= require('./models/SearchModel');
var Proposal= require('./../../../shared/models/proposals/Proposal');

var SearchContainer= React.createClass({
    
    componentDidMount: function() {
        this.refs.searchInput.actions.inputFocussed.listen(_.bind(this._fetchProposals, this));
        this.refs.searchInput.actions.inputChanged.listen(_.bind(this._fetchProposals, this));
        
        this.refs.searchInput.actions.arrowDown.listen(_.bind(this._focusProposal, this, true));
        this.refs.searchInput.actions.arrowUp.listen(_.bind(this._focusProposal, this, false));
        this.refs.searchInput.actions.arrowRight.listen(_.bind(this._commit, this));
        this.refs.searchInput.actions.submit.listen(_.bind(this._onSubmit, this));
        
        this.refs.contentAssist.actions.proposalsShown.listen(_.bind(this._onProposalsShown, this));
        this.refs.contentAssist.actions.proposalFocussed.listen(_.bind(this._onProposalsFocussed, this));
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
    },
    
    _commit: function() {
        var proposal= this.refs.contentAssist.getFocussedProposal() || this.getValue(SearchModel.propContentAssist).getFirstProposal();
        if (proposal) {
            this._commitProposal(proposal);
        } 
    },
    
    _commitProposal: function(proposal) {
        this.refs.searchInput.showValueInEnabledInput(proposal, true);
        this._fetchProposals();
    },
    
    _fetchProposals: function() {
        this.refs.contentAssist.fetchProposals(this.refs.searchInput.getSearchText());
    },
    
    _focusProposal: function(next) {
        this.refs.searchInput.hideValueInDisabledInput();
        if (next) {
            this.refs.contentAssist.focusNext();
        } else {
            this.refs.contentAssist.focusPrevious();
        }
    },
    
    _onProposalsShown: function() {
        this.refs.searchInput.hideValueInDisabledInput();
        var firstProposal= this.getValue(SearchModel.propContentAssist).getFirstProposal();
        if (firstProposal) {
            this.refs.searchInput.showValueInDisabledInput(firstProposal);
        }
    },
    
    _onProposalsFocussed: function(proposal) {
        this.getValue(SearchModel.propContentAssist).set(ContentAssistModel.propFocussed, proposal);
        this.refs.searchInput.showValueInEnabledInput(proposal, false);
        this.refs.searchInput.setActiveDescendant(proposal.get(Proposal.propId));
    },
    
    _onSubmit: function() {
        var proposal= this.refs.contentAssist.getFocussedProposal();
        if (proposal) {
            this._commitProposal(proposal);
        } else {
            // Submit for search
        }
    }
});

module.exports= SearchContainer;