// "взимаме" необходимите DOM елементи:
let headerNode = document.getElementsByTagName("header")[0];
let bodyNode = document.body;

// функция, която променя стила на header, когато
// потребителя скролне вертикално повече от височината на хедъра:
function changeHeader() {
    // височината на header-a:
    let header_height = headerNode.clientHeight;
    console.log(`header_height=${header_height}`);

    // текушата позиция на вертикалния скрол:
    let topScroll = document.documentElement.scrollTop;
    console.log(`topScroll=${topScroll}`);

    // ако сме скролнали повече от височината на хедъра => променяме прозрачността му.
    if (topScroll > header_height) {
        headerNode.style.opacity = ".3";
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Задача за упражнение:
    // довършете функцията, така че когато потребителя се
    // върне в началото на страницата елементът (header)
    // да връща оригиналното си офомление
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    if(topScroll <= header_height){
        headerNode.style.opacity = "initial";
    }
}

// за да "прихванем" scroll върху целия прозорец:
window.addEventListener("scroll", changeHeader);