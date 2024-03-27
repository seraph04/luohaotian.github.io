let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("what is your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Welcome " + myName;
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Welcome " + storedName;
}
myButton.onclick = function () {
    setUserName();
};
myButton.onclick = function () {
    setUserName();
};
