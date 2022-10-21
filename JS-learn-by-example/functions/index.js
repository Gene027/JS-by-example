/*let username = "Praise";
let age = 26;
happyBirthday();

function happyBirthday () {
    console.log("Happy birthay to you\nHappy birthay to you");
    console.log("Happy birthday dear\t",username,"\nHappy birthday to you");
    console.log("you are", age," years old");
} */

function area ( width, height) {
    let result = width * height;
    return result
} 

//CALL BACKS
sum(2, 3, displayConsole); //displayConsole function is now passed to sum as an arg "callBack", the fn takes result as arg and does its job

function sum(x, y, callBack){
  let result = x + y;
  callBack(result);
}

function displayConsole(output){
  console.log(output);
}

function displayDOM(output){
  document.getElementById("myLabel").innerHTML = output;
}

//FOREACH
//array.forEach() = executes a provided callback function
//                              once for each array element
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1); //element[0] is first letter of any element
}

function print(element){
    console.log(element);
}

//MAP

//array.map() = executes a provided callback function
//                         once for each array element
//                         AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

//numbers.forEach(print);
//squares.forEach(print);
//cubes.forEach(print);

function square(element){
    return Math.pow(element, 2);
}
function cube(element){
    return Math.pow(element, 3);
}
function print(element){
    console.log(element);
}

//FILTER METHOD
//array.filter() = creates a new array with all elements 
//                         that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}

//REDUCE METHOD
//array.reduce() = reduces an array to a single value            

let prices = [5, 10, 15, 20, 25, 30];
let total = prices.reduce(checkOut);

console.log(`The total is: $${total}`);

function checkOut(total, element){
    return total + element;
}

//SORTING ARRAYS 
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y){
    return y - x;
}
function ascendingSort(x, y){
    return x - y;
}
function print(element){
    console.log(element);
}