// if(something){
//     do something
// }else {
//     do something else
// }

const id = 100;


// Equal to value

if(id == "100"){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}

// Not Equal to value

if(id != 100){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}


// Equal to Value and data type

if(id === "100"){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}

// Not equal to value and type
if(id !== 101){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}

// Test if undefined

let greet = "Vanakam";

if(typeof greet === "undefined"){
    console.log(`false : ${greet}`);
} else {
    console.log(`true : ${greet}`);
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}

if(100 <= 99){
    console.log("CORRECT");
}else {
    console.log("INCORRECT");
}

// else if

const color = "blue";

if(color === "red"){
    console.log(`Color is ${color}`);
}else if(color === "blue"){
    console.log(`Color is ${color}`);
}else{
    console.log("No Matched color");
}

// Logical operator

const name = "Javid";
const age = 20;

// AND -- && check both value true or false

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
}else if(age >= 13 && age <=19){
    console.log(`${name} is a teen`);
}else{
    console.log(`${name} is a adult`);
}

// OR -- || check only one true or false
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
}else {
    console.log(`${name} can run in race`);
}