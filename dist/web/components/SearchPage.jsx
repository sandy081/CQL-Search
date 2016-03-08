define([
        'jquery',
        'react',
        'jsx!web/components/SearchNavbar',
        'jsx!web/components/SearchContainer'
       ],
function(
         $,
         React,
         SearchNavbar,
         SearchContainer
        ) {

    return React.createClass({
        
        render: function() {
            return ( 
                    <div>
                        <SearchNavbar/>
                         <SearchContainer/>
                    </div>
                ); 
        }
    });
});