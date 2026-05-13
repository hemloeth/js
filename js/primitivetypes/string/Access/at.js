`What it does: Returns the character at the given index — just like .charAt() but supports negative indexing.`

let str = "Hello World";

console.log(str.at(1)); // e 

console.log(str.at(0)); // H

`Exception`

let str1 = "Hello World"

console.log(str1.at(-1)); // d

console.log(str1.at(100)); // undefined

console.log(str1.at(-100)); // undefined

console.log(str1.at()); // it will start from the begining 0

