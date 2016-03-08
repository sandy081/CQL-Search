var React= require('react');
var SearchInput= require('./SearchInput.jsx');
var ContentAssist= require('./ContentAssist.jsx');

var SearchContainer= React.createClass({
    
    componentDidMount: function() {
        this.refs.searchInput.actions.inputFocussed.listen(_.bind(function(){
            this.refs.contentAssist.showProposals();
        }, this));
        
        this.refs.searchInput.actions.inputChanged.listen(_.bind(function(input){
            this.refs.searchInput.showValueInDisabledInput(input ? input + "proposal text" : "");
        }, this));
        
        this.refs.searchInput.actions.arrowDown.listen(_.bind(function(){
            this.refs.contentAssist.refs.dropdownmenu.focus();
        }, this));
        
        this.refs.contentAssist.actions.proposalFocussed.listen(_.bind(function(proposal){
            this.refs.searchInput.showValueInEnabledInput(proposal.get("displayString"));
        }, this));
    },
    
    render: function() {
        return ( <div ref="searchContainer" className="searchContainer container">
                    <table>
                        <tbody>
                            <tr>
                                <td className="searchIconContainer"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></td>
                                <td className="searchInputContainer">
                                    <SearchInput ref="searchInput"/>
                                 </td>
                            </tr>
                            <tr>
                                <td/>
                                <td className="contentAssistContainer">
                                    <ContentAssist ref="contentAssist"/>
                                 </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ); 
    }
});

module.exports= SearchContainer;