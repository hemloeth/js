`Converts an ASCII / Unicode number back to a character. Opposite of .charCodeAt().`

let str = "Hello World";

console.log(String.fromCharCode(72)); // H

console.log(String.fromCharCode(101)); // e

console.log(String.fromCharCode(100)); // d

`Exception`

let str1 = "Hello World"

console.log(String.fromCharCode(-1)); // NaN

console.log(String.fromCharCode(100)); // d

console.log(String.fromCharCode()); // NaN



