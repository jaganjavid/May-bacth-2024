
const numbers = [4,5,56,76,87,34,23,78,89,90];

let val;

// Get the Array Length

val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get a Single value
val = numbers[0];
val = numbers[6];

// Insert Into array
// val = numbers[2] = 100;

// Find the index of value
val = numbers.indexOf(111); // if array index value match means is return the index else -1;

// Mutating Array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(2000);

// Take off from end
// numbers.pop();
// numbers.pop();

// Take off from the front
// numbers.shift();
// numbers.shift();

// Splice ==> Add && Remove

const fruits = ["apple", "orange", "Kiwi"];

// Splice to remove
// val = fruits.splice(1,1);

// Splice to add if 0 means no element could delete
val = fruits.splice(1,1,"lemon", "test");

console.log(fruits);


// Reverse the array

val = numbers.reverse();

console.log(val);