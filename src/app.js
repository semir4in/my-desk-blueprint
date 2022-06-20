setButtonFunction();
loadUserName();

showUserName();
setClock();
setInterval(setClock, 1000);

navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);