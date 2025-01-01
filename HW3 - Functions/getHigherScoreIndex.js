// GIVEN:
let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

// ---> YOUR CODE HERE <---
function getHighestScoreIndex(array) {
    let maxIndex = 0;
    let maxElement = array[0];

    for (let i = 1; i < array.length; i++) {

        const element = array[i];
        //console.log(element);
        
        if(element > maxElement){
            maxElement = element;
            maxIndex = i;
        }
        
    }

    return maxIndex;
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:
let highestScoreIndex = getHighestScoreIndex(scores);
console.log(`${students[highestScoreIndex]} has the highest score: ${scores[highestScoreIndex]}`);

// ---> YOUR CODE HERE <---

// expected output
// Maria has the higest score: 6


