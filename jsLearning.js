// this is for lesson 4
/*

console.log( 2 + 2 );
console.log( `some` + `text` );

*/
//this is for lesson 5
/*

let var1 = 3;    
console.log(var1);

let calculation = 2 + 2;
console.log(calculation);
console.log(calculation + 2);

let result = calculation + 2;
console.log(result);

let message = `hello`;
console.log(message);

var1 = 5;
console.log(var1);

var1 = var1 + 1;
console.log(var1);

console.log(typeof 3);

*/
// this is for lesson 5 project
/*

let cartQuantity = 0;


let name = `ved`;
console.log(`My name is: ${name}`);

const cost = 5 + 2 * 3 + 9;
console.log(`cost of food: $${cost}`);

const tax = cost * 10/100;
console.log(`tax(10%): ${tax}`);

const totalCost = cost + tax;
console.log(`total cost: $${totalCost}`);


*/
// this is for the calculator that ive started from lesson 5.
/*

let calculation;

*/

// lesson 6
/*

console.log(3 > 5);

console.log(typeof true);

console.log(5 == `5.00`);

if (true) {
    console.log(`hello`);
} else {
    console.log(`else`);
}



const age = 15;


if (age >= 16) {
    console.log(`old enough to drive `);
} else if (age >= 14) {
    console.log(`almost there.`);
} else {
    console.log(`not old enough to drive`);
}

if (0) {
    console.log(`truthy`);
}

const cartQuantity = 5;

if (cartQuantity) {
    console.log(`cart has products`);
}

console.log(!0);

console.log(`text` / 5);

let cas1;
console.log(cas1);

// ternary operator 

const result = 0? `truthy` : `falsy`;

console.log(result)

// guard operator

false  && console.log(`hello`);

const message = 5 && `hello`;
console.log(message);

// default operator

const currency = undefined || `USD`;
console.log(currency);



const hour = 13;
const name = `ved`;

if (hour >= 6 && hour <= 12) {
    console.log(`good morning~ ${name}`);
} else if (hour >= 13 && hour < 17) {
    console.log(`good afternoon~ ${name}`);
} else {
    console.log(`good night~ ${name}`);
}


const age = 15;
const Isholiday = true;


if (Isholiday === true) {
    console.log(`Sorry, no holiday discount is available at this moment.`)
} else if (Isholiday === false && age <= 6 || age >= 65) {
    console.log(`Holiday discount: 10% off`);
} else {
    console.log(`Sorry, no holiday discount available.`)
}

const number = Math.random();
const guess = `heads`;
let results = ``;


if (number < 0.5) {
     results = `heads`;
} else {
     results =`tails`;
}

console.log(results);

if (guess === results) {
    console.log(`you win!`);
} else {
    console.log(`you lose`);
}

*/

// lesson 7 
/*

function function1() {

    console.log(`hello`);
    console.log( 10 + 2 );

}

function1();



function pickComputerMove() {

let computerMove = ``;

const randomNumber = Math.random();

      if (randomNumber >= 0 && randomNumber < 1/3) {
   computerMove = `rock`;
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
   computerMove = `paper`;
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
   computerMove = `scissors`;
  }

  return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

  let result = ``;

    // if the player chooses rock then this applies.
if (playerMove === `rock`) {
  if (computerMove === `rock`) {
    result = `tie`;
  } else if (computerMove === `paper`) {
    result = `you lose`;
  } else if (computerMove === `scissors`) {
    result = `you win`;
  }

  // if the player chooses paper then this applies.
} else if (playerMove === `paper`) {

  if (computerMove === `rock`) {
    result = `you win`;
  } else if (computerMove === `paper`) {
    result = `tie.`;
  } else if (computerMove === `scissors`) {
    result = `you win`;
  }

    //if the player chooses scissors then this applies.
} else if (playerMove === `scissors`) {
    if (computerMove === `rock`) {
    result = `you lose`;
  } else if (computerMove === `paper`) {
    result = `you win.`;
  } else if (computerMove === `scissors`) {
    result = `tie`;
  }
}

  alert(`you picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}




function calculateTax(cost, taxPercent = 0.1) {

    console.log(cost * taxPercent);

}

calculateTax(2000, 0.2);
calculateTax(5000);
*/

// lesson 8
