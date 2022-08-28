'use strict';

// Data
const account1 = {
  owner: 'Kemal Kujovic',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Fuad Fukic',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Suad Sukic',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Suada Fuada',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMessage = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); // ide ispod childa dodavanje
  });
};

displayMessage(account1.movements);
// balance display
// ---------------------

const balanceDisplay = function (movements) {
  const balance = movements.reduce(function (acc, cur) {
    return acc + cur;
  });
  labelBalance.textContent = `${balance} EUR`;
};
balanceDisplay(account1.movements);

// ---------------------
// let acc = 'Kemal Kujovic';
// uzimamo sve objekte prolazimo kroz svakog ownera i pravimo da svako pocetno slovo bude user
const createUserName = function (accs) {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(acc => acc[0])
      .join('');
  });
};
console.log(accounts);

createUserName(accounts);

//////////////////////////////////////
////////////////////////////////////
// Finish BANKIST APP

// lekcije
// for(const [i, movement] of movements.entries()){
//   if(movement > 0){

//     console.log(`You deposit ${i + 1}: ${movement}`);
//   }else{
//     console.log(`You withdraw ${i + 1}:${Math.abs(movement)}`);
//   }
// }
// console.log('--------------');
// movements.forEach(function(movement, i,){
//   if(movement > 0){

//     console.log(`You deposit ${i + 1}: ${movement}`);
//   }else{
//     console.log(`You withdraw ${i + 1}:${Math.abs(movement)}`);
//   }
// })
/////////////////////////////////////////////////

//  const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key} : ${value}`);
// })
// const currencies2 = new Set(['usd', 'gbp', 'gbp', 'rsd', 'rsd'])
// currencies2.forEach(function(value, _, set){
//   console.log(`${value}: ${value}`);
// })
// kraj lekcije

////////////////////////////
///////////////////////
//  CHALLENGES 1

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];

// const checkDogs = function(jul, kate){
//   let psi = jul.slice(1, -2);
//   console.log('---');
//   console.log(psi);
//   console.log(kate);
//   // const bothJulia = [...psi, ...kate];
//   const bothJulia = psi.concat(kate)
//   console.log(bothJulia);
//   bothJulia.forEach(function(pas, i){
//     const type = pas > 3 ? 'adult' : 'puppy';
//    console.log(`Dog number ${i + 1} is an ${type} and is ${pas} years old`);
//   })
// }

// checkDogs(julia, kate)
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far

// ARR method Map

const euroToUsd = 1.1;

// const movementUSD = movements.map(function(mov){
//   return mov * euroToUsd;
// })
// arrow func
const movementUSD = movements.map(mov => mov * euroToUsd);

// console.log(movementUSD);
// console.log(movements);

const movementDescription = movements.map(
  (mov, i) =>
    `You ${mov > 0 ? 'deposit' : 'withdrawl'} ${i + 1}: ${Math.abs(mov)}`

  // Math.abs macinje minuse :P

  //   return `You deposit ${i + 1}: ${mov}`;
  // }else{
  //   return `You withdraw ${i + 1}:${Math.abs(mov)}`;
  // }
);
// console.log(movementDescription);

// deposit funkcija with filter.
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
// -----
// foor loop
const emtpyDeposit = [];
for (const i of movements) {
  if (i > 0) {
    emtpyDeposit.push(i);
  }
}
console.log(emtpyDeposit);
// -----
//withdraw funkcija with filter.

const withdraws = movements.filter(mov => {
  return mov < 0;
});
console.log(withdraws);
// -----
// reduce method
// Prvi argument uvek je taj koji je kaoo suma gde ce se to sve smetiti posle ide svaki posbeno kroz forEadch petlju prm.
const balance = movements.reduce(function (acc, curr) {
  return acc + curr;
});
console.log(balance);

// for loop

let sum = 0;
for (const i of movements) {
  sum += i;
}
console.log(sum);


// maxiumum number with reduce method

const maximum = movements.reduce(function(acc, i){
  if(acc > i){
    return acc;
  }else{
    return i;
  }
}, movements[0])
const juliaDogs = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function(dogs){
  const humanAge = dogs.map(function(dog, i){
   if(dog < 2){
    return dog * 2;
   }else{
    return 16 + dog * 4;
   }
  })
  const less18 = humanAge.filter(function(ages){
    return ages >= 18;
  })

  const averageDogs = less18.reduce((acc, age) => {
    acc + age / less18.length;
    return acc;
  })
  console.log(averageDogs);
  console.log(humanAge);
  console.log(less18);
}
calcAverageHumanAge(juliaDogs)


// Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is 
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as 
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know 
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �
