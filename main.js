

const currLocation = document.getElementById("location"),
        currTemp = document.getElementById("temp"),
        wind = document.getElementById("windSpeed"),
        sunriseTime = document.getElementById("sunrise"),
        sunsetTime = document.getElementById("sunset"),
        currentIcon = document.getElementById("icon"); 

function currIcon(){   
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1') 
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        const iconCode = data.weather[0].icon; 
        const iconUrl =`http://openweathermap.org/img/w/${iconCode}.png`; 
        currentIcon.setAttribute("src", iconUrl);
    }); 
};    




function updateLocationName(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1') 
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        currLocation.innerHTML = "Location: " + data.name; 
    });
    
    
};
function updateWind(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1') 
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        wind.innerHTML = "Windspeed is " + data.wind.speed; 
    });
    
    
};
function updateTemp(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1') 
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        tempKel = data.main.temp 
        tempF = (((tempKel - 273.15)*9)/5) + 32;
        currTemp.innerHTML = "Temperature: " + Math.round(tempF); 
    });
    
    
};

function currSunrise(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1') 
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        rise = data.sys.sunrise
        // riseDate = Date.prototype.getDate(rise)
        riseTime = new Date(rise * 1000)
        sunriseTime.innerHTML = "Sunrise: " + riseTime; 
    });
    
    
};

function currSunset(){
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta,US&appid=2f4580c1da2a1471787ee4c356181fd1') 
    .then(function(response){
        return response.json(); 
    })
    .then(function(data){
        newTime = data.sys.sunset;
        converted = new Date(newTime * 1000);
        riseDay = converted.getDay();
        
        sunsetTime.innerHTML = "Sunset: " + riseDay; 
    });
    
    
};
currIcon()
updateWind();
updateTemp();
updateLocationName();
currSunrise(); 
currSunset();

