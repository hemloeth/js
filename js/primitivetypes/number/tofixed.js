`to fixed rounded the number to a specified number of decimal places
and returns a string representation of the number

num.toFixed(digits)

Rule no -1- If the digit were not given decimal will be 0

Rule no -2- Rounding till the decimal digit

Rule no -3- If Digits is greate than the decimal than the digits ammount of 0 will be added after the decimal

Rule no -4- Negative digits — RangeError

Rule no -5- Original numbers is not changed
`;

let num = 123.456;
let result = num.toFixed(); // "123"
console.log(typeof result); // "string"

let newresult = num.toFixed(2);
console.log(newresult); // "123.46"

let digits = num.toFixed(10);
console.log(digits); //

let negative = num.toFixed(-1);
console.log(negative); // range error
