var $= require('jquery'); 
var _= require('lodash');
var React= require('react'); 
var ReactDOM= require('react-dom');
var Reflux= require('reflux');
var ComponentsFactory= require('./ComponentsFactory'); 

var StateUpdater= function(component) {
    this.newState= {};
    this.component= component;
};

StateUpdater.prototype.set= function(prop, value) {
    this.newState[prop]= value;
    return this;
};

StateUpdater.prototype.update= function(prop, value) {
    if (prop) {
        this.set(prop, value);
    }
    this.component.setState(this.newState);
};

var mixin= {
    
    getValue: function(prop) {
        return this.props.model.get(prop);
    },
    
    getStateValue: function(prop) {
        return this.state ? this.state[prop] : null;
    },
    
    getStateUpdater: function() {
        return new StateUpdater(this);
    },
    
    componentWillMount: function() {
        this.actions= this.actions || {};
        this.actions= _.mapValues(this.actions, Reflux.createAction);  
    },
    
    componentDidMount: function() {
        this.$el= $(ReactDOM.findDOMNode(this));
        this._collectReferences();  
    },
    
    componentDidUpdate: function() {
        this._collectReferences();  
    },
    
    componentWillUnmount: function() {
        _.each(this.actions, function(action){
            action.emitter.removeAllListeners();  
        }); 
    },
    
    renderCollectionFromProperty: function(property) {
      return this.renderCollection(this.getValue(property)); 
    },
    
    renderModelFromProperty: function(property) {
      return this.renderModel(this.getValue(property)); 
    },
    
    renderCollection: function(collection) {
      return collection.map(_.bind(this.renderModel, this));
    },
    
    renderModel: function(model) {
      var component= ComponentsFactory.getComponent(model.constructor)
      return React.createElement(component, {model: model});
    },
    
    _collectReferences: function() {
        this.$ui= {};
        _.each(_.keys(this.refs), _.bind(function(key){
            this.$ui[key]= $(ReactDOM.findDOMNode(this.refs[key]));
        }, this));   
    }
};

var createClassFunc= React.createClass;

React.createClass= function(spec) {
    spec= spec || {};
    spec.mixins= spec.mixins || [];
    spec.mixins.push(mixin);
    return createClassFunc(spec);  
};

React.className= function(classes) {
    if (_.isArray(classes)) {
        return _.reduce(classes, function(accumulator, clazz){
            return accumulator + " " + clazz;
        });
    }
    return classes;
};