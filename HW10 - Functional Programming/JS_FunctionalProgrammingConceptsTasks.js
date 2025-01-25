/* -------------------------------------------------------------------------- */
/*                                    TASK1                                   */
/* -------------------------------------------------------------------------- */
// Given is the next Douglas Adams quote:
// "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools."
// Write Arrow function: filterWordsStartingWithLetter(sentence, letter) that
// filters words starting with a specific letter and returns them as array.
//
// Hint: split the string into array of words separated by spaces.


// YOUR CODE HERE

//Works with the exact letter:
// const filterWordsStartingWithLetter = (sentence, letter) =>
//      sentence.split(" ").filter(word => word.startsWith(letter));

//Works with Capital and small letters:
const filterWordsStartingWithLetter = (sentence, letter) =>
    sentence.toLowerCase().split(" ")
    .filter(word => word.startsWith(letter.toLowerCase()));

// GIVEN
const quote = "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools";

// TEST:
const filteredWords = filterWordsStartingWithLetter(quote, 't');
console.log(filteredWords);

// EXPECTED OUTPUT:
// [ 'that', 'trying', 'to', 'to', 'the' ]


/* -------------------------------------------------------------------------- */
/*                                    TASK2                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of numbers.
// Write Arrow function sumOfSquaredEvens() which will return the sum of the
// squared even numbers.
// Use only map|filter|reduce methods.


// YOUR CODE HERE:
const sumOfSquaredEvens = array => 
    array.filter(elem => elem % 2 === 0)
            .map(elem => elem*elem).reduce((acc, num) => acc + num);

// GIVEN
const arr = [1,2,3,4,5,6,7,8,9,10];

// // TEST
console.log(sumOfSquaredEvens(arr));

// EXPECTED OUTPUT:
// 220


/* -------------------------------------------------------------------------- */
/*                                    TASK3                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of city objects: cities.
// Write Arrow function findMinPopulationCityNamecode(cities), which will return
// the city name with minimum population.
// Use only map|filter|reduce and Math.min() methods


// YOUR CODE HERE

// const findMinPopulationCityName = cities => {

//     //find the population of the city with minimum population
//     let cityMinPopulation = cities.map(city => city.population).reduce((a,c)=>a>c?c:a);

//     //return the city name
//     return cities.filter(city => city.population === cityMinPopulation)[0].name;
// };

//it works...
const findMinPopulationCityName = cities => {

    //find the population of the city with minimum population
    let cityMinPopulation = cities
        .map(city => city.population).reduce((a,c)=>a>c?c:a);

    //return the city name
    return cities
        .filter(city => city.population === cityMinPopulation)[0].name;
};


// GIVEN
const cities = [
	{name: 'Sofia', population: 1_236_000},
	{name: 'Plovdiv', population: 343_424 },
	{name: 'Burgas', population: 202_766},
	{name: 'Varna', population: 202_766},
];

// // TEST:
const minCityName = findMinPopulationCityName(cities);
console.log( minCityName );

// EXPECTED OUTPUT:
// 'Burgas'


/* -------------------------------------------------------------------------- */
/*                                    TASK4                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of Todo objects.
// Write function invertTodoCompleted(todos, todoID), which inverts the
// 'completed' value of the todo item with the given 'todoID' and returns
// a new array of objects.
// Make sure not to modify the original array.
// Use only map|filter|reduce methods


// YOUR CODE HERE

const invertTodoCompleted = (todos, todoID) =>
{
    console.log(todoID);
    let newTodos;
    // let newTodos = todos
    //     .filter(todo=>todo.id===todoID);

    // let newTodos = todos.map(todo => todo.id===todoID ? {...todo, completed:!completed}:);
    return newTodos;
};

// GIVEN
const todos = [
    {
        "title": "Lean HTML",
        "completed": true,
        "id": 1
    },
    {
        "title": "Learn React",
        "completed": false,
        "id": 2
    }
];

const todoID = 2;

// // TEST:
const updatedTodos = invertTodoCompleted(todos, todoID);
console.log('Original todos: ', todos);
console.log('Updated todos: ', updatedTodos);

// EXPECTED OUTPUT:
// Original todos:  [
//     { title: 'Lean HTML', completed: true, id: 1 },
//     { title: 'Learn React', completed: false, id: 2 }
// ]
// Updated todos:  [
//     { title: 'Lean HTML', completed: true, id: 1 },
//     { title: 'Learn React', completed: true, id: 2 }
// ]


/* -------------------------------------------------------------------------- */
/*                                    TASK5                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of products objects.
// Implement calcTotalPriceByCategory(products, category) Arrow function,
// so that it will return the price sum of all products matching
// the given catgory.
// Use only map|filter|reduce methods.


// YOUR CODE HERE
//basic solution
// const calcTotalPriceByCategory = (products, category) =>
// {
//     let totalSum = products
//         .filter(product=>product.category===category)
//         .reduce((a, c) => a + c.price, 0);

//     return totalSum;
// };

const calcTotalPriceByCategory = (products, category) => products
            .filter(product=>product.category===category)
            .reduce((a, c) => a + c.price, 0);

// GIVEN
const products = [
    {
        code:1,
        name:"product1",
        category: "music",
        price:1
    },
    {
        code:2,
        name:"product2",
        category: "books",
        price:2
    },
    {
        code:3,
        name:"product3",
        category: "books",
        price:3
    },
    {
        code:4,
        name:"product4",
        category: "music",
        price:4
    }
]

// TEST
let totalPriceByCategory = calcTotalPriceByCategory(products,'music')
console.log(totalPriceByCategory);

// EXPECTED OUTPUT:
// 5


/* -------------------------------------------------------------------------- */
/*                                    TASK6                                   */
/* -------------------------------------------------------------------------- */
// Given is an array of library books objects.
// Write sortBooksByIdAndAuthor(books) Arrow function,
// so that it will return a new array with books sorted:
// 1. By their id in ascending order.
// 2. For books with the same id, by the title's name in alphabetical order.


// YOUR CODE HERE

// GIVEN
const books = [
    {
        id: 2,
        title: "Book A",
        author: "Charles Dickens",
    },
    {
        id: 1,
        title: "Book B",
        author: "Jane Austen",
    },
    {
        id: 2,
        title: "Book C",
        author: "Agatha Christie",
    },
    {
        id: 1,
        title: "Book D",
        author: "H.G. Wells",
    },
];

// TEST
// const sortedBooks = sortBooksByIdAndAuthor(books);
// console.log(sortedBooks);

// EXPECTED OUTPUT:
// [
//     { id: 1, title: 'Book B', author: 'Jane Austen' },
//     { id: 1, title: 'Book D', author: 'H.G. Wells' },
//     { id: 2, title: 'Book A', author: 'Charles Dickens' },
//     { id: 2, title: 'Book C', author: 'Agatha Christie' }
// ]