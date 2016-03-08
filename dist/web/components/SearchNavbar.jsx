var React= require('react');
var SearchContainer= require('components/SearchContainer.jsx');

var SearchNavbar= React.createClass({
    render: function() {
        return ( 
                <header className="navbar navbar-inverse navbar-static-top bs-docs-nav" role="banner">
                    <div className="container">
                        <div className="navbar-header">
                            <a href="../" className="navbar-brand">Flights Search</a>
                        </div>
                        <nav id="bs-navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav"> 
                                <li> 
                                    <a href="../getting-started/">Getting started</a> 
                                </li> 
                                <li> 
                                    <a href="../css/">CSS</a> 
                                </li> 
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li> 
                                    <a href="../getting-started/">Blog</a> 
                                </li> 
                                <li> 
                                    <a href="../css/">Themes</a> 
                                </li> 
                            </ul> 
                        </nav>
                    </div>
                </header>
            );  
    }
});

module.exports= SearchNavbar;