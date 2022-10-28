
// The Date object is used to work with dates & times

let date = new Date();  //current date and time
//let date = new Date(0); //epic date
//let milisecSince1970 = Date.now();   // returns number of ms since jan 1, 1970 till now to mark the time for an instance
//let currentTime = date.getTime();    //will do the same things as above line
//let date = new Date(2023, 0, 1, 2, 3, 4, 5); // yr,month, day,hr,min,sec,milisec  NB jan is 0
//let date = new Date("January 1, 2023 00:00:00");
/*
let year = date.getFullYear();      //current year
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();   // 0 for sunday
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/
/*
date.setFullYear(2024); // mutate a property of current date
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/
date = date.toLocaleString(); //makes date appear readable
document.getElementById("myLabel").innerHTML = date;

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1; //jan is 0
    let day = date.getDate();

    return `${month}/${day}/${year}`
}
function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    //convert 24hrs to 12hrs 
    let amOrPm = hours >= 12 ? "pm" : "am";

    hours = (hours % 12) || 12;  //returns remainder after dividing by 12. 13 % 12 = 1
                                    //for 12 % 12 = 0, the or operator assigns it to 12

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}