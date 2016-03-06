var React= require('React');
var SearchInput= require('web/components/SearchInput.jsx');


var SearchContainer= React.createClass({
   
    render: function() {
        return ( <div className="searchContainer">
                    <table>
                        <tbody>
                            <tr>
                                <td className="searchIconContainer"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></td>
                                <td><SearchInput/></td>
                            </tr>
                        </tbody>
                    </table>
                  </div>
                ); 
    }
        
});

module.exports= SearchContainer;