//Array

const array = ["Lodash", "React", "Next", "Strapi", "Axios", "Typescript"]
console.log('Originál:', array);

const reversed = array.reverse();
console.log('Obráceně:', reversed);

array.sort();
console.log('Abecedně:', array);

//Object

const car = {Brand:"Skoda", Model:"Superb", Year:"2019"}
const Brand = car.Brand
const Model = car.Model
const Year = car.Year

console.log('Auto:', Brand, Model, Year)


//Generátor 

randomcislo = Math.floor(Math.random() * 556);
console.log('Nahodné číslo je: ' + randomcislo);
