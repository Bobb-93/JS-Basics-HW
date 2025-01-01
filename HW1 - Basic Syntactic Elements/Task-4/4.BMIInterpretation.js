let height = 1.91;
let weight = 125;

//първи начин
//let BMI = weight/(height*height);

//втори начин
// let BMI = weight/(height**2); 

// но можем и без скоби заради приоритета на операциите
let BMI = weight/height**2;

console.log(`Your BMI is: ${BMI}`);

if(BMI < 16){
    console.log(`Тежко недохранване!`);
} else if(BMI >= 16 && BMI < 17){
    console.log(`Средно недохранване!`);
} else if(BMI >= 17 && BMI < 18.5){
    console.log(`Леко недохранване!`);
} else if(BMI >= 18.5 && BMI < 25){
    console.log(`Нормално тегло!`);
} else if(BMI >= 25 && BMI < 30){
    console.log(`Предзатлъстяване!`);
} else if(BMI >= 30 && BMI < 35){
    console.log(`Затлъстяване I степен!`);
} else if(BMI >= 35 && BMI < 40){
    console.log(`Затлъстяване II степен!`);
} else if(BMI >= 40){
    console.log(`Затлъстяване III степен!`);
} 

