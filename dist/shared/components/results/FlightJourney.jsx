var React= require('react');
var FlightJourneyModel= require('./models/FlightJourneyModel');

var FlightJourney= React.createClass({
   
   render: function() {
        return (
            <td>
                    <div>
                        <span>{this.getValue(FlightJourneyModel.propFrom) + " "}</span>
                        <img src={this.getValue(FlightJourneyModel.propIconUrl)} className="entry-item-icon" />
                        <span>{" " + this.getValue(FlightJourneyModel.propTo)}</span>
                    </div>
            </td>
        );
   }
   
   
});

module.exports= FlightJourney;