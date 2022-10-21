let username = "Praise";
let items = 3;
let total = 75;
//console.log(`Hello ${username}`);
//console.log(`you have ${items} items in your cart`);
//console.log(`Your total is $${total}`);
let text = 
`Hello ${username}<br>
you have ${items} items in your cart<br>
Your total is $${total}<br>`;
//console.log(text);
document.getElementById("myLabel").innerHTML = text;