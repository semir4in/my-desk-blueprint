const idInput = document.getElementById("id-input");
const loginButton = document.getElementById("login-button");

function getUserName() {
    const receivedName = window.localStorage.getItem(USER_NAME_KEY);
    if (receivedName == null) {
        return USER_NAME_DEFAULT;
    }
    return receivedName;
}

function showUserName() {
    const userName = getUserName();
    const greetingSpan = document.getElementById("greeting-span");
    greetingSpan.innerText = `Hello, ${userName}!`;

    return userName;
}

function setUserName(newName) {
    window.localStorage.setItem(USER_NAME_KEY, newName);    
}

function hideLogin()
{
    document.getElementById("login-div").classList.add(HIDDEN_CLASS);
    document.getElementById("login-background-div").classList.add(HIDDEN_CLASS);
}

function onIdInputSubmit() {
    console.log("onLoginButtonSubmit!");
}

function onLoginButtonClick() {
    if (idInput.value.length == 0) {
        return;
    }
    console.log(idInput.value);
    setUserName(idInput.value);
    showUserName();

    hideLogin();
}

function setButtonFunction() {
    loginButton.addEventListener("click", onLoginButtonClick);
}

function loadUserName() {
    if (showUserName() != USER_NAME_DEFAULT) {
        hideLogin();
    }
}

function setClock() {
    const date = new Date();   
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const clockSpan = document.getElementById("clock-span");
    clockSpan.innerText = `${hours}:${minutes}:${seconds}`;    
}

