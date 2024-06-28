
// Set , Get , Remove, Clear

// console.log(localStorage);

// localStorage.setItem("tasks", "Hello");


console.log(localStorage.getItem("tasks"));



// JSON

// Stringfy, parse

const arr = [1,2,3,4,5];


let arrToString = JSON.stringify(arr);

let stringToArr = JSON.parse(arrToString);


console.log(arr);

console.log(arrToString);
// console.log(typeof arrToString);
// console.log(stringToArr);

localStorage.setItem("tasks", arrToString);
