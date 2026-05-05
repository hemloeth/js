`
when the number is too large or too small, it becomes infinity

* Infinity + any finite number = Infinity
* -Infinity + any finite number = -Infinity
Infinity + 1;      // Infinity
Infinity - 1;      // Infinity
Infinity * 2;      // Infinity
Infinity / 2;      // Infinity
Infinity - Infinity; // NaN
Infinity / Infinity; // NaN

console.log(-1 / 0);         // -Infinity
console.log(-Infinity - 1);  // -Infinity
`;
`NaN
when a operation doesnt provide the numbers tha it will return NaN
"hello" * 2;     // NaN
0 / 0;           // NaN
undefined + 1;   // NaN
parseInt("abc"); // NaN


Nan is not equal to any value, including itself.

NaN === NaN; // false

the right way to check for NaN is to use the isNaN() function.

isNaN(NaN); // true
isNaN(undefined); // true
isNaN(); // false

NaN return NaN in any operation

NaN + 1; // NaN
NaN - 1; // NaN
NaN * 2; // NaN
NaN / 2; // NaN
NaN - NaN; // NaN
NaN / NaN; // NaN


and the type of NaN is "number"

typeof NaN; // "number"



`;

console.log(1 / 0);
console.log(-1 / 0);
console.log(Infinity + 1);
console.log(Infinity * 2);
console.log(-Infinity + 1);
console.log(Infinity - Infinity); // NaN
console.log(Infinity / Infinity); // NaN
