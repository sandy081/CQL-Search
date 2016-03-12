var _= require('lodash');
var React= require('react');

var _prototypes= [];
var _registry= {};

var _key= function(ModelPrototype) {
    var key= _.indexOf(_prototypes, ModelPrototype);
    if (key === -1) {
        _prototypes.push(ModelPrototype);
        key= _prototypes.length - 1;
    }
    return key;
}

var ComponentsFactory= function() {}

ComponentsFactory.registerComponent= function(ModelPrototype, Component) {
    _registry[_key(ModelPrototype)]= Component;
};

ComponentsFactory.getComponent= function(ModelPrototype) {
    return _registry[_key(ModelPrototype)];
};

ComponentsFactory.createComponent= function(model) {
    var Component= ComponentsFactory.getComponent(model.prototype); 
    return <Component model={model}/>
};

module.exports= ComponentsFactory;