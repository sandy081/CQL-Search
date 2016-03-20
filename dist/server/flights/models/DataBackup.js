exports.Attributes= function() {
    return {
        "1": [
                {name: "From", text: "From", ops: [":"], type:"city", direct: true},   
                {name: "To", text: "To", ops: [":"], type:"city", direct: true}   
             ],
        "2": [
                {name: "adults", text: "adults", ops: [":"]},   
                {name: "infants", text: "infants", ops: [":"]},   
                {name: "children", text: "children", ops: [":"]}   
             ],
        "3": [
                {name: "Departure", text: "dep", ops: [":"]},   
                {name: "Return", text: "ret", ops: [":"]}   
             ],
        "4": [
                {name: "Sort ascending", text: "asc:"},   
                {name: "Sort descending", text: "dsc:"}   
             ]
     };
}

exports.columns= function() { 
return [
        { title: "Airlines", attribute: "Airlines" },
        { title: "Journey", attribute: "Journey" },
        { title: "Total Price", attribute: "Price" },
        { title: "Available", attribute: "#" }
    ];
}

exports.sortColumns= function() { 
return [
        { title: "Price", attribute: "PriceValue" }
    ];
}

exports.flights= function() {
    return [
        
        // Swiss Air
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:100, Child:90, Infant: 10, '#': 5, Currency: "CHF"},   
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:95, Child:85, Infant: 10, '#': 10, Currency: "EURO"},
        
        {From: "Zurich", To: "Paris", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:110, Child:95, Infant: 10, '#': 6, Currency: "CHF"},   
        {From: "Paris", To: "Zurich", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:100, Child:90, Infant: 10, '#': 8, Currency: "EURO"},
           
        // Lufthansa
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/lufthansa.png", value:"Lufthansa"}, Adult:80, Child:70, Infant: 10, '#': 2, Currency: "CHF"},
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/lufthansa.png", value:"Lufthansa"}, Adult:75, Child:65, Infant: 10, '#': 4, Currency: "EURO"},
           
        // Air France   
        {From: "Zurich", To: "Paris", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:90, Child:85, Infant: 10, '#': 8, Currency: "CHF"},
        {From: "Paris", To: "Zurich", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:85, Child:80, Infant: 10, '#': 5, Currency: "EURO"},
        
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:95, Child:80, Infant: 10, '#': 3, Currency: "CHF"},
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:90, Child:85, Infant: 10, '#': 3, Currency: "EURO"},
           
        // Austrian   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/austrian.png", value:"Austrian Airlines"}, Adult:85, Child:75, Infant: 10, '#': 1, Currency: "CHF"},   
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/austrian.png", value:"Austrian Airlines"}, Adult:80, Child:70, Infant: 10, '#': 1, Currency: "EURO"},
        
        // Aegean   
        {From: "Zurich", To: "Venice", Airlines: {iconUrl: "/images/aegean.png", value:"Aegean Airlines"}, Adult:75, Child:65, Infant: 5, '#': 5, Currency: "CHF"},   
        {From: "Venice", To: "Zurich", Airlines: {iconUrl: "/images/aegean.png", value:"Aegean Airlines"}, Adult:70, Child:60, Infant: 5, '#': 4, Currency: "EURO"}   
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
        {country: "France", city: "Nice"},
        
        //Italy
        {country: "Italy", city: "Venice"},   
        {country: "Italy", city: "Rome"} 
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