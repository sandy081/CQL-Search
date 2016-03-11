exports.Attributes= function() {
    return {
        "1": [
                {name: "to", text: "to", ops: [":"]},   
                {name: "from", text: "from", ops: [":"]}   
             ],
        "2": [
                {name: "Departure", text: "dep", ops: [":"]},   
                {name: "Return", text: "ret", ops: [":"]},   
                {name: "Persons", text: "#"}   
             ],
        "3": [
                {name: "adults", text: "adults", ops: [":"]},   
                {name: "infants", text: "infants", ops: [":"]},   
                {name: "children", text: "children", ops: [":"]}   
             ],
        "4": [
                {name: "Airlines", text: "@"}   
             ]
     };
}

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

exports.Airlines= function() {
    return [
        {name: "Emirates"},   
        {name: "Oman"},   
        {name: "Swiss"},   
        {name: "Lufthansa"}   
    ];
}

exports.DepartureDates= function() {
    return [
        {name: "today"},   
        {name: "tomorrow",},   
        {name: "2d", description: "In 2 days"},   
        {name: "3d", description: "In 3 days"},   
        {name: "1w", description: "In a week"},   
    ];
}

exports.ReturnDates= function() {
    return [
        {name: "same"},   
        {name: "next"},   
        {name: "2d", description: "After 2 days"},   
        {name: "3d", description: "After 3 days"},   
        {name: "1w", description:  "After a week"},   
    ];
}