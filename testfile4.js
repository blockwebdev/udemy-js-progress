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
/*
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
*/

// Inheritance between "Classes": Constructor functions
/*
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName
        } and I study ${this.course}`);
};

const ruben = new Student('Ruben', 1980, 'Salesforce');
ruben.introduce();
ruben.calcAge();

console.log(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);
*/
////////////////////////////////////////////////////////////
// 219. Coding Challenge #3
/*
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accel = function () {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed}mph`);
};
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed}mph`)
};

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

// Where the magic happens, the secret sauce!
EV.prototype = Object.create(Car.prototype); 

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
};

EV.prototype.accel = function () {
    this.speed += 20;
    this.charge--;
    console.log(`This vehicle accelerated and is going ${
        this.speed}mph, with a charge of ${this.charge}%`);
};

EV.prototype.brake = function () {
    this.speed -= 10;
    this.charge--;
    console.log(`This vehicle braked and is now going ${
        this.speed}mph, with a charge of ${this.charge}%`);
};

const tesla = new EV("Tesla", 100, 23);
tesla.chargeBattery(100);
tesla.accel();
console.log("--------------");
tesla.brake();
*/
/////////////////////////////////////////////////////////////

// Inheritance between "Classes": ES6 Classes
/*
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else console.log(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
    // Static method
    static hey() {
        console.log('Hey there!');
    }
}

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // this always needs to happen first!!!!
        super(fullName, birthYear);
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.fullName
            } and I study ${this.course}`);
    }
    // this calcAge takes priority over PersonCl (Parent) calcAge
    calcAge() {
        console.log(`Im ${2037 - this.birthYear
            } years old, but as a student I feel ${
            2037 - this.birthYear + 10
            } years old!`);
    }
}

const louie = new StudentCl('Louie Anderson', 1980, 'CS');
louie.introduce();
console.log(`------------`)
louie.calcAge();
console.log(`------------`);
console.log(louie.age);

const bobby = new PersonCl('Bobby Fischer', 1986);
bobby.calcAge();
bobby.greet();
console.log(bobby.age);

const carlos = new StudentCl('Carlos', 1975, 'History');
*/
////////////////////////////////////////////////////////////
/*
class Account {
    // 1) Public fields (instanes)
    locale = navigator.language;
    // 2) Private fields (instances)
    #movements = [];
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // Protected property..
        this.#pin = pin;
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${
            owner
        }`);
    }
    // 3) Public methods
    // Public interface..
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    requestLoan(val) {
        // if (this.#approveLoan(val))
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved!`);
        }
    }
    static helper() {
        console.log('Helper!')
    }
    // Private methods
    // #approveLoan(val) {}
    _approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Jonas', 'ENG', 123);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();
// These wont work..
//console.log(acc1.#movements);
//console.log(acc1.#pin);
//console.log(acc1.#approveLoan(100));
*/
////////////////////////////////////////////////////////////

// 227. Coding Challenge #4

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}mph`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed}mph`);
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${
            this.speed}mph, with a charge of ${this.#charge}.`);
        return this;
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is braking at ${this.speed}mph.`);
    }
};

const rivian = new EVCl('Rivian', 120, 23);

console.log(rivian);
console.log(rivian
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(100)
);
console.log(rivian.speedUS);




