exports.Attributes= function() {
    return {
        "1": [
                {name: "From", text: "From", ops: [":"]},   
                {name: "To", text: "To", ops: [":"]}   
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
             ]
     };
}

exports.columns= function() { 
return [
        "Airlines",
        "From",
        "To",
        "Price"
    ];
}

exports.flights= function() {
    return [
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:100, Child:90, Infant: 10, '#': 5},   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/lufthansa.png", value:"Lufthansa"}, Adult:80, Child:70, Infant: 10, '#': 2},   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:95, Child:80, Infant: 10, '#': 3},   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/austrian.png", value:"Austrian Airlines"}, Adult:85, Child:75, Infant: 10, '#': 1}   
    ];
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