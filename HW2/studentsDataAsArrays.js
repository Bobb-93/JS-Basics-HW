/*
<h1>Modeling person(student) data as arrays</h1>
<p><b>TASK</b>: try to understand how the code really works, and make the task, given at the end of JS part, without looking at the example code.</p>
*/

// store students data as array of arrays:
let students = [
    ["male",24,"Ivan","Ivanov"],
    ["female",22,"Maria","Petrova"],
    ["male",18,"Georgi","Georgiev"],
    ["male",21,"Nikolai","Nikolov"]
];
//////////////////// EXAMPLE ////////////////////
// print in console the youngest student names: /
/////////////////////////////////////////////////

// inititalize minAge with first student age:
let minAge = students[0][1];

// variable to store youngest student data:
let youngestStudent;

for (let i = 0; i < students.length; i++) {
    const studentAge = students[i][1];

    if( studentAge <= minAge){
        minAge = studentAge;
        youngestStudent = students[i];
    }
}

console.log(`The youngest student is ${youngestStudent[2]} ${youngestStudent[3]}. He is ${youngestStudent[1]} years old.`);


////////////////////  TASK  ////////////////////
// print in console the oldest student names:  /
////////////////////////////////////////////////
// your code goes here:

let maxAge = students[0][1];
let oldestStudent;

for (let i = 0; i < students.length; i++) {
    const studentAge = students[i][1];
    
    if(studentAge >= maxAge){
        maxAge = studentAge;
        oldestStudent = students[i];
    }
}

console.log(`The oldest student is ${oldestStudent[2]} ${oldestStudent[3]}. He is ${maxAge} years old.`);

// Expexted output:
//The oldest student is Ivan Ivanov. He is 24 years old.