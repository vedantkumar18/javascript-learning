// dynamic welcome page

function dynamicUsername() {
    const username = document.querySelector(".username").value;
    const message = document.querySelector(".welcome-message");
    message.innerHTML = `welcome, ${username}`;

}

// age checker 

function ageChecker(){
const age = document.querySelector(".input-age");
const ageChecker = document.querySelector(".age-checker");
const ageValue = Number(age.value);

    if (ageValue >= 18) {
        ageChecker.innerHTML = `Adult`;
    } else {
        ageChecker.innerHTML = `minor`;
    }

}


// title changer

document.title = `js problems2`;


// simple calculator (no events)

function calculate() {

const num1 = Number(document.querySelector(".num1").value);
const num2 = Number(document.querySelector(".num2").value);

let result = document.querySelector(".result");

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const division = num1 / num2;

result.innerHTML = `sum: ${sum}, difference: ${difference}, product: ${product}, division: ${division}`;


}

// number comparison

function compareNumbers() {
let comparsionNum1 = Number(document.querySelector(".comparisonNum1").value);
let comparisonNum2 = Number(document.querySelector(".comparisonNum2").value);

const numComparison = document.querySelector(".num-comparison");

const comparisonDifference = comparsionNum1 - comparisonNum2; 
let comparisonEqual;

if (comparsionNum1 === comparisonNum2) {
    comparisonEqual = true;
} else {
    comparisonEqual = false;
}

let numGreaterThan;

if (comparsionNum1 > comparisonNum2) {
    numGreaterThan = comparsionNum1;
} else if (comparisonNum2 > comparsionNum1){
    numGreaterThan = comparisonNum2;
}


numComparison.innerHTML = `difference: ${comparisonDifference}, is equal? : ${comparisonEqual}, which is larger? : ${numGreaterThan}`;

}

// question for this, is why is number 5 considered larger than number 10? if num1 is 10 and num2 is 5

// mini product page

function totalcost() {
const product = {
    name: `basketball`,
    price: 30,
    quantity: Number(document.querySelector(".quantity").value) || 0,
}

const total = document.querySelector(".total-value");

const totalPrice = product.quantity * product.price;

total.innerHTML = `price: ${totalPrice}rs`;
}


// mini quiz 


function quizAnswer(selectedValue) {

    const answer = document.querySelector(".answer");

    if (selectedValue === 6) {
        answer.innerHTML = "Correct!";
    } else {
        answer.innerHTML = "wrong!";
    }


}




// i dont know how to do this, i know how to get value from input and check via that but i dont know how to take buttons as input and do something with them or specifically assign values to the said buttons which dont do anything since the answer for each button click will be correct answer. the only workaround i can think of is changing the inner html of the answer class via the onclick attribute of the buttons.


// for score tracker i can do it via as can be seen have a score variable with value 0, then when someone clicks the button then we do score = score + 1 and reflect that in an innerhtml of a paragraph.

// for number guessing simulation its just if else and an innerhtml in a paragraph saying too high, too low or correct.



// mini shopping cart

function calculateCart(){
const product1 = {
    price: 10,
    quantity: Number(document.querySelector(".product1-quantity").value) || 1,
}
let product1Cost = `total for product 1: ` +  product1.price * product1.quantity + `rs`;

document.querySelector(".product1-price").innerHTML = product1Cost;

const product2 = {
    price: 20,
    quantity: Number(document.querySelector(".product2-quantity").value) || 1,
}
let product2Cost = `total for product 2: ` +  product2.price * product2.quantity + `rs`;

document.querySelector(".product2-price").innerHTML = product2Cost;

const product3 = {
    price: 30,
    quantity: Number(document.querySelector(".product3-quantity").value) || 1,
}
let product3Cost = `total for product 3: ` +  product3.price * product3.quantity + `rs`;
document.querySelector(".product3-price").innerHTML = product3Cost;

let grandtotal = document.querySelector(".grand-Total");

grandtotal.innerHTML = `grandtotal:${
    (product3.price * product3.quantity) 
    + (product2.price * product2.quantity) 
    + (product1.price * product1.quantity)}`;
}



// dynamic html builder

/*
document.body.innerHTML = `
<h1>Store</h1>
<div class="ProductNew">
<p class= "productNew-name"></p>
<p class= "productNew-quantity"></p>
<p class= "productNew-price"></p>
</div>
`;

const productName = document.querySelector(".productNew-name");
productName.innerHTML = `hat`;

const productQuantity = document.querySelector(".productNew-quantity");
productQuantity.innerHTML = 1;

const productPrice = document.querySelector(".productNew-price");
productPrice.innerHTML = 100 + `rs`;

*/













