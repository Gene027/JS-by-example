let fruits = ["apple", "orange", "banana"]; //array of fruits


fruits[2] = "coconut"; // this reassign index array fruit at index 2 which is banana, to coconut

fruits.push("lemon");      //add an element
fruits.pop();                     //removes last element
fruits.unshift("mango"); //add element to beginning of array
fruits.shift();                   //removes element from beginning
let length = fruits.length;
let index = fruits.indexOf("apple");


//ITERATE OVER ARRAY
let prices = [5, 10, 15, 20, 25];

for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}

for(let i of prices){  //of is used to iterate over values while 'in' is used for enumerable propeties i.e 1, 2, 3
    console.log(i); // prints element in array method 2
}

let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort(); // sort in alphabethical order
//fruits = fruits.sort().reverse(); //sorts in reverse from Z

for(let fruit of fruits){
    console.log(fruit); // for fruit in fruits, print fruit 
}

//2D ARRAY
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =  ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats]; //array of array

groceryList[2][2] = "steak"; // replace groceryList[2] => meats[2] with "steak"

for(let list of groceryList){
    for(let food of list){
        console.log(food);
    }
}

//SPREAD OPERATOR
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers); // The ... is used to iterate over individual elements
console.log(maximum);


let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2); // class1 now contains class2 elements instead of 2D array
console.log(...class1);

//REST PARAMETERS
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers){ // ...numbers builds an array to accept any number of aegs to function
    let total = 0;
    for(let number of numbers){
        total += number
    }
    return total
}

//SHUFFLING ARRAYS
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

shuffle(cards);

console.log(cards);
//console.log(cards[0]);
//cards.forEach(card => console.log(card));

function shuffle(array){
  let currentIndex = array.length;

  while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random() * array.length); //generates random index from 1 till card length
    currentIndex-=1; // ensures one random index for each element

    let temp = array[currentIndex]; // saves current index to be swapped to avoid loss of data
    array[currentIndex] = array[randomIndex]; // reassign array[i] to array[randomIndex] aka swaps; randomIndex now appear twice in array
    array[randomIndex] = temp; //reassign randomIndex to the temp that was just swapped; randomIndex now appear once
  }
  
  return array;
}
