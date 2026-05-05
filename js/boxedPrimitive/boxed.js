`The answer — JavaScript secretly swaps it
The moment JS sees you doing name.toUpperCase(), it thinks:

"Oh, he's calling a method on a primitive. I can't do that.
Let me secretly create a String object, run the method on that, then throw it away."



name.toUpperCase()

// JS secretly does this:
// 1. let temp = new String("hemlo")  ← wraps it in an object
// 2. temp.toUpperCase()              ← calls the method
// 3. destroy temp                    ← throws the object away
// 4. returns "HEMLO"                 ← you get the result

That temporary object is called a boxed primitive.
You never see it. JS creates it and destroys it in a split second.

Whenever you call a method on a primitive,
JS secretly wraps it in an object, runs the method, then immediately destroys the object. That temporary object is the "boxed primitive.
`;

let temp = new String("hemlo");
temp.toUpperCase();

console.log(temp);
