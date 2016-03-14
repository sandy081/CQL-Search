var React= require('react');
var FlightJourneyModel= require('./models/FlightJourneyModel');

var FlightJourney= React.createClass({
   
   render: function() {
    var iconUrl= this.getValue(EntryModel.propIconUrl);
       return (
           <td>
                <div>
                    <span>{this.getValue(FlightJourneyModel.propFrom)}</span>
                    return <img src={this.getValue(EntryModel.propIconUrl)} className="journey-icon" />;
                    <span>{this.getValue(FlightJourneyModel.propTo)}</span>
                </div>
           </td>
       );
   }
   
});

module.exports= FlightJourney;