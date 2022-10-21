//console.time() = Starts a timer you can use to 
//                               track how long an operation takes synchronously
//                              Give each timer a unique name.
//              you can use it totrack how long it took someone to do smtn on web
//start
console.time("Response time");

alert("CLICK THE OK BUTTON!");     //sync method, delay noted
//setTimeout(() => console.log("HELLO!"), 3000);  //async method delay not noted

//end
console.timeEnd("Response time");