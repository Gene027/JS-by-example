document.getElementById("submitButton").onclick = function(){

    let temp;

    if(document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);    //parse string to num
        temp = toCelsius(temp);     //convert num to Celsius
        document.getElementById("tempLabel").innerHTML = temp + "°C"; //alt + 0176
    }
    else if(document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9); //F to Celsius
}

function toFahrenheit(temp){
    return temp * 9 / 5 + 32; //Celcius to F
}
