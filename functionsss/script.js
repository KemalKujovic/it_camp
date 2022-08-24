'use strict';

///////////////////////////////////////
// Functions Accepting Callback Functions
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
//   };

//   const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
//   };

//   // Higher-order function
//   const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
//   };

//   transformer('JavaScript is the best!', upperFirstWord);
//   transformer('JavaScript is the best!', oneWord);

//   // JS uses callbacks all the time
//   const high5 = function () {
//     console.log('👋');
//   };
//   document.body.addEventListener('click', high5);
//   ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperWord = function(str){
//     const [frist, ...second] = str.split(' ');
//     return [frist.toUpperCase(), ...second].join(' ');
// }

// const transform = function(str, func){
//     console.log(`Original tekst: ${str}`);
//     console.log(`Original tekst: ${func(str)}`);

// }

// transform('JavaScript je najbolja!', oneWord)
// console.log('----------');
// transform('javaScript je najbolja!', upperWord)

// const greet = ((greeting) => {
//     return function(second){
//         console.log(`${greeting} ${second}`);
//     }
// })

// const noviG = greet('Ime:');
// noviG('Kemal');
// noviG('Fuad');
// noviG('Suad');

// greet('Kemal')('Kujovic');

const airPlane = {
  airline: 'LuftHans',
  iataCode: 'LH',
  bookings: [],
  book(name, flightNumber) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNumber}`, name });
  },
};

console.log(airPlane);
airPlane.book('Kemal', 635);
airPlane.book('Edin', 2145);

const euroWings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = airPlane.book;

// call method
book.call(euroWings, 'Kemal', 23);

const swis = {
  airline: 'Frankfurt',
  iataCode: 'GE',
  bookings: [],
};

book.call(swis, 'Edin', 44);
console.log(swis);

const flightDate = ['Kemall', 2444];
book.call(swis, ...flightDate);

// book.call(euroWings, 'Kemal', 23);

const bookWe = book.bind(euroWings);

bookWe('Amina', 555);
const bookWe25 = book.bind(euroWings, 'Kemal');
bookWe25(777);

airPlane.plane = 300;
airPlane.buyPlane = function () {
  this.plane++;
  console.log(this.plane);
  console.log(this);
};

document.body
  .querySelector('.buy')
  .addEventListener('click', airPlane.buyPlane.bind(airPlane));

// const addTaxx = (rate) => (value) => console.log(value + value * rate);
// addTaxx(200)(3);

const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const prvi = function(rate){
//     return function(drugi){
//         return drugi + drugi * rate;
//     }
// }
// const drugi = prvi(2);
// console.log(drugi(7));

// const addVax = addTax.bind(null, 200);
// console.log(addVax(3));

const poll = {
  question: 'What is your favorite programirng langunge',
  options: ['0: JavaScript', '1: C++', '2: Python', '3: Rust'],
  answers: new Array(4).fill(0),
  registerNewAnswer(){
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++
this.displayResults();
this.displayResults('string');
    
},
displayResults(type = 'array'){
    if(type === 'array'){
        console.log(this.answers);
    }else if(type === 'string'){
        console.log(`Poll results its ${this.answers.join(', ')}`);
    }
}
};

// const newRegister = poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))



// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation


// const parentArray = [1,2, [5,6]];

// for(var i = 0; i < prvi.length; i++){
//   for(var i = 0; i < prvi[i].length; i++){

//       console.log(prvi[i]);
//   }
// }

// let items = parentArray.toString().split(",");
// for(var i=0,j=parentArray.length;i<j;i++)
//     console.log(parentArray[i].toString());

  const boardPassengers = function(n, wait){
    // clouser scope ide prvo nego global
    const perGroup = n / 3;

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups each with  ${perGroup} passengers`);

    }, wait * 1000)

    console.log(`will start boarding in ${wait} seconds`);
  }
  // ako nema clouser onda ide posle na global, clouser ima prednost 
  // const perGroup = 1000;
  boardPassengers(180, 5);



//   This is more of a thinking challenge than a coding challenge �
// Your tasks:
// 1. Take the IIFE below and at the end of the function, attach an event listener that 
// changes the color of the selected h1 element ('header') to blue, each time 
// the body element is clicked. Do not select the h1 element again!
// 2. And now explain to yourself (or someone around you) why this worked! Take all 
// the time you need. Think about when exactly the callback function is executed, 
// and what that meansx for the variables involved in this eample.
//  (function () {
//  const header = document.querySelector('h1');
//  header.style.color = 'red';
//  header.addEventListener('click', function(){
//   header.style.color = 'blue';
//  })
//  })();