exports.columns= function() { 
return [
        "Airlines",
        "From",
        "To"
    ];
}

exports.flights= function() {
    return [
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:100, Child:90, Infant: 10},   
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/swiss.png", value:"Swiss Air"}, Adult:100, Child:90, Infant: 10},   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/lufthansa.png", value:"Lufthansa"}, Adult:80, Child:70, Infant: 10},   
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/lufthansa.png", value:"Lufthansa"}, Adult:80, Child:70, Infant: 10},   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:95, Child:80, Infant: 10},   
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/airfrance.png", value:"Air France"}, Adult:95, Child:80, Infant: 10},   
        {From: "Zurich", To: "Madrid", Airlines: {iconUrl: "/images/austrian.png", value:"Austrian Airlines"}, Adult:85, Child:75, Infant: 10},   
        {From: "Madrid", To: "Zurich", Airlines: {iconUrl: "/images/aegean.png", value:"Aegean Airlines"}, Adult:90, Child:80, Infant: 10}   
    ];
}