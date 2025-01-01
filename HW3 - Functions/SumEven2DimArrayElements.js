// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

// ---> YOUR CODE HERE <---
function SumEven2DimArrayElements(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            const element = array[i][j];
            if(element % 2 === 0){
                sum += element;
            }
        }
        
    }
    return sum;
}

// TEST:
let arr = [
	[1,2,3],
	[4,5,6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12
