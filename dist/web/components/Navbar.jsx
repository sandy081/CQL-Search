var React= require('react');

var SearchNavbar= React.createClass({
    render: function() {
        return ( 
                <header className="navbar navbar-inverse navbar-static-top bs-docs-nav" role="banner">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="../" className="navbar-brand">Search</a>
                        </div>
                        <nav id="bs-navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav"> 
                                <li> 
                                    <a href="../">Flights</a> 
                                </li> 
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li> 
                                    <a href="../">Log in</a> 
                                </li> 
                            </ul> 
                        </nav>
                    </div>
                </header>
            );  
    }
});

module.exports= SearchNavbar;