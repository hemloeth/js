`slice() is used to extract a part of a string.

Syntax:

string.slice(start, end)

start → from where extraction starts
end → till where extraction happens (excluded)


Rule 1 → Start index is included.
Rule 2 → End index is excluded.

Example:
"Hello".slice(1, 4)
Output: "ell"


Rule 3 → If only start is provided,
slice goes till the end of the string.

Example:
"Hello".slice(2)
Output: "llo"


Rule 4 → If start > end,
slice returns an empty string "".

Example:
"Hello".slice(4, 1)
Output: ""


Rule 5 → slice() supports negative indexes.
Negative indexes count from the end.

Visual:

 H  e  l  l  o
 0  1  2  3  4

-5 -4 -3 -2 -1


Rule 6 → Negative indexes are first converted
into positive indexes.

Formula:

Actual Index = Length + (Negative Index)

Example:
"Hello".slice(-2)

Length = 5

5 + (-2) = 3

Becomes:
slice(3)

Output: "lo"


Rule 7 → If negative start is less than -length,
it is treated as 0.

Example:
"Hello".slice(-10, 3)

Since:
-10 < -5

It becomes:
slice(0, 3)

Output: "Hel"


Rule 8 → If negative end is less than -length,
it is treated as 0.

Example:
"Hello".slice(1, -10)

Becomes:
slice(1, 0)

Output: ""


Rule 9 → If end > length,
slice goes till the end of the string.

Example:
"Hello".slice(1, 100)

Output: "ello"


Rule 10 → If start > length,
slice returns "".

Example:
"Hello".slice(100)

Output: ""


Rule 11 → Positive and negative indexes
can be mixed.

Example:
"Hello World".slice(-5, 10)

Output: "Worl"


Rule 12 → slice() does not modify
the original string.

Strings are immutable.

Example:

let str = "Hello";

str.slice(1, 3);

console.log(str);

Output: "Hello"
`

