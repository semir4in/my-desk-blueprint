// this.setButtonFunction();

this.setUserName();
this.setClock();
this.setInterval(this.setClock, 1000);

this.navigator.geolocation.getCurrentPosition(onGeoOkay, onGeoError);