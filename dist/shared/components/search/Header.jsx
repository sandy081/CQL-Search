var React= require('react');
var HeaderModel= require('./models/HeaderModel');

var Header= React.createClass({
   render: function() {
       return (
           <th>{this.getValue(HeaderModel.propName)}</th>
       );
   }
});

module.exports= Header;