
// add/change HTML elements
// .innerHTML (vulnerable to XSS attacks)
// .textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = window.prompt("Enter your name");
document.body.append(nameTag);

//const myList = document.querySelector("#fruit"); 
//const listItem = document.createElement("li");
//listItem.textContent = "mango";
//myList.append(listItem); // append a new item to fruits in the HTML
//myList.prepend(listItem); //place at first
//myList.insertBefore(listItem, myList.getElementsByTagName("li")[1]); // insert at a particular spot in list

//CHANGING CSS PROPEERTY

const title = document.getElementById("myTitle");

title.style.backgroundColor = "rgb(50, 200, 50)";  //backgroundColor
title.style.color = "rgb (50, 50, 250)"; //font color or "#22222" for hexadeximal color
//                                      google hex color picker for color mix value
title.style.fontFamily = "consolas"; // change font style
title.style.textAlign = "center"; //allign text to center
title.style.border = "2px solid"; //add solid border
//title.style.display = "none"; // this hides the title, "block" reveals it

//SHOW OR HIDE HTML elements
const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", () => {

    if(myImg.style.visibility == "hidden"){
        myImg.style.visibility = "visible";
    }
    else{
        myImg.style.visibility = "hidden";
    }
})
