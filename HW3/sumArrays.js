// TASK: Да се дефинира функция, която приема 2 масива и връща масив, чиито елементи са сумата от елементите на двата масива (елемент по елемент).
function sumArrays(arrayOne, arrayTwo) {
    let arraySum = [];
    
    let elementOne;
    let elementTwo;

    //The sum of elementOne and elementTwo
    let elementSum;

    for (let i = 0; i < arrayOne.length; i++) {
        elementOne = arrayOne[i];
        elementTwo = arrayTwo[i];
        
        elementSum = elementOne + elementTwo;
        arraySum.push(elementSum);
    }

    return arraySum;
}
// YOUR CODE HERE

// TEST:
console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]
