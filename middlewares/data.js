


// this will give undefined because in this the declaeration gets hoisted but not the value 




const hellosa = 2
function hello() {
    console.log(hellosa);
}

function hello() {
    console.log("Hello");
}

hello();

var a = 1;
0
function a() {}

console.log(a);


const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
};

const {brand:carBrand, color="white"} = car;
console.log(carBrand); // Output: Toyota
console.log(color);    // Output: white

const fruits = ['Apple', 'Mango', 'Banana', 'Orange', 'Grapes'];

const firstTwoFruits = [first , second] = fruits;

const restFruites = [, , ...restFruites] = fruits;

console.log(firstTwoFruits);
console.log(restFruites);


const student = {
  name: 'Hemlo',
  marks: {
    math: 95,
    science: 88,
    english: 76
  }
};

const {name, marks: {math, science}} = student;

console.log(name);
console.log(math);
console.log(science);

const person = {
  name: 'Hemlo',
  age: 20,
};

const newPerson = {...person, age:25, city: "Delhi"}


const orders = [
  { id: 1, product: 'Phone', price: 10000, delivered: true },
  { id: 2, product: 'Laptop', price: 50000, delivered: false },
  { id: 3, product: 'Earphones', price: 2000, delivered: true },
  { id: 4, product: 'Charger', price: 1000, delivered: false },
];

const deliveredProducts = orders.filter((order) => order.delivered).map((order) => order.product);

const [firstOrder, ...rest] = deliveredProducts;