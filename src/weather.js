function onGeoOkay(position) {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;    
    const url = `https://weatherdbi.herokuapp.com/data/weather/${latitude},${longitude}`;
    
    
    fetch(url).then(response => response.json()).then(data => {
        const weatherSpan = document.getElementById("weather-a1");

        // const cityName = data.name;
        // const weatherName = data.weather[0].main;
        // const tempature = data.main.temp;
        // weatherSpan.innerText = `${cityName} with ${weatherName}, ${tempature}˚C`;

        const region = data.region;
        const weatherComment = data.currentConditions.comment;
        const tempature = data.currentConditions.temp.c;

        weatherSpan.innerText = `${region} with ${weatherComment}, ${tempature}˚C`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);
