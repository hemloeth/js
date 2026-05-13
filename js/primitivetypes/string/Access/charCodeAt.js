`it returns the unicode value of the characrter at the specified index`


let str = "Hello World";

console.log(str.charCodeAt(1)); // 101

console.log(str.charCodeAt(0)); // 72


`Exception`

let str1 = "Hello World"

console.log(str1.charCodeAt(-1)); // NaN

console.log(str1.charCodeAt(100)); // NaN

console.log(str1.charCodeAt()); // by default it will at 0 so it will return 72


