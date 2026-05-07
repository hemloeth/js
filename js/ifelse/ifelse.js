`Basic Structure

if (condition) {
  // runs if condition is true
} else {
  // runs if condition is false
}
`



let age = 18

if(age < 13){
    console.log("child")
}else if(age >= 13 && age <18){
    console.log("Teenager")
}else{
    console.log("Adult")
}

let temp = 10

if(temp <= 10){
    console.log("Very Cold")
}else if(temp > 10 && temp <= 20){
    console.log("Cold")
}else if(temp > 20 && temp <= 30){
    console.log("Warm")
}else{
    console.log("Hot")
}

let num = 0

if(num > 0 ){
    console.log("Positive")
    if(num % 2 === 0){
        console.log("Even")
    }else{
        console.log("Odd")
    }
}else if(num < 0){
    console.log("Negative")
}else{
    console.log("Zero")
}

let ages = 18
let hasLicencse = false
if(ages >= 18){
    if(hasLicencse){
        console.log("Can drive")
    }else{
        console.log("Need a license")
    }
}else{
    console.log("Too Young to drive")
}

let username = "admin"
let password = "1234"

if(username === "admin"){
    if(password === "1234"){
        console.log("Login Successful")
    }else{
        console.log("Wrong Password")
    }
}else{
    console.log("User Not Found")
}