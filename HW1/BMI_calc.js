let height = 1.91;
let weight = 125;

//първи начин
//let BMI = weight/(height*height);

//втори начин
// let BMI = weight/(height**2); 

// но можем и без скоби заради приоритета на операциите
let BMI = weight/height**2;

console.log(`BMI = ${BMI}`);
