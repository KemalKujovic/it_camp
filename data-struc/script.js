'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
('use strict');

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    // console.log(
    //   `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) // console.log(item);
  for (const item of menu.entries()) {
    // console.log(`${item[0] + 1}: ${item[1]}`);
  }
for (const [i, y] of menu.entries()) {
  // console.log(`${i}: ${y}`);
}

for (const day of Object.keys(openingHours)) {
  // console.log(day);
}

// let prazanArr = '';
// for(let i = 0; i < weekdays.length; i++){
//   prazanArr += weekdays[i];
// }
// console.log(prazanArr);

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [gpk1, ...ostaliIgraci1] = players2;
// console.log(gpk1, ostaliIgraci1);

let [players1, players2] = game.players;
const [gpk, ...ostaliIgraci] = players1;

let gk = players1[0];
let gk1 = players2[0];
let fieldPlayers = players1;
fieldPlayers.shift();
let fieldPlayers1 = players2;
fieldPlayers1.shift();

const substitute = ['Thiago', 'Perisic', 'Coutinho'];
const allPlayers = [...players1, ...players2];

// const players1final = [...players1, ...substitute];
const players1final = [...players1, 'Thiago', 'Perisic', 'Coutinho'];
// console.log(players1final);

const { team1, x: draw, team2 } = game.odds;

const printGoals = function (...players) {
  // console.log(`${players.length} scored the goal`);
};
printGoals('Muller', 'Kimmich', 'Lewandoski');
printGoals(...game.scored);

// const testic = function(a, b){
//   console.log(a + b);
// }
// testic(3, 5);

const testic = function (a, b, c, d) {
  // console.log(`${game.scored}`);
  // console.log(a,b,c);
};
testic('Legi', 'Fuad', 'Suad');

// team1 > team2 && console.log(`${game.team1} win`);
// team1 < team2 && console.log(`${game.team2} win`);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK
// We're building a football betting app (soccer for my American friends �)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//   [
//   'Neuer',
//   'Pavard',
//   'Martinez',
//   'Alaba',
//   'Davies',
//   'Kimmich',
//   'Goretzka',
//   'Coman',
//   'Muller',
//   'Gnarby',
//   'Lewandowski',
//   ],
//   [
//   'Burki',
//   'Schulz',
//   'Hummels',
//   'Akanji',
//   'Hakimi',
//   'Weigl',
//   'Witsel',
//   'Hazard',
//   'Brandt',
//   'Sancho',
//   'Gotze',
//   ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
//   'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//   team1: 1.33,
//   x: 3.25,
//   team2: 6.5,
//   },
//   };

let dodajemo = 0;

for (const odd of Object.values(game.odds)) {
  dodajemo += odd;
}
dodajemo /= 3;
// console.log(dodajemo);

// for(const [i, igrac] of game.scored.entries()) console.log(`${i} ${igrac}`);

// for(const [team, prezime] of Object.entries(game.odds)){
//   // console.log(team, prezime);
//   const teamStr = team === 'x' ? 'draw' : `victroy ${team}`
//   console.log(`Odd of ${prezime} ${teamStr}`);
// }

// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2,
// }

// /*
// ///////////////////////////////////////
// // Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()])

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
//   ]);

//   console.log(gameEvents.values());

//   const events = [...new Set(gameEvents.values())];

//   gameEvents.delete(64);

//   const time = [...gameEvents.keys()].pop();
//   console.log(`An event happeng , on average every ${time / gameEvents.size} minutes`)
//   ;
//   console.log(time);
//   for(const [min, event] of gameEvents){
//     const half = 45 > min ? 'Frist Half' : 'Second Half';
//     console.log(`${half} ${min} : ${event}`);
//   }

//   // strings methods

// let nekiString = 'Kemal';

// console.log(nekiString.indexOf('m'));
// console.log(nekiString.includes('m'));

// const airplane = function(seat) {

//     const sediste = seat.slice(-1);
//     if(sediste === 'A' || sediste === 'F'){
//       console.log('Imate sediste u sredinu');
//     }else{
//       console.log('Vase sediste je na kraju');
//     }
// }

// airplane('11A');
// airplane('11D');
// airplane('11F');

// let kemo = 'Kemal je je';

// let changing = kemo.replaceAll('je', 'u');
// console.log(changing);

// const airplane = function(items){

//   const bagg = items.toLowerCase();
//   if(bagg.includes('knife') || bagg.includes('gun')){
//     console.log('You cant go in air');
//   }else{
//     console.log('You can go in air');
//   }
// }

// airplane('Going with Knife');
// airplane('Going with Gun');
// airplane('Going with girl');

// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK



// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split('_');
    
//     const output = `${first}${second.replace
//       (second[0], second[0].toUpperCase()
//       )}`;
//       console.log(output);
//   }
// });

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure

