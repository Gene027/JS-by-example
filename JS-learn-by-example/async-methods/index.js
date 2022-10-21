//asynchronous = out of sequence and doesnt follow step by step


// setTimeout() = invokes a function after a number of milliseconds            
//                            asynchronous function (doesn't pause execution of program) 

let item = "cryptocurrency";
let price = 420.69;

let timer1 = setTimeout(firstMessage, 3000, item, price); // this method accepts args to the fn passed too and executes it accoring to time decleared
let timer2 = setTimeout(secondMessage, 6000);     // invokes secondMessage after 6s and binds to timer2
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price){
    alert(`Buy this ${item} for $${price}`);
}
function secondMessage(){
    alert(`This is not a scam!`);
}
function thirdMessage(){
    alert(`DO ITT!`);
}
document.getElementById("myButton").onclick = function(){ //once you click buy, all other timer will clear
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Thanks for buying <3`);
}


// setInterval() = invokes a function repeatedly after no. of milliseconds
//                          asynchronous function (doesn't pause execution) 

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000); //repeats countUp fn at interval of 1s

function countUp(){
    count+=1;
    console.log(count); 
    if(count >= max){
        clearInterval(myTimer);
    }
}

//PROMISE
// promise = object that encapsulates the result of an asynchronous operation
//                   let asynchronous methods return values like synchronous methods
//         

//          promise has either the STATE 'pending' then: 'fulfilled' or 'rejected'
//           the RESULT is what can be returned
//           2 parts producing & consuming

// ------------- Example 1 -------------
const promise = new Promise((resolve, reject) => {
 
    //producing code
    let fileLoaded = false;
 
    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});
 
//consuming code
promise.then(value => console.log(value))  //resolve arm
              .catch(error => console.log(error));  //reject arm

// ------------- Example 2 -------------
/*
const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);                  //will do resolve after 'time' duration
});

wait(3000).then(() => console.log("Thanks for waiting!"));
*/

//  ASYNC
