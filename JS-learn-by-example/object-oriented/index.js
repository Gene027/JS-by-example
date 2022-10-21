
// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
  ]);
  
  //store.get("t-shirt");  points to the integer value for t-shirt Map
  //store.set("hat", 40);
  //store.delete("hat");
  //console.log(store.has("underwear"));  has returns a bool of true if it finds arg
  //console.log(store.size);
  
  store.forEach((value, key) => console.log(`${key} $${value}`));
  
  
  //OBJECT
  // object = A group of properties and methods  #struct or enum
//                properties = what an object has  #fields of struct
//                methods = what an object can do   #The impl methods
//                use . to access properties/methods. 

const car1 = {
  model:"Mustang", //properties
  color:"red",
  year:2023,

  drive : function(){     //method
      console.log("You drive the car");
  },
  brake : function(){     //method
      console.log("You step on the brakes");
  }
}
const car2 = {
  model:"Corvette",
  color:"blue",
  year:2024,

  drive : function(){
      console.log(`You drive the car ${this.model}`); // this points to self.model
  },
  brake : function(){
      console.log("You step on the brakes");
  }
}

console.log(car1.model); //access properties of objects
car1.drive();

console.log(car2.color);
car2.brake();

//CLASS
// class = a blueprint for creating objects
//              define what properties and methods they have
//              use a constructor for unique properties

class Player{

  score = 0;

  pause(){
      console.log("You paused the game");
  }
  exit(){
      console.log("You exited the game");
  }
}

const player1 = new Player(); //new instance of Player
const player2 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();

//CONSTRUCTOR

// constructor = a special method of a class,
//                          accepts arguments and assigns properties

class Student{

  constructor(name, age, gpa){
      this.name = name;
      this.age = age; 
      this.gpa = gpa;
  }
  study(){ 
      console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);

console.log(student1.name);
student1.study();

console.log(student2.age);
student2.study();

//STATICS

// static = belongs only to the class, not the objects
//               properties: useful for caches, fixed-configuration
//               methods:    useful for utility functions

class Car{

  static numberOfCars = 0;    

  constructor(model){
      this.model = model;
      Car.numberOfCars += 1;     //increases number of cars on new entry
  }
  static startRace(){
      console.log("3...2...1...GO!"); // no car can authorize start on its own
  }
}

const car_1 = new Car("Mustang");
const car_2 = new Car("Corvette");
const car_3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();

//INHERITANCE
// inheritance = a child class can inherit all the 
//                        methods and properties from another class more like a Trait

class Animal{   // the trait and it belongs to all objects in the class

  alive = true;

  eat(){
      console.log(`This ${this.name} is eating`);
  }
  sleep(){
      console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{

  name = "rabbit";

  run(){
      console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal{

  name = "fish";

  swim(){
      console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal{

  name = "hawk";

  fly(){
      console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

//SUPER

// super = Refers to the parent class. 
//               Commonly used to invoke constructor of a parent class

class Animal{
    
  constructor(name, age){
      this.name = name;
      this.age = age;
  }
}
class Rabbit extends Animal{

  constructor(name, age, runSpeed){
      super(name, age); //invokes constructor from parent class Animal
      this.runSpeed = runSpeed;
  }
}
class Fish extends Animal{

  constructor(name, age, swimSpeed){
      super(name, age);
      this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal{

  constructor(name, age, flySpeed){
      super(name, age);
      this.flySpeed = flySpeed;
  }
}

const rabbit1 = new Rabbit("rabbit", 1, 40);
const fish1 = new Fish("fish", 2, 80);
const hawk1 = new Hawk("hawk", 3, 200);

console.log(rabbit1.name);
console.log(rabbit1.age);
console.log(rabbit1.runSpeed);

// PASSING OBJECT TO FUNCTION

class Car{

  constructor(model, year, color){
      this.model = model;
      this.year = year;
      this.color = color;
  }
}

const caR1 = new Car("Mustang", 2023, "red",);
const caR2 = new Car("Corvette", 2024, "blue");
const caR3 = new Car("Lambo", 2022, "yellow",);

changeColor(caR3, "gold");
displayInfo(caR3);

function displayInfo(car){
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}
function changeColor(car, color){
  car.color = color;
}