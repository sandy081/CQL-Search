var React= require('react');
var SearchInput= require('./SearchInput.jsx');
var ContentAssist= require('./ContentAssist.jsx');
var ContentAssistModel= require('./models/ContentAssistModel');
var SearchModel= require('./models/SearchModel');
var Proposal= require('./../../../shared/models/proposals/Proposal');

var SearchContainer= React.createClass({

    actions: {
        submit: "submit"  
    },
    
    componentDidMount: function() {
        this.refs.searchInput.actions.inputFocussed.listen(_.bind(this._fetchProposals, this));
        this.refs.searchInput.actions.inputChanged.listen(_.bind(this._fetchProposals, this));
        
        this.refs.searchInput.actions.escape.listen(_.bind(this._onEscape, this));
        this.refs.searchInput.actions.arrowLeft.listen(_.bind(this._hideProposals, this));
        this.refs.searchInput.actions.arrowDown.listen(_.bind(this._arrowDown, this, true));
        this.refs.searchInput.actions.arrowUp.listen(_.bind(this._focusProposal, this, false));
        this.refs.searchInput.actions.arrowRight.listen(_.bind(this._arrowRight, this));
        this.refs.searchInput.actions.submit.listen(_.bind(this._onSubmit, this));
        
        this.refs.contentAssist.actions.proposalsShown.listen(_.bind(this._onProposalsShown, this));
        this.refs.contentAssist.actions.proposalFocussed.listen(_.bind(this._onProposalFocussed, this));
        this.refs.contentAssist.actions.proposalSelected.listen(_.bind(this._onProposalSelected, this));
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
    
    _commitProposal: function(proposal) {
        this.refs.searchInput.showValueInEnabledInput(proposal, true);
        this._fetchProposals();
    },
    
    _fetchProposals: function() {
        this.refs.contentAssist.fetchProposals(this.refs.searchInput.getSearchTextTillSelection());
    },
    
    _arrowRight: function(event) {
        if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
           this._hideProposals();
        } else {
            var proposal= this.refs.contentAssist.areProposalsShown() ? this.refs.contentAssist.getFocussedProposal() || this.getValue(SearchModel.propContentAssist).getFirstProposal() : null;
            if (proposal) {
                this._commitProposal(proposal);
            } 
        }
    },
    
    _arrowDown: function() {
        if (this.refs.contentAssist.areProposalsShown()) {
            this._focusProposal(true);
        } else {
            this._fetchProposals();
        }
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
    
    _onProposalSelected: function(proposal) {
        this._commitProposal(proposal);
        this.refs.searchInput.focus();
    },
    
    _onProposalFocussed: function(proposal) {
        this.refs.searchInput.showValueInEnabledInput(proposal, false);
        this.refs.searchInput.setActiveDescendant(proposal.get(Proposal.propId));
    },
    
    _onSubmit: function(searchText) {
        var proposal= this.refs.contentAssist.getFocussedProposal();
        if (proposal) {
            this._commitProposal(proposal);
        } else {
            this._hideProposals();
            this.actions.submit(searchText);
        }
    },
    
    _onEscape: function() {
        this._hideProposals();
        this.refs.searchInput.uncommit();
    },
    
    _hideProposals: function() {
        this.refs.contentAssist.hideProposals();
        this.refs.searchInput.hideValueInDisabledInput();
    }
});

module.exports= SearchContainer;