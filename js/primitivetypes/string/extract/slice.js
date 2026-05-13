`What it does: Extracts a part of the string and returns it as a new string.
`
str.slice(startIndex, endIndex)

`Rules

slice() ke saare rules:
Rule 1 — Basic: End index exclusive hota hai
js"JavaScript".slice(0, 4) // "Java" (0,1,2,3 tak)
Rule 2 — No end index: End tak sab aata hai
js"JavaScript".slice(4) // "Script"
Rule 3 — Negative index: End se count hota hai
js"JavaScript".slice(-6) // "Script"
Rule 4 — Negative to positive convert:
length + negative = actual index
10 + (-6) = index 4
Rule 5 — Same start & end: Empty string aati hai
js"JavaScript".slice(4, 4) // ""
Rule 6 — Start > End: Empty string aati hai
js"JavaScript".slice(7, 4) // ""
Rule 7 — Dono negative: Dono convert hote hain phir slice hota hai
js"JavaScript".slice(-3, -1) // "ip"


`

