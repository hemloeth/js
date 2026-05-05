`
Har symbol unique hota hai

let sym1 = Symbol();
let sym2 = Symbol();
sym1 === sym2; // false

let sym3 = Symbol('foo');
let sym4 = Symbol('foo');
sym3 === sym4; // false

Description optional hai

let sym5 = Symbol('bar');
let sym6 = Symbol('bar');
sym5 === sym6; // false



typeof symbol
String mein convert nahi hota automatically

.description se description nikalo



Symbol.for() — global symbol


let sym7 = Symbol.for('baz');
let sym8 = Symbol.for('baz');
sym7 === sym8; // true




`;

let id = Symbol("id");

let user = {
  id: "John",
};

console.log(user.id); // John

let sym = Symbol("id");
console.log("hello" + sym);
