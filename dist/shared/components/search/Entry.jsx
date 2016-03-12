var React= require('react');
var EntryModel= require('./models/EntryModel');

var Entry= React.createClass({
   render: function() {
       return (
           <span>this.getValue(EntryModel.propValue)</span>
       );
   }
});

module.exports= Entry;