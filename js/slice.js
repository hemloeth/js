` Slice has been used to extract a part of string from the string basic syntax of slice is 

string.slice(start >  end)

start = from where you want to start

end = till where you want to extract (excluded)

Rule no -1- Start included, end excluded

Rule no -2- if we given start than it will go till the end end will be also included

Rule no -3- If the start > end than it will give empty string ""

Rule no -4- Negative index start from the end 

Rule no -5- if end > length than start from the zero and it will go till the end 

Rule no -6- if negative is greater than length than it will count from the zero till the end 

Strings are immutable 

Rule no - 7 - if the negative end is gretae than lenght than it will treated as 0 
Rule 8 — Positive aur negative mix kar sakte ho:


`

let str = "Hello World"

console.log(str.slice(-20))