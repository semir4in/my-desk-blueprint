// function onLoginButtonSubmit(event) {

// }

// function setButtonFunction() {
//     const loginButton = this.document.getElementById("login-button");
//     loginButton.addEventListener("submit", onLoginButtonSubmit);
// }

function getUserName() {
    const receivedName = this.localStorage.getItem("userName");
    if (receivedName == null) return "Guest";
    return receivedName;
}

function setUserName() {
    const userName = this.getUserName();
    const greetingSpan = this.document.getElementById("greeting-span");
    greetingSpan.innerText = `Hello, ${userName}!`;
}

function setClock() {
    const date = new Date();   
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const clockSpan = this.document.getElementById("clock-span");
    clockSpan.innerText = `${hours}:${minutes}:${seconds}`;    
}

