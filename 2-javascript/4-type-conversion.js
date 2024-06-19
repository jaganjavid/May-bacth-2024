
let val;

// Number to string

val = String(555);
val = String(5 + 5);

// Bool to String

val = String(true);
val = String(false);

// Arr to String
val = String([1,2,3,4,5]);

// String Number
val = Number("5 + 5"); // Not An Number

// Boolean to Number

val = Number(true);
val = Number(false);
val = Number(null);
val = Number("Hello"); // NaN
val = Number([1,2,3,4,5]); // NaN

val = parseInt("100.35");
val = parseFloat("100.35");

console.log(val);
console.log(typeof val);