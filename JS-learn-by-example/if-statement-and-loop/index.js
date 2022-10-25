/*let age = 26;

if (age >= 18) {
    console.log("you are an adult");
}
else if (age < 0) {
    console.log("u are still an egg");
}
else {
    console.log("you are a child");
} */

document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked){
        console.log("you are subscribed");

    }
    else {
        console.log("you are not subscribed");
    }

    if (visaBtn.checked) {
        console.log("paying with visa card");
    }
    else if (mastercardBtn.checked) {
        console.log("paying with master card");
    }
    else if (paypalBtn.checked) {
        console.log("you are paying with paypal");
    }
    else {
        console.log("you must select a payment type");
    }
}

//USING SWITCH
let grade = 90;

//use switch (grade) to match on string instead of plenty if else
switch(true) {
     case grade >= 90:
        console.log("you did great!");
        break;
    case grade >= 80:
        console.log("you did good!");
        break;
    case grade >= 70:
        console.log("you did okay!");
        break;
    case grade >= 60:
         console.log("you did passed!");
        break;
    case grade < 60:
        console.log("you failed!");
        break;
    default:
        console.log(grade, "is not a school grade");                                            

}

// && short-circuit "and"
// ||  short-circuit "or"
// ! Not logical operator !valid => valid = false: "this is not valid"
// do { codes }while(condition)  => a do while loop

for (let i = 1; i <=20; i+=1) {

    if (i == 7){
        continue; // this skips at 7 and ignore count 7
    }
    if(i == 13) {
        break; //this breaks the loop at 13
    }
    console.log(i);
}