// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
class Person{
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
         this.firstName=firstName;
         this.lastName=lastName;
         this.favoriteColor=lastName;
         this.favoriteNumber=favoriteNumber;
         this.family=[];
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    addToFamily(person){
        if(person instanceof Person && this.family.indexOf(person)===-1){
            this.family.push(person);
        }
        return this.family.length;
    }
}

/* 2 - Add an instance method called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/

// 3 -  Add a property on the object created from the Person function called family which is an empty array.

/* 4 - Add a instance method called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.

Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/






// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        return "VROOM!";
    }
    toString() {
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 2;
    }
}

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model, and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle prototype



// 1 - Create a class for for a Vehicle. Each vehicle should have a make, model and year property.
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        return "VROOM!";
    }
    toString() {
        return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.numWheels = 2;
    }
}

// 2 - Add an instance method called start which returns the string "VROOM!"

// 3 - Add an instance method called toString which returns the string "The make, model, and year are" concatenated with the make, 
//model and year property

/* Examples 
    var vehicle = new Vehicle("Tractor", "John Deere", 1999)
    vehicle.toString() // 'The make, model, and year are Tractor John Deere 1999'
*/

// 4 - Create a class for a Car. Each object created from the Car function should also have a make, model, and year and 
//a property called numWheels which should be 4. The Car prototype should inherit all of the methods from the Vehicle prototype

// 5 - Create a class for a Motorcycle. Each object created from the Motorcycle function should also have a make, model,
//and year and a property called numWheels which should be 2. The Motorcycle prototype should inherit all of the methods from the Vehicle
// prototype