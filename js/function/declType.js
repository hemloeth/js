` Function Declaration

Function Expression

When the function dont have a name inside the function Expression it is called an anonymous function.

Named function expression

A function expression CAN have a name — but that name is only visible inside the function itself, not outside.
This is useful for recursion or debugging.

Arrow Function
Introduced in ES6. A shorter syntax for writing function expressions.
Under the hood it's still a function expression — assigned to a variable, not hoisted.

const greet = (name) => {
  console.log("Hello, " + name);
}

greet("Hemlo");   // → "Hello, Hemlo"

This is the most important thing about arrow functions and it separates them fundamentally from regular functions.
Arrow functions do not have their own this.
They borrow this from the surrounding context where they were defined.

}

IIFE — Immediately Invoked Function Expression

Pronounced "iffy". It's a function that defines itself and calls itself at the same time, all in one go.
(function() {
  console.log("I ran immediately!");
})();

``Question 1
Write a function called multiply that takes two numbers as parameters and returns their product.
Then call it with the numbers 4 and 6, store the result in a variable called result, and log it to the console.

`;

function multiply(num1, num2) {
  return num1 * num2;
}

const results = multiply(4, 6);
console.log(results); // → 24

`Question 2
Write a function called greetUser that takes a name parameter with a default value of "Guest".
It should return the string "Welcome, [name]!" — not log it, return it.
Call it twice — once with a name, once without any argument. Log both results.
`;

function greetUser(name = "Guest") {
  return "Welcome, " + name + "!";
}
const Welcome = greetUser();
console.log(Welcome); // → "Welcome, Guest!"

const Welcome2 = greetUser("John");
console.log(Welcome2); // → "Welcome, John!"

`Question 3
Write a function called isEven that takes a number and returns true if it's even, false if it's odd.
Call it with 4 and 7 and log both results.`;

function isEven(num) {
  return num % 2 === 0;
}

const evenResult = isEven(4);
console.log(evenResult); // → true

const oddResult = isEven(7);
console.log(oddResult); // → false

`Question 4
Write a function called getFullName that takes firstName and lastName as parameters and returns the full name as a single string with a space in between.
Then rewrite the exact same function as an arrow function and store it in a variable called getFullNameArrow.
Call both with "Hemlo" and "Dev" and log both results.`;

const getFullNameArrow = (firstName, lastName) => firstName + " " + lastName;

const fullNameArrow = getFullNameArrow("Hemlo", "Dev");
console.log(fullNameArrow); // → "Hemlo Dev"

`Question 5
Write a function called describeUser that takes name, age, and city and returns an object with those three as properties.
Then call it with your own values, store the result, and log the entire object. Then also log just the city property from it.`;

const desribeUser = (name, age, city) => ({ name, age, city });

const user = desribeUser("Rustam", 27, "Delhi");
console.log(user); // → { name: "Rustam", age: 27, city: "Delhi" }
console.log(user.city); // → "Delhi"

`Question 6
Write a function called divide that takes two numbers a and b.
If b is 0, return the string "Cannot divide by zero". Otherwise return the result of a / b.
Use the early return pattern — handle the bad case first, main logic at the bottom with no else.`;

function devide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
const result = devide(10, 2);
console.log(result); // → 5

`Question 7
Write a function called clamp that takes three parameters — num, min, and max.
It should return:

min if num is less than min
max if num is greater than max
num itself if it's within the range`;

function clamp(num, min, max) {
  if (num < min) {
    return min;
  }
  if (num > max) {
    return max;
  }
  return num;
}

const clamped = clamp(10, 0, 5);
console.log(clamped); // → 5

`Question 9
Write an IIFE that:

Takes no parameters
Creates a variable called message inside it with the value "I am private"
Logs message inside the IIFE

Then after the IIFE, try to console.log(message) outside of it.`(function () {
  const message = "I am priavate";
  console.log(message); // → "I am priavate"
})();

console.log(message); // → ReferenceError: message is not defined

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // → 1
console.log(counter()); // → 2

function calculateBill(ammount, tipPercent = 10) {
  return {
    tip: (ammount * tipPercent) / 100,
    total: ammount + (ammount * tipPercent) / 100,
  };
}

const bill = calculateBill(100, 20);
console.log(bill); // → { tipPercent: 20, total: 120 }

const newBill = calculateBill(100);
console.log(newBill); // → { tipPercent: 10, total: 110 }

function buildProfile(name, age, role = "User") {
  if (name === "") {
    return null;
  }

  return {
    name,
    age,
    role,
    greeting: `Hello, my name is ${name} and I am a ${role}.`,
  };
}

const profile = buildProfile("John", 30, "Developer");
console.log(profile); // → "Hello, my name is John and I am a Developer."

const withouUser = buildProfile("Jane", 25);
console.log(withouUser); // → "Hello, my name is Jane and I am a User."

const anonymous = buildProfile("");
console.log(anonymous); // → null
