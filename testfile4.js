// Function constructor //////////////////////////////////
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accel = function () {
    this.speed += 10;
    console.log(`The ${this.make} is at ${this.speed}`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`The ${this.make} is at ${this.speed}`)
};


const bmw = new Car('bmw', 120);
const mercedes = new Car('mercedes', 95);


bmw.accel();
bmw.accel();
bmw.accel();
bmw.brake();
*/

// Class declaration   ///////////////////////////////////////
/*
1. Classes are NOT Hoisted.
2. Classes are first class citizens.
3. Classes are executed in strict mode.
*/
/*
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(`${this.firstName} is ${2037 - this.birthYear} years old.`);
    }
    /* Person.Cl.prototype.greet = function() {
        console.log(`Hey ${this.firstName}!`);
    } 
    we use the following instead...
    */
   /*
    greet() {
        console.log(`Hey ${this.firstName}!`)
    }
}
const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
jessica.greet();
*/
///////////////////////////////////////////////////////
// Challenge 2 from 217.

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS() {
        return `The ${this.make} is going ${this.speed / 1.6}mph`;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}
const honda = new Car('honda', 120);
console.log(honda);
console.log(honda.speedUS);
honda.speedUS = 50;
console.log(honda.speedUS);
console.log(honda);

