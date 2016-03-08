var React= require('react');
var SearchInput= require('components/SearchInput.jsx');

var SearchContainer= React.createClass({
    render: function() {
        return ( <div ref="searchContainer" className="searchContainer container">
                    <table>
                        <tbody>
                            <tr>
                                <td className="searchIconContainer"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></td>
                                <td><SearchInput ref="inputContainer"/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ); 
    }
});

module.exports= SearchContainer;