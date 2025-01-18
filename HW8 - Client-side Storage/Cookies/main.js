/*
    You have to store the color selected by the user, so that next time when she enters the site, 
    her chosen colour would be set as page background colour.
    
    Implement the task with cookies.

*/

const bgChoiceSelect = document.querySelector(".bgChoice select");
const bgChoiceButton = document.querySelector(".bgChoice button");

bgChoiceButton.addEventListener("click", function(){
    let bgChoiceValue = bgChoiceSelect.value;
    //console.log(bgChoiceValue);

    //Set the current background color of the body
    document.body.style.backgroundColor = bgChoiceValue;

    //Set the cookie value
    document.cookie = `bgColor=${bgChoiceValue}`;

});

let backgroundColorCookie = document.cookie;
console.log(backgroundColorCookie);

//Get the cookie value
let cookieColor = backgroundColorCookie.substring(8);

if(cookieColor){
    document.body.style.backgroundColor = cookieColor;
    bgChoiceSelect.value = cookieColor;
} else{
    document.body.style.backgroundColor = "#FFFFFF";
}