const numbers = [5, 3, 9, 1, 7, 4];

const max = numbers.reduce((acc, num) => {
  return acc > num ? acc : num;
}, 0);

console.log(max);


const numbers = [5, 3, 9, 1, 7, 4];

const min = numbers.reduce((acc, num) => {
  return acc <num ? acc : num;
}, numbers[0]);  // starting value kya hoga?



const topStudent = students.reduce((acc, student) => {

    return acc.marks > student.marks ? acc : student;
  // acc = abhi tak ka top student (object)
  // student = current student (object)
  // compare karo dono ke marks
}, students[0]); // starting value = pehla student

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
  color: 'Black'
};

const {brand, year} = car;

console.log(brand); // Output: Toyota
console.log(year);  // Output: 2022