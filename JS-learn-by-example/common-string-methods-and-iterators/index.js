let username ="Praise Anosyk";
let csv = "bread, fish, meat, rice, soup";

let len = username.length;
let firstletter = username.charAt(0);
let index_of = username.indexOf("A");
let last_index = username.lastIndexOf("s");
let trimmed = username.trim(); //trim whitespaces
let upper = username.toUpperCase();
//let formatted_csv = csv.replaceAll(",", "-"); //replaces all comma with dash 

let firstname = username.slice(0, 6); // last char not inclusive
let firstname_1 = username.slice(0, username.indexOf(" ")); //auto split at space
let lastName = username.substring(firstname.length + 1);   //returns everything after the firstname and the space
let lastname = username.slice(7); // takes from char 7 to the end
let lastname_2 = username.slice(username.indexOf(" ") + 1); //index of space + 1 = index of A

let my_num = 123456.789;
my_num = my_num.toLocaleString("en-US"); // this formats number as 123,456.789
my_currency = my_num.toLocaleString("en-US", {style: "currency", currency: "USD"}); 
myPercent = my_num.toLocaleString (undefined, {style: "percent"}); // formats to percentage
myKm = my_num.toLocaleString (undefined, {style: "unit", unit: "kilometers"});