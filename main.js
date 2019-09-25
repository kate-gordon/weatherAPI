

const weatherWrapper = document.querySelector("#weatherWrapper");
const cityForm = document.querySelector("#cityForm");

const formButton = cityForm.querySelector("button");

formButton.addEventListener("click", function(e) {
    e.preventDefault();
});

function getFormData() {}

function addLocationName(name) {
    const locationName = document.createElement("p"); 
    locationName.innerHTML = `Location: ${name}`; 
    weatherWrapper.append(locationName);
}
        
function addTemp(temp) {
    const currentTemp = document.createElement("p");
    currentTemp.innerHTML = `Temperature: ${temp + '&#176'}`; 
    weatherWrapper.append(currentTemp);
}

function addConditions(conditions) {
    const conditionIcon = document.createElement("IMG");
    const iconCode = conditions; 
    const iconUrl =`http://openweathermap.org/img/w/${iconCode}.png`; 
    conditionIcon.setAttribute('src', iconUrl);
    weatherWrapper.append(conditionIcon); 
}

function addWind(windSpeed) {
    const currWind = document.createElement("p"); 
    currWind.innerHTML = `Current Wind Speed: ${windSpeed} mph`;
    weatherWrapper.append(currWind);
}

function addSunInfo(sunrise, sunset) {
    const sunSet = document.createElement("p"); 
    const sunRise = document.createElement("p"); 
    sunRise.innerHTML = `Sunrise: ${sunrise}`; 
    sunSet.innerHTML = `Sunset: ${sunset}`; 
    weatherWrapper.append(sunSet);
    weatherWrapper.append(sunRise); 
}

function addMap(lat, lon) {
    const ifrm = document.createElement('iframe'); 
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
    ifrm.setAttribute('src', mapUrl); 
    weatherWrapper.append(ifrm);
}

function getWeather(location) {
    const selectWrapper = document.querySelector("#selectWrapper")
    const categoryList = document.createElement("select"); 

    get(`https://api.openweathermap.org/data/2.5/weather?q=${location},US&units=imperial&appid=2f4580c1da2a1471787ee4c356181fd1`).then(function(response){
        addConditions(response.weather[0].icon); 
        addLocationName(response.name); 
        addMap(response.coord.lat, response.coord.lon); 
        addTemp(Math.round(response.main.temp));
        addWind(response.wind.speed);
        addSunInfo(moment.unix(response.sys.sunrise).format("MM/DD/YYYY h:mm A"), moment.unix(response.sys.sunset).format("MM/DD/YYYY h:mm A")); 
        
    })
    
    weatherWrapper.append(categoryList); 
    
}



getWeather("Atlanta"); 









    



