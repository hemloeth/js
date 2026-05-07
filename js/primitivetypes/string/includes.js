// basic syntax string.includes(searchString, position)

let str = "Hello World";
console.log(str.includes("World", 7)); // true

// rule no 2 Case sensitive hota hai
console.log(str.includes("world")); // false

// Second argument — position
console.log(str.includes("Hello", 1)); // false
console.log(str.includes("Hello", 0)); // true

// rule no 3 Empty string always true:

console.log(str.includes("")); // true

// RULE NO 4 Negative position — 0 treat hota hai:

console.log(str.includes("Hello", -5)); // true

// RULE NO 6  Position > string length — always false:
console.log(str.includes("Hello", 50)); // false

` basic syntax of inlcudes string.includes(searchingstring, positionvalue)

rule no 1: Case sensitive hota hai

rule no 2: empty string always return true

rule no 3: negative position value will be treated as 0

rule no 4: postion value is greate the string lenght will be treated as false

rule no 5: if position not provided than it will be start from 0

Rule 6 — NaN position — 0 treat hota hai:

Rule 7 - .includes() number ko automatically string mein convert kar leta hai — phir search karta hai.
`;

let stres = "Hello 123";
let NewStress = stres.includes("Hello");
console.log(NewStress); // true

let newStress2 = stres.includes("Hello", 0);
console.log(newStress2); // true

let newStress3 = stres.includes("Hello", 10);
console.log(newStress3); // false

let newStress4 = stres.includes("Hello", -1);
console.log(newStress4); // true

let newStress5 = stres.includes("Hello", 50);
console.log(newStress5); // false

let newStress6 = stres.includes("");
console.log(newStress6); // true

let newStress7 = stres.includes("Hello", -5);
console.log(newStress7); // true

let newStress8 = stres.includes("Hello", 5);
console.log(newStress8); // false

let newStress9 = stres.includes("Hello", NaN);
console.log(newStress9); // true

let newStress10 = stres.includes(123);
console.log(newStress10); // true


`
1. It is Case senstive
2. empty string always be true
3. ngative postion treast as 0
4. if the position value is gretae ten athe lenght of the string it always returns false
5. if the postion valuse is not provided it searches form the 0
6. if the postiion value is Nan It treats as 0 
7. .includes() automatically converts numbers to strings before searching.

`

let str1 = "Hello 123";
console.log(str1.includes("Hello", "hello"))