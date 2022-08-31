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

const displayMessage = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = '';
  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}EUR</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html); // ide ispod childa dodavanje
  });
};

// balance display
// ---------------------

const balanceDisplay = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, cur) {
    return acc + cur;
  });
  labelBalance.textContent = `${acc.balance} EUR`;
};
//// display money function

const displayBalanceDisplay = function (acc) {
  const sumIn = acc.movements
    .filter(mov => {
      return mov > 0;
    })
    .reduce(function (sum, arr) {
      return sum + arr;
    });
  labelSumIn.textContent = `${sumIn}EUR`;

  const sumOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(sumOut)}EUR`;

  const suminterest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(deposit => {
      return deposit >= 1;
    })
    .reduce((sum, int) => {
      return sum + int;
    });

  labelSumInterest.textContent = `${suminterest}EUR`;
};

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

// console.log(currentAccount);

let currentAccount;
// event listener
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur(); // macinje fokus sa pina
  }

  // display balance
  displayBalanceDisplay(currentAccount);

  // display movments
  displayMessage(currentAccount.movements);

  balanceDisplay(currentAccount);

  // display summary
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);
  const reciveAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  // console.log(amount, reciveAccount);
  if (
    amount > 0 &&
    reciveAccount &&
    currentAccount.balance >= amount &&
    reciveAccount?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    reciveAccount.movements.push(amount);
  }
  displayMessage(currentAccount.movements);

  // display movments
  displayBalanceDisplay(currentAccount);

  balanceDisplay(currentAccount);
});

btnClose.addEventListener('click', e => {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    displayMessage(currentAccount.movements);

    // display movments
    displayBalanceDisplay(currentAccount);

    balanceDisplay(currentAccount);
  }
  inputLoanAmount.value = '';
});
let sort = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();

  displayMessage(currentAccount.movements, !sort);
  sort = !sort;
});
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

const maximum = movements.reduce(function (acc, i) {
  if (acc > i) {
    return acc;
  } else {
    return i;
  }
}, movements[0]);
const juliaDogs = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAge = function (dogs) {
  const humanAge = dogs.map(function (dog, i) {
    if (dog < 2) {
      return dog * 2;
    } else {
      return 16 + dog * 4;
    }
  });
  const less18 = humanAge.filter(function (ages) {
    return ages >= 18;
  });

  const averageDogs = less18.reduce((acc, age) => {
    acc + age / less18.length;
    return acc;
  });
  console.log(averageDogs);
  console.log(humanAge);
  console.log(less18);
};
calcAverageHumanAge(juliaDogs);

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

//Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge2 = function (dogs) {
  const dogsCaculteAge = dogs
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(ages => ages >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  console.log(dogsCaculteAge);
};

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]);

/// find method

const fristWithdraw = movements.find(mov => mov < 0);
console.log(fristWithdraw);

const fristProfil = accounts.find(acc => acc.owner === 'Kemal Kujovic');
console.log(fristProfil);

// some method

console.log(movements.some(mov => mov === -130));

// flat method

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[1, [3], 5], [3], [4], 9, 1];
console.log(arrDeep.flat(2));

const accountsMovments = accounts.map(acc => acc.movements);

const allMovments = accountsMovments.flat();

const overBalance = allMovments.reduce((acc, curr) => acc + curr, 0);
console.log(overBalance);

const overvalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(overvalBalance);

const overvalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => acc + curr, 0);
console.log(overvalBalance);

// sort metod

const stng = ['Kemal', 'Suad', 'Fuad'];

console.log(stng.sort());

const z = Array.from({ length: 10 }, (curr, i) => i + 1);
const f = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 100));
console.log(z);
console.log(f);

const bankDepositSum = accounts
  .map(acc => acc.movements)
  .flat()
  .filter(cur => cur > 0)
  .reduce((sum, curr) => sum + curr);

console.log(bankDepositSum);

const bankDeposit1000 = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(bankDeposit1000);

const sums = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce(
    (sum, curr) => {
      curr > 0 ? (sum.deposit += curr) : (sum.withdraws += curr);
      return sum;
    },
    { deposit: 0, withdraws: 0 }
  );

console.log(sums);
const converTitleCase = title => {
  console.log(title);
  const exceptions = ['a', 'and', 'an'];
  console.log(exceptions);
  const convert = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    );
  return convert;
};

console.log(converTitleCase('This is a nice title'));
// ch 4---------------
// -----------
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1
dogs.forEach(dog => Math.trunc((dog.recFood = dog.weight ** 0.75 * 28)));

// 2
console.log(dogs);
const sarindog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarin dog jede ${sarindog.curFood > sarindog.recFood ? 'So much' : 'Little'}`
);
console.log(sarindog);

// 3

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .map(e => e.owners)
  .flat();
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .map(e => e.owners)
  .flat();
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
// 4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5

console.log(dogs.some(dog => dog.curFood === dog.recFood));
console.log(
  dogs.some(
    dog => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

// 6



// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �

// Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
