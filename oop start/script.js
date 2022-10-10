'use strict';
// // OOP
// const Person = function (fristName, birthYear) {
//   this.fristName = fristName;
//   this.birthYear = birthYear;
//   // // never do this
//   //   this.calcAge = function(){
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const kemal = new Person('Kemal', 1999);
// console.log(kemal);
// // New znacenje

// // 1. New {} is created
// // 2. function si callled , this = {}
// // 3. {} linked to prototype
// // 4. function automaticaly return {}

// // const matilda = new Person('Matilda', 1994);
// // const jack = new Person('Jack', 1975);
// // console.log(jack, matilda);

// // Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const arr = [1, 2, 3, 3, 4, 5, 5, 6];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// kemal.calcAge();

// // coding challeng 1
// // Your tasks:
// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// // 'speed' property. The 'speed' property is the current speed of the car in
// // km/h
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// // and log the new speed to the console
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// // the new speed to the console
// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// // 'brake' multiple times on each of them
// // Test data:
// // § Data car 1: 'BMW' going at 120 km/h
// // § Data car 2: 'Mercedes' going at 95 km/h
// console.clear();
// // const Car = function (brand, speed) {
// //   this.brand = brand;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.brand} is going at ${this.speed} km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.brand} is going at ${this.speed} km/h`);
// // };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// console.log(car1.accelerate());
// console.log(car1.brake());
// console.log(car1.accelerate());

// // class expression
// // const PersonCl = class {};
// // class delcaration
// class PersonCl {
//   constructor(fullName, godine) {
//     this.fullName = fullName;
//     this.godine = godine;
//   }
//   // Metoda ce biti dodaata .prototype property
//   calcAge() {
//     return 2037 - this.godine;
//   }
//   set fullName(name) {
//     if (name.length > 3) return (this._fullName = name);
//   }
//   get fullName() {
//     return this._fullName;
//   }
// }
// const legi = new PersonCl('Kemal Kujovic', 1999);
// console.log(legi);
// // console.log(legi.calcAge());

// // const account = {
// //   name: 'Kemal',
// //   novac: [100, 300, 200, 300],
// //   get latest() {
// //     return this.novac.slice(-1).pop();
// //   },
// //   set latest(mov) {
// //     return this.novac.push(mov);
// //   },
// // };

// // console.log(account.latest);
// // account.latest = 50;
// // console.log(account.latest);
// // console.log(account.novac);
// console.clear();
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(fristName, birthYear) {
//     this.fristName = fristName;
//     this.birthYear = birthYear;
//   },
// };

// const kemal1 = Object.create(PersonProto);
// kemal1.ime = 'Kemal';
// kemal1.birthYear = 1999;
// kemal1.calcAge();

// const fuad = Object.create(PersonProto);
// fuad.init('fuad', 1993);
// fuad.calcAge();

// // // coding challeng 2
// // Your tasks:
// // 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// // by 1.6)
// // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// // converts it to km/h before storing the value, by multiplying the input by 1.6)
// // 4. Create a new car and experiment with the 'accelerate' and 'brake'
// // methods, and with the getter and setter.
// // Test data:
// // § Data car 1: 'Ford' going at 120 km/

// class Auto {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.brand} is going at ${this.speed} km/h`);
//   }

//   minus() {
//     this.speed -= 5;
//     console.log(`${this.brand} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// const ford = new Auto('Ford', 120);
// ford.speedUS = 50;
// console.log(ford);

// const Student = function (fristName, birthYear, course) {
//   this.fristName = fristName;
//   this.birthYear = birthYear;
//   this.course = course;
// };
// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.fristName} nad i study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Cumputer Science');

// coding challeng 3

// const Car = function (brand, speed) {
//   this.brand = brand;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.brand} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.brand} is going at ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // link the prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} is going at ${this.speed}`);
// };
// const tesla = new EV('tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}
class Student extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Alwayes need to happen first!
    super(fullName, birthYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName}`);
  }
}

const martha = new Student('Martha Jones', 2012, 'It');
console.log(martha);
martha.introduce();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(fristName, birthYear) {
    this.fristName = fristName;
    this.birthYear = birthYear;
  },
};
const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (fristName, birthYear, course) {
  PersonProto.init.call(this, fristName, birthYear);
  this.course = course;
};
StudentProto.introduce = function () {
  console.log(`My name is ${this.fristName}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'IT');
jay.introduce();
jay.calcAge();
//Public fields
// private fields
// public methods
// private methods
// (there is also the static version)
class Account {
  // 1) Public fields
  locale = navigator.language;

  // 2) Private fields
  #movments = [];
  #pin;

  // 3) Public methods
  // kao sto su uvek

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected proprty
    // this._movments = [];
    // this.local = navigator.language;

    console.log(`thanks for opening an account, ${owner}`);
  }
  // Public interface
  getMovements() {
    return this.#movments;
  }
  deposit(val) {
    this.#movments.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
  // radi samo na Account kad se pozove
  static helper() {
    console.log(`Helper`);
  }
  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}
const acc1 = new Account('Kemal', 'EUR', 1111);
console.log(acc1);

// acc1._movments.push(250);
// acc1._movments.push(-150);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1.getMovements());
// console.log(acc1.pin);
// console.log(acc1.#movments);
// console.log(acc1.#pin);
Account.helper();
