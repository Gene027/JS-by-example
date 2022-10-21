// function expression = function without a name (anonymous function)
//                                        avoid polluting the global scope with names
//                                        write it, then forget about it
// ------------ Example 1 ------------
const greeting = function(){
    console.log("hello");
}
greeting();
// ------------ Example 2 ------------
let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}

// arrow function expression = compact alternative to a traditional function expression
//      =>

const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));