function checkAge(age) {
    return age >= 18 ? true : false; //if age >= 18 return true, else false
}

function checkAdult(adult) {
    adult ? console.log("You are an adult") : console.log("Boy grow up!");
}

let adult = checkAge(21); //passed 21 to checkAge function
console.log(adult);
checkAdult(adult);
