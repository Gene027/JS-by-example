
// window = interface used to talk to the web browser
//                   the DOM is a property of the window

const myButton = document.querySelector("#myButton");

//console.dir(window); //show window property
//console.log(window.innerWidth);  //width of window depending on shrink
//console.log(window.innerHeight);
//console.log(window.scrollX);      // scroll height for big window
//console.log(window.scrollY);

//console.log(window.location.href);     //my url
//window.location.href = "https://google.com";    //redirect to google
//console.log(window.location.hostname);        //my local ip address
//console.log(window.location.pathname);           // our html document

//myButton.addEventListener("click", () => window.open("https://google.com")); //click to redirect
//myButton.addEventListener("click", () => window.close());
//myButton.addEventListener("click", () => window.print());    //print current page

//window.alert("Hello!");
//window.confirm("Press OK to continue!"); //confirm a message
/*
let age = window.prompt("Enter your age");
if(age < 18){
    window.alert("You must be 18+ to visit this site");
    window.close();
}
*/