function validateUsername(username) {

    if (username[0] >= `0` && username[0] <= `9`) {
        return false;
    } else if (username.includes(` `)) {
        return false;
    } else if (username.length >= 6) {
        return true;
    } else {
        return false;
    }


}

validateUsername(`Vedant`);

function checkPassword(password) {

if (password.length < 6) {
    console.log(`weak password`);
} else if (password.length >= 6 && password.length <= 10) {
    console.log(`medium password `);
} else if (password.length > 10) {
    console.log(`strong password`);
}

}

checkPassword(`12345678901`);

function truthTable (a, b) {

console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);

}

truthTable(true, false);

const student = {
    name: `alex`,
    marks: 56,
}

function grades() {
    if (student.marks >= 75) {
        console.log(`Distinction`);
    } else if (student.marks >= 40 && student.marks <= 74) {
        console.log(`Pass`);
    } else if (student.marks < 40) {
        console.log(`Fail`);
    }
}

grades();

function reverse3(words) {
    if (words.length > 3) {
        console.log(`not a 3-letter word`);
        return;
    } else {
        console.log(words[2] + words[1] + words[0]);
    }
}

reverse3(`hel`);


const user = {
    username: `admin`,
    password: `1234`,
};


function login(inputUser, InputPass) {


    if (inputUser !== user.username && InputPass !== user.password) {
        console.log(`User not found`);
    } else if (inputUser === user.username && InputPass !== user.password) {
        console.log(`wrong password`);
    } else if (inputUser === user.username && InputPass === user.password) {
        console.log(`Login successful`);
    }  



}

login(`admi`, `124`);


function tempStatus(temp) {

    if (temp <= 0) {
        console.log(`freezing`);
    } else if (temp >= 1 && temp <= 15) {
        console.log(`Cold`);
    } else if (temp >= 16 && temp <= 30) {
        console.log(`warm`);
    } else if (temp > 30) {
        console.log(`hot`);
    }

}

tempStatus(31);

function invalidEmail(email) {

    const atIndex = email.indexOf(`@`);
    const dotIndex = email.indexOf(`.`);

    if (atIndex !== -1 && dotIndex !== -1 && atIndex < dotIndex) {
        console.log(true);
    } else {
        console.log(false);
    }

}
invalidEmail(`vedantkr18@gmail.com`);

// how do i check if a condition comes before another condition in javascript?
// i dont know, i cant solve this one i think, it works when i put a email through but if the @ and . are like not in order it still returns true, so how should i fix it?
// got the fix.


let name = `ved`;
let age = 18;
let isStudent = true;

console.log(`The student ${name} has not completed his authorization. He is ${age} years old, and Is a student ${isStudent}`);


const p1 = {
    price: 100,
};

const p2 = {
    price: 99,
};

function comparePrice() {

    if (p1.price < p2.price) {
        console.log(`p1 is cheaper at ${p1.price}`);
    } else {
        console.log(`p2 is cheaper at ${p2.price}`);
    }

}

comparePrice();

console.log(Boolean("false")); // true
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true

function checkAccess(role) {
    if (role !== `admin` && role !== `editor`) {
        console.log(`Default role: viewer has been applied.`)
    } else if (role === `admin`) {
        console.log(`Full Access`);
    } else if (role === `editor`) {
        console.log(`edit access`);
    } else if (role === `viewer`) {
        console.log(`view only`);
    }
}

checkAccess(`viewer`);

const order = {
    id: 101,
    payment: {
        status: `paid`,
    }
};

function orderConformation() {

    if (order.payment.status === `paid`) {
        console.log(`order confirmed`);
    } else {
        console.log(`sorry, order has not been placed. please pay first.`)
    }

}

orderConformation();
