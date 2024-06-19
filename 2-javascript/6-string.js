
const firstName = "Jaganz";
const lastName = "Javid";
const age = 27;


let val;

// Adding String
val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " doe";
val += " doe";

val = "Hello, My Name is " + firstName + " " + "and im " + age;

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Get index of char

val = firstName[0];
val = firstName[1];

// ChayAt
val = firstName.charAt("2");

// Get a lastIndex
val = firstName.charAt(Math.abs(-1));




console.log(val);