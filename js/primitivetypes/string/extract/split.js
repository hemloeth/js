`Rule 1 — Basic: Separator milne par string toot ti hai → array banta hai
js"a,b,c".split(",") // ["a","b","c"]
Rule 2 — Empty string separator: Har character alag ho jaata hai
js"hello".split("") // ["h","e","l","l","o"]
Rule 3 — No separator: Poori string ek element ban jaati hai
js"hello".split() // ["hello"]
Rule 4 — Limit argument: Sirf utne hi elements aate hain
js"hello".split("",3) // ["h","e","l"]
Rule 5 — Separator na mile: Poori string ek element ban jaati hai
js"hello".split("x") // ["hello"]
Rule 6 — Consecutive separators: Beech mein empty string aati hai
js"a,,b".split(",") // ["a","","b"]
Rule 7 — Empty string input: Ek empty string wala array aata hai
js"".split(",") // [""]`