function onGeoOkay(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`;  
    
    fetch(url).then(response => response.json()).then(data => {
        const cityName = data.name;
        const weatherName = data.weather[0].main;
        const tempature = data.main.temp;

        const weatherSpan = document.getElementById("weather-span");
        weatherSpan.innerText = `${cityName} with ${weatherName}, ${tempature}˚C`;
    });
}

function onGeoError() {
    const weatherSpan = document.getElementById("weather-span");
    weatherSpan.innerText = "unknown place. please give me your location";
}

