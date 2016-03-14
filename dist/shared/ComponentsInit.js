var ComponentsFactory= require('./components/ComponentsFactory');
var ResultsModel= require('./components/results/models/ResultsModel');
var Results= require('./components/results//Results.jsx');
var HeaderModel= require('./components/results/models/HeaderModel');
var Header= require('./components/results/Header.jsx');
var RowModel= require('./components/results/models/RowModel');
var Row= require('./components/results/Row.jsx');
var EntryModel= require('./components/results/models/EntryModel');
var Entry= require('./components/results/Entry.jsx');
var FlightJourneyModel= require('./components/results/models/FlightJourneyModel');
var FlightJourney= require('./components/results/FlightJourney.jsx');

ComponentsFactory.registerComponent(ResultsModel, Results);
ComponentsFactory.registerComponent(HeaderModel, Header);
ComponentsFactory.registerComponent(RowModel, Row);
ComponentsFactory.registerComponent(EntryModel, Entry);
ComponentsFactory.registerComponent(FlightJourneyModel, FlightJourney);