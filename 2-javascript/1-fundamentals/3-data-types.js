
// Primitive Type onl;y store a single value

// String 
const name = "Jagan";

console.log(name);
console.log(typeof name);

// Number
const age = 27;

console.log(age);
console.log(typeof age);

// Boolean
const hadDinner = true;

console.log(hadDinner)
console.log(typeof hadDinner)

// Null
const box = null;

console.log(box);
console.log(typeof box); // JS BUG

// Undefined

let undef;

console.log(undef);
console.log(typeof undef);




// Refrence Type store collection/ mulitiple of value


// Array

const myArr = ["Javid", 27, true, null, undefined];

console.log(myArr);
console.log(typeof myArr);

// Object are KEY:VALUE pairs OR NAME:VALUE Pairs

const car = {
    name: "BMW", // Property
    color:"Black",
    model:"5 series",
    year:2024,
    petrol:true,
    start: function(){
        console.log("Im started"); // methode
    }
}

console.log(car);
console.log(typeof car);