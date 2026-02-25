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

    if (age.value >= 18) {
        ageChecker.innerHTML = `Adult`;
    } else {
        ageChecker.innerHTML = `minor`;
    }

}


// title changer

document.title = `js problems2`;


// simple calculator (no events)

function calculate() {

const num1 = document.querySelector(".num1").value;
const num2 = document.querySelector(".num2").value;

let result = document.querySelector(".result");

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const division = num1 / num2;

result.innerHTML = `sum: ${sum}, difference: ${difference}, product: ${product}, division: ${division}`;


}

// number comparison

let comparsionNum1 = document.querySelector(".comparisonNum1").value;
let comparisonNum2 = document.querySelector(".comparisonNum2").value;

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

// question for this, is why is number 5 considered larger than number 10? if num1 is 10 and num2 is 5

// mini product page

function totalcost() {
const product = {
    name: `basketball`,
    price: 30,
    quantity: 0 || document.querySelector(".quantity").value,
}

const total = document.querySelector(".total-value");

const totalPrice = product.quantity * product.price;

total.innerHTML = `price: ${totalPrice}rs`;
}


// mini quiz 


function quizAnswer() {
 
    let option1 = document.querySelector(".option1");
    let option2 = document.querySelector(".option2");
    let option3 = document.querySelector(".option3");
    let option4 = document.querySelector(".option4");
    option1.value = 1;
    option2.value = 4;
    option3.value = 6;
    option4.value = 8;


    let quizAnswer = document.querySelector(".answer");

    if (option3.value === 6) {
        quizAnswer.innerHTML = `correct answer!`;
    } else if(option1.value === 1) {
        quizAnswer.innerHTML = `wrong answer`;
    }

    console.log(option1.value);

}



// i dont know how to do this, i know how to get value from input and check via that but i dont know how to take buttons as input and do something with them or specifically assign values to the said buttons which dont do anything since the answer for each button click will be correct answer. the only workaround i can think of is changing the inner html of the answer class via the onclick attribute of the buttons.


// for score tracker i can do it via as can be seen have a score variable with value 0, then when someone clicks the button then we do score = score + 1 and reflect that in an innerhtml of a paragraph.

// for number guessing simulation its just if else and an innerhtml in a paragraph saying too high, too low or correct.



// mini shopping cart

product1 = {
    price: 10,
    quantity: document.querySelector(".product1-quantity").value || 1,
}
let product1Cost = `total for product 1: ` +  product1.price * product1.quantity + `rs`;

document.querySelector(".product1-price").innerHTML = product1Cost;

product2 = {
    price: 20,
    quantity: document.querySelector(".product2-quantity").value || 1,
}
let product2Cost = `total for product 2: ` +  product2.price * product2.quantity + `rs`;

document.querySelector(".product2-price").innerHTML = product2Cost;

product3 = {
    price: 30,
    quantity: document.querySelector(".product3-quantity").value || 1,
}
let product3Cost = `total for product 3: ` +  product3.price * product3.quantity + `rs`;
document.querySelector(".product3-price").innerHTML = product3Cost;

let grandtotal = document.querySelector(".grand-Total");

grandtotal.innerHTML = `grandtotal: ${(product3.price * product3.quantity) + (product2.price * product2.quantity) + (product1.price * product1.quantity)}`;



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













