// cookie = a small text file stored on your computer used to remember information
//             about the user saved in name=value pairs.  it could save as temp database

//this is a default cookie set format
//document.cookie = "firstName=Praise; expires=sun, 1 January 2024 12:00:00 GMT; path=/";  

//CODES
const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000)); //getTime returns time in milisec 1000ms = 1s
    let expires = "expires=" + date.toUTCString();          //converts milisec to standard date
    document.cookie = `${name}=${value}; ${expires}; path=/`      //  path=/ is default path 
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}