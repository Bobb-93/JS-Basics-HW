/*
    You have to store the color selected by the user, so that next time when she enters the site, 
    her chosen colour would be set as page background colour.
    
    Implement the task with cookies.

*/

const bgChoiceSelect = document.querySelector(".bgChoice select");
const bgChoiceButton = document.querySelector(".bgChoice button");

bgChoiceButton.addEventListener("click", function () {
    let bgChoiceValue = bgChoiceSelect.value;
    //console.log(bgChoiceValue);

    //Set the current background color of the body
    document.body.style.backgroundColor = bgChoiceValue;

    //Set the cookie value
    document.cookie = `bgColor=${bgChoiceValue}; path=/`;
    console.log(document.cookie);

});

console.log(document.cookie);

//get cookie color
let selectedColor = document.cookie
    .split("; ")
    .find((row) => row.startsWith("bgColor="))
    ?.split("=")[1];

console.log(selectedColor);

if (selectedColor) {
    document.body.style.backgroundColor = selectedColor;
    bgChoiceSelect.value = selectedColor;
} else {
    document.body.style.backgroundColor = "#FFFFFF";
    bgChoiceSelect.value = "#FF0000";
}