`in javascript everything is an number no decimal no negative only a number
0.99 is an number
9 is an number
-10 is an number
Number("42");    // 42
Number("42.99"); // 42.99
Number(true);    // 1
Number(false);   // 0
Number(null);    // 0

Number("42");     // 42
Number("42.99");  // 42.99
Number("  42  "); // 42 — spaces ignore

Number("abc");    // NaN
Number("42abc");  // NaN — parseInt se alag!
Number("");       // 0 — empty string → 0

Number(null);      // 0
Number(undefined); // NaN

Number(Infinity);  // Infinity
Number(-Infinity); // -Infinity

Number([]);    // 0 — empty array
Number([42]);  // 42 — single element
Number([1,2]); // NaN — multiple elements

Number({});  // NaN



`;
