//DOM (Document Object Model) is an Application Programming Interface
//                       for changing contents of a page

//console.log(document); //shows document html
//console.dir(document); //list all properties of DOM
//console.log(document.URL); //display URL
//console.log(document.title); //display title of page. document.title = "Genecode"

//document.body.style.backgroundColor = "skyblue"; //change color of page background


/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/
/*
let fruits = document.getElementsByName("fruits");
fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value);
    }
})
*/
/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
*/
/*
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/
/*
let element = document.querySelector("[for]");  //"#myTitle" for id, ".desserts" for class, "[for]" selects first element with label 'for'
element.style.backgroundColor = "lightgreen";
*/
/*
let elements = document.querySelectorAll("[for]");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen";
})
*/