
// get = binds an object property to a function 
//          when that property is accessed
// set = binds an object property to a function
//          when that property is assigned a value

//in form of associated functions used for data security

class Car{
    constructor(power){
        this._gas = 25;     //  "_" refers to a protected property
        this._power = power;
    }
    get power(){   //accessing power property invokes this function
        return `${this._power}hp`;  //automatically adds "hp" whenever u use _power #impl for fetching data in a structured way
    }
    get gas(){   
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas(value){    //associated fn with rules for mutability of a class. mutating gas invokes this function
        if(value > 50){
            value = 50;       //limits tank going >50L
        }
        else if(value < 0){
            value = 0;       //limits tank going < 0L
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = 100;

console.log(car.power);
console.log(car.gas);