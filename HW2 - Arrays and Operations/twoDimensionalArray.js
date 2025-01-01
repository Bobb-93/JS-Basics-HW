let fruitsData = [
  ["apple", "orange", "cherry"],
  [1.2, 2.0, 3.5],
];

// TASK: log in console each fruit and its price

// YOUR CODE HERE

for (let j = 0; j < fruitsData[0].length; j++) {

  //console.log(`${fruitsData[0][j]} = ${(Math.round(fruitsData[1][j] * 100) / 100).toFixed(1)}`); //we don't need that

  console.log(`${fruitsData[0][j]} = ${fruitsData[1][j].toFixed(1)}`);

}

// EXPECTED OUTPUT:
// apple = 1.2,
// orange = 2.0,
// cherry = 3.5