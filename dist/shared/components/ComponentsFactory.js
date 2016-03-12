var _= require('lodash');

var _componentKey= 0;
var _registry= {};

var _key= function(ModelPrototype) {
    if (ModelPrototype._componentKey === undefined) {
        ModelPrototype._componentKey= _componentKey++;
    }
    return ModelPrototype._componentKey.toString();
}

var ComponentsFactory= function() {}

ComponentsFactory.registerComponent= function(ModelPrototype, Component) {
    _registry[_key(ModelPrototype)]= Component;
};

ComponentsFactory.getComponent= function(ModelPrototype) {
    return _registry[_key(ModelPrototype)];
};

module.exports= ComponentsFactory;