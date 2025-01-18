/*
    You have to store the color selected by the user, so that next time when she enters the site, 
    her chosen colour would be set as page background colour.
    
    Implement the task with Local Storage.

*/

const bgChoiceSelect = document.querySelector(".bgChoice select");
const bgChoiceButton = document.querySelector(".bgChoice button");

bgChoiceButton.addEventListener("click", function(){
    let bgChoiceValue = bgChoiceSelect.value;
    //console.log(bgChoiceValue);

    //Set the current background color of the body
    document.body.style.backgroundColor = bgChoiceValue;

    //Set the local storage value
    localStorage.setItem("bgColor", bgChoiceValue);
});

//get cookie color
let getColor = localStorage.getItem("bgColor");

console.log(getColor);

if (getColor) {
    document.body.style.backgroundColor = getColor;
    bgChoiceSelect.value = getColor;
} else {
    document.body.style.backgroundColor = "#FFFFFF";
    bgChoiceSelect.value = "#FF0000";
}