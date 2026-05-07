`What is a closure?

A closure is when a function remembers the variable from the scope
where it was created even after that outer scope has finished executing.

function outer() {
  let message = "hello";

  function inner() {
    console.log(message); // inner can see message
  }

  inner();
}

outer(); // logs: "hello"


`;
