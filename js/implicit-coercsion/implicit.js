`Coercion means converting one type to another

two types of Coercion
- Implicit coercion
- Explicit coercion

Explicit coercion - when you explicitly convert a value to a different type
Implicit coercion - when the JavaScript engine automatically converts a value to a different type



1. String coercion — The + operator has two jobs — addition and string concatenation.
When either side is a string, JS converts the other side to a string too.

"5" + 3 = "53"
"5" + true = "5true"
"5" + null = "5null"
"5" + undefined = "5undefined"
1 + 2 + "5" = "35"

"5" + 2 + 4 = "524"

2. Number coercion — These operators only do math. So JS tries to convert everything to a number.

"5" - 2 = 3
"5" * 2 = 10
"5" / 2 = 2.5
2-"5" = -3
"5" - true = 4
"6" - false = 6
"5" - null   // 5    — null becomes 0
"5" - ""     // 5    — "" becomes 0
"5" - "abc"  // NaN  — "abc" can't become a number


`;

console.log(5 - "10");
