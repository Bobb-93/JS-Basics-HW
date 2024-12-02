// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

// ---> YOUR CODE HERE <---

function findMaxEven(array){
    let maxEven = Number.MIN_VALUE;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element % 2 === 0 && element > maxEven){
            maxEven = element;
        }
    }

    return maxEven;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];

//Another test
//let numbers = [2, -4, 5, 3, 24, 0, 1]; // 24


let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);
