var li3Node = document.querySelector("main>ul>li:nth-child(3)");
console.dir(li3Node);
li3Node.style.color = "red";

// ************************************
// Задача: поставете един бутон в HTML-a и променете програмата, така че li елемента (<li>Am I green or am I red?</li>) да променя цвета на шрифта си от 
// червен към зелен при всяко натискане на бутона
// ************************************
const changeLiColor = document.getElementById("change-li-color");

changeLiColor.addEventListener("click", function(){
    
    if(li3Node.style.color === "red"){
        li3Node.style.color = "green";
    } else{
        li3Node.style.color = "red";
    }

});
