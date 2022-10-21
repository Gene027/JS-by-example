
//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething; //does something if element change
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething; //hold click
element.onmouseup = doSomethingElse; //release click

function doSomething(){
    //alert("You did something!");
    element.style.backgroundColor = "red";
}
function doSomethingElse(){
    //alert("You did something!");
    element.style.backgroundColor = "lightgreen";
}

//ADD EVENT LISTENER

// .addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue); //type=> window action, listener => function response
outerDiv.addEventListener("click", changeBlue, true); //option implies which element is prefered to do smtn first

function changeBlue(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue"  //this here implies whatever the method operates on
}