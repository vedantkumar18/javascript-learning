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
*/










/*
let score = JSON.parse(localStorage.getItem(`score`)) || {
    wins: 0,
    loses: 0,
    tie: 0,
  };






if (!score) {
  score = {
    wins: 0,
    loses: 0,
    tie: 0,
  };
}






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
    result = `tie.`;
  } else if (computerMove === `paper`) {
    result = `you lose.`;
  } else if (computerMove === `scissors`) {
    result = `you win.`;
  }

  // if the player chooses paper then this applies.
} else if (playerMove === `paper`) {

  if (computerMove === `rock`) {
    result = `you win.`;
  } else if (computerMove === `paper`) {
    result = `tie.`;
  } else if (computerMove === `scissors`) {
    result = `you win.`;
  }

    //if the player chooses scissors then this applies.
} else if (playerMove === `scissors`) {

  if (computerMove === `rock`) {
    result = `you lose.`;
  } else if (computerMove === `paper`) {
    result = `you win.`;
  } else if (computerMove === `scissors`) {
    result = `tie.`;
  }
}

  if (result === `you win.`) {
    score.wins += 1;
  } else if (result === `you lose.`) {
    score.loses += 1;
  } else if (result === `tie.`) {
    score.tie += 1;
  }


  localStorage.setItem(`score`, JSON.stringify(score));


  alert(`you picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, loses: ${score.loses}, ties: ${score.tie}.  
  `);

}
*/




/*
function calculateTax(cost, taxPercent = 0.1) {

    console.log(cost * taxPercent);

}

calculateTax(2000, 0.2);
calculateTax(5000);
*/

// lesson 7 exercise 
/*
function greet(name) {

  if (name === undefined) {
    console.log(`Hello User`);
  } else {
    console.log(`hello ${name}`);
  }


  }

// greet(`ved~`);
// greet();


function convertToFarenheit(celsius) {

  const fahrenheit = (celsius * 9/5) + 32;
  console.log(fahrenheit + `F`);

}

// convertToFarenheit(25);

function convertToCelsius(fahrenheit) {

  const celsius = (fahrenheit - 32) * 5/9;
  console.log(celsius + `C`);

}

// convertToCelsius(86);

function convertTemperature(degrees, unit) {

  if (unit === `F`) {
    return (convertToCelsius(degrees));
  } else if (unit === `C`) {
    return(convertToFarenheit(degrees));
  }


}

//  convertTemperature(86, `F`);
//  convertTemperature(25, `C`);

function convertLength(length, from, to) {

  // ft or Ft means feet.


let oneMile = 1.6;
let oneMileToFt = 5280;
let oneKmToFt = 3281;




if (from !== `km` && from !== `mile` && from !== `ft`){
  console.log(`invalid unit: ${from}`);
} else if (to !== `km` && to !== `mile` && to !== `ft`){
  console.log(`invalid unit: ${to}`);
} else if (from === `km` && to === `km`) {
  console.log(length + to);
} else if (from === `mile` && to === `ft`) {
  console.log(length * oneMileToFt + to);
}else if(from === `km` && to === `ft`) {
  console.log(length * oneKmToFt + to);
} else if (from === `mile`) {
  console.log(length * oneMile + to);
} else if (from === `km`) {
  console.log((length / oneMile) + to);
}

}

// convertLength(50, `mile`, `km`);
// convertLength(32, `km`, `miles`);
// convertLength(50, `km`, `km`);
// convertLength(5, `mile`, `km`);
// convertLength(5, `mile`, `ft`);
// convertLength(5, `km`, `ft`);
// convertLength(5, `lbs`, `lbs`);


*/

// 07-copy-projects



// 07-calculator-copy
/*

let calculation = localStorage.getItem(`calculation`) || ``;


document.getElementById('display').innerText =
  calculation || '(empty on load)';

function updateCalculation(number) {
  console.log(calculation += number);
  localStorage.setItem(`calculation`, calculation);
}

// 3. Function to calculate result
function calculateResult() {
  calculation = eval(calculation);       // evaluate expression
  console.log(calculation);
  localStorage.setItem('calculation', calculation); // save result
}
*/


// 07-cart quantity
/*


let cartQuantity = 0;

function updateCartQuantity(number){

    if (cartQuantity + number > 10) {
      console.log(`the cart is full`);
      return;
    } else {
      cartQuantity += number;
    console.log(`cart Quantity: ${cartQuantity}`); 
    }

}

function removeCartQuantity(number) {

    if (cartQuantity < 0) {
      console.log(`the cart is empty`);
    } else {
      cartQuantity -= number;
    console.log(`cart Quantity: ${cartQuantity}`); 
    }

}
  
*/

// lesson 8


/*

const product = {
  name: `ved`,
  price: 20
};

console.log(product);
console.log(product.name);
console.log(product.price);

product.name = `cotton socks`;
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

*/

/*
const product2 = {
  name: `shirt`,
  "delivery-time": `1 day`,
  rating: {
    stars: 4.5,
    count: 87,
  },
  fun: function function1() {
    console.log(`function inside object`);
  }
}

console.log(product2);
console.log(product2.name);
console.log(product2[`name`]);

console.log(product2.rating.stars);
console.log(product2.rating.count);
console.log(product2["delivery-time"]);

product2.fun();

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

console.log(`hello`.length);
console.log(`hello`.toUpperCase());

const object1 = {
  message: `hello`
};


const object2 = object1;

object1.message = `heyy`;
console.log(object1);
console.log(object2);


const object3 = {
  message: `good job!`
}

console.log(object3 === object1);
console.log(object2 === object1);


const object4 = {
  message: `good job!`,
  price: 799
}

// const message = object4.message;
const {message, price} = object4;
console.log(message);
console.log(price);


const object5 = {
//  message: message,
    message,
    // method: function function4 () {
    //  console.log(`method`);
    // }
    method() {
      console.log(`method`);
    }
};

console.log(object5);

object5.method();

*/


// lessson 8, exercises- 

/*

const item = {

  name: `Basketball`,
  price: 2095
};

console.log(item);

item.price += 500;

console.log(item);

item[`delivery-time`] = `3 Days`;

console.log(item)


const product7 = {

  name: `Ball`,
  price: 2000

};

const product8 = {

  name: `Ball`,
  price: 1999

};



function comparePrice() {

  

  if (product7.price < product8.price) {
    console.log(`product7: ${product7.price} is the cheapest option.`);
  } else {
    console.log(`product8: ${product8.price} is the cheapest option`);
  }

}


comparePrice();


function isSameProduct() {

  if (product7.name === product8.name) {
    console.log(true);
  } else {
    console.log(false);
  }

};

isSameProduct();


const testString = `THIS IS A TEST STRING!!!!`;
const testLowerCaseString = testString.toLowerCase();
console.log(testLowerCaseString);

const repeatString = `hello `;
const testRepeatString = repeatString.repeat(5);
console.log(testRepeatString);
