let age;
age = 26;
// or use let age = 26;
//also supports shadowing=> age = age + 1;

age += 1; // augumented assignment: add 1 and sets age to 27 
//Js obeys BODMAS

//constants
const PI = 3.14159; //doesnt change

let first_name = "Praise";
full_name = first_name + " Anosike";
let valid = true;

console.log("Hello", first_name);

document.getElementById("p1").innerHTML = "Hello " + first_name; // pushes data to Html
document.getElementById("p2").innerHTML = "Your full name is " + first_name;

// get element by pop up
let username = window.prompt("whats your name"); //accept username input on webpage as pop up

//get element by filling and submit
let username_2;
document.getElementById("myButton").onclick = function(){

    username_2 = document.getElementById("myText").value; // gets from html
    //on clicking button, take anything in myText and assign to username_2
}

// VARIABLE SCOPE
 // let variables cannot escape a block scope {}
 // var variables can escapea a block scope but not a function