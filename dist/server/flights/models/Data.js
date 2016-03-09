exports.Airports= function() {
    return [
        
        // Switzerland
        {country: "Switzerland", city: "Bern"},   
        {country: "Switzerland", city: "Geneva"},   
        {country: "Switzerland", city: "Zurich"},
        
        // Spain
        {country: "Spain", city: "Barcelona"},   
        {country: "Spain", city: "Madrid"},   
        {country: "Spain", city: "Ibiza"},
        
        // India
        {country: "India", city: "Chennai"},   
        {country: "India", city: "Bengaluru"},   
        {country: "India", city: "Hyderabad"},
        
        // Germany   
        {country: "Germany", city: "Frankfurt"},   
        {country: "Germany", city: "Munich"},   
        {country: "Germany", city: "Berlin"}   
    ];
}

exports.Attributes= function() {
    return [
        {name: "to", text: "to", ops: [":"]},   
        {name: "from", text: "from", ops: [":"]},   
        {name: "Persons", text: "#"},   
        {name: "adults", text: "adults", ops: [":"]},   
        {name: "children", text: "children", ops: [":"]},   
        {name: "infants", text: "infants", ops: [":"]},   
        {name: "on", text: "on", ops: [":"]},   
        {name: "back", text: "back", ops: [":"]},   
        {name: "Airlines", text: "@"}   
    ];
}