`It checks wether a substring exist or not it return true and false as output`

`1 Question`
let str = "Mujhe chai bahut pasand hai";

console.log(str.includes("Chai"))

`Ans- It give false because includes take care of the case sensitivity as well`


`2 Question`

"JavaScript is fun".includes("")

`Ans - True because in the includes empty string always returns true`

`Question 3 `

"Hello World".includes("World", 7)

`Ans- False because the index 7 from where we start the searching but the World is at 6 `

`Question 4 `

"Hello World".includes("Hello", -10)

`Ans - true because negative will be treats as 0`

`Question 5`
"Hello World".includes("World", NaN)

`Ans - true because NaN treats as 0 as well`

`RULES

Case-sensitive
"" hamesha true
Negative position → 0
Position > length → false
Position nahi diya → 0 se start
NaN position → 0
Number auto string mein convert
`