`
A function is a block of code that can be called multiple times with different arguments.

Function have mainly three parts

1. Keyword 2. Name 3. Parameters (input) 4. Body inside the {}

Defining a function does nothing. It only executed when it is called.

You called the function by writing the function name followed by the ()

functionName();




``Arguments and the parameters

Yes, a parameter is basically a variable

When you define a function with a parameter, JavaScript quietly creates a local variable with that name.
You never write let or const — JavaScript does it for you behind the scenes.


`;

function greet(name) {
  console.log("Hello, " + name);
}

greet();


