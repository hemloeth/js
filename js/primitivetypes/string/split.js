`Basic Syntax:

string.split(separator, limit)


.split() converts a string into an array.

It splits the string whenever it finds the separator.


Different types of separators:

""
","
" "
"-"


Examples:

"Hello".split("")
// ["H", "e", "l", "l", "o"]

"a,b,c".split(",")
// ["a", "b", "c"]

"Hello World".split(" ")
// ["Hello", "World"]

"2025-05-06".split("-")
// ["2025", "05", "06"]


Rule 1 → If separator is not provided,
it returns the whole string as a single element array.

Example:

"Hello World".split()

Output:
["Hello World"]


Rule 2 → If separator is not found,
it returns the whole string as one element.

Example:

"Hello World".split(",")

Output:
["Hello World"]


Rule 3 → limit controls how many elements
will be returned.

Example:

"a,b,c,d".split(",", 2)

Output:
["a", "b"]


Rule 4 → Double spaces can create empty strings.

Example:

"Hello  World".split(" ")

Output:
["Hello", "", "World"]


Rule 5 → split() does not modify
the original string.

Strings are immutable.


Rule 6 → If separator is "",
every character becomes a separate element.

Example:

"Hello".split("")

Output:
["H", "e", "l", "l", "o"]
`