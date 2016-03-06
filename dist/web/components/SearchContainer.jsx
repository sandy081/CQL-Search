define([
        'jquery',
        'react',
        'jsx!web/components/SearchInput'
       ],
function(
         $,
         React,
         SearchInput
        ) {

    return React.createClass({
    
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
});