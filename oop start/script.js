'use strict';
// OOP
const Person = function (fristName, birthYear) {
  this.fristName = fristName;
  this.birthYear = birthYear;
  // // never do this
  //   this.calcAge = function(){
  //     console.log(2037 - this.birthYear);
  //   };
};

const kemal = new Person('Kemal', 1999);
// console.log(kemal);
// New znacenje

// 1. New {} is created
// 2. function si callled , this = {}
// 3. {} linked to prototype
// 4. function automaticaly return {}

// const matilda = new Person('Matilda', 1994);
// const jack = new Person('Jack', 1975);
// console.log(jack, matilda);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

kemal.calcAge();
