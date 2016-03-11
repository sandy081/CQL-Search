exports.Attributes= function() {
    return {
        "1": [
                {name: "from", text: "from", ops: [":"]},   
                {name: "to", text: "to", ops: [":"]}   
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
        
        // Germany   
        {country: "Germany", city: "Frankfurt"},   
        {country: "Germany", city: "Munich"},   
        {country: "Germany", city: "Berlin"},
           
        //France
        {country: "France", city: "Paris"},   
        {country: "France", city: "Marsielle"},   
        {country: "France", city: "Nice"},
        
        //Italy
        {country: "Italy", city: "Venice"},   
        {country: "Italy", city: "Rome"},   
        {country: "Italy", city: "Milan"}
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