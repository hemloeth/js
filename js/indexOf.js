`Basic syntax of index of string.indexOf(searchString, positionvalue)

Rule no - 1 - Only the first match will be returned

Rule no -2 - If its not found than it will return -1

Rule no -3 - Case sensitive

Rule no - 4 -  Empty string will return 0

Rule no - 5 - Negative position value will be treated as 0

Rule no - 6 - if the postion is not provided than it will start from 0 and search the string from the beginning and return the first match

Rule no - 7 - if the postion is greater than the string length than it will return -1

Rule no - 8 - if the search string is not found than it will return -1

Rule no -9 - the spaces are also counted in the string length



`

let stres = "Hello World hello";
let spaces = 0;
let position = 0;

while(true) {
  let found = stres.indexOf(" ", position);
  
  if(found === -1) {
    break; // koi space nahi mila — loop khatam
  }
  
  spaces++;
  position = found + 1; // agle space ke liye aage badho
}

console.log(spaces); // 2

console.log("spaces: ", spaces);

let newstrings = stres.indexOf(" ");
console.log(newstrings);

let newStress = stres.indexOf("World");
console.log(newStress);

let notFound = stres.indexOf("xyz");

if (notFound === -1) {
    console.log("Not found");
} else {
    console.log("Found");
}


let cat = "cat cat cat";
let newCat = cat.indexOf("cat", 1);
console.log(newCat);



let secondString = "Hello World Hello";

let secondNewString = secondString.indexOf("Hello", 1);
console.log(secondNewString);



let lastString = "Hello World";

let newLastString = lastString.split("").indexOf("d");
console.log(newLastString);


let fruit = "banana";
let indexArray = [];

let postionofA = 0

while(true){
    let found = fruit.indexOf("a",postionofA)
    console.log(found)

    if(found === -1){
        break
    }

    indexArray.push(found)
    postionofA = found + 1
}

console.log(indexArray)

let str = "Hello World";
console.log(str.indexOf(" "));