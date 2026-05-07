`No arguments object
In a regular function, JavaScript automatically gives you a special variable called arguments.
It contains all the values you passed to the function — even if you didn't define any parameters.

function fn() {
  console.log(arguments);
}
fn(1, 2, 3); // [1, 2, 3]

In an arrow function, there is no arguments variable. If you try to access it, you'll get a ReferenceError.

const arrowFn = () => {
  console.log(arguments);
};
arrowFn(1, 2, 3); // ReferenceError: arguments is not defined

But with arrow functions, you have to manually define ...args (or whatever name) in the parameters yourself. Only then will it collect the values.

const arrowFn = (...args) => {
  console.log(args);
};
arrowFn(1, 2, 3); // [1, 2, 3]


Yes, exactly. Whatever values you pass, ...args will always collect them into an array.
jsconst fn = (...args) => console.log(args);

fn(1, 2, 3);         // [1, 2, 3]
fn("a", "b");        // ["a", "b"]
fn(true, 10, "hey"); // [true, 10, "hey"]





`;
