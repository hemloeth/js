`It returns the total number of character in a string`

let name = "rustam ali";
console.log(name.length);

`Exception`

    `
"".length           // 0 — empty string
"hi there".length   // 8 — space is also counted
"hi\n".length       // 3 — \n counts as 1 character
"𝄞".length          // 2 — emoji/special unicode counts as 2 ⚠️

`