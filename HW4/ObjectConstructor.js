  // конструктор за обекти от тип Patient:
  function Patient( age, firstName, lastName ){
    this.age = age;
    this.firstName = firstName;
    this.lastName= lastName;

    // TODO: discuss why this is memory greedy:
    this.printAge = function(){
        console.log( this.firstName + " е на " + this.age + " години.");
    };	   
};

// създаване и използване на обектите:
var ivan = new Patient( 60, "Иван", "Иванов");
var petyr = new Patient( 74, "Петър", "Петров");

ivan.printAge();	
petyr.printAge();

// ЗАДАЧА: определяне на по-младия пациент:
// функцията връща true, ако patient1 е по-млад (използваме '<=') от patient2.
// в противен случй - връща false:
function isYounger( patient1, patient2 ){
    // ~~~~~~~~~~~~~~~~~~~~~~ //
  // --> your code here <-- //

    if(patient1.age <= patient2.age){
        return true;
    }
    return false;

  // ~~~~~~~~~~~~~~~~~~~~~~ //
}

if ( isYounger(ivan, petyr) ){
    console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
}else{
    console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
};