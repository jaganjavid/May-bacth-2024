

// const sayHello = function(){
//     console.log("Hello");
// }

// sayHello();

// Arrow Function

// const sayHello = () => {
//     console.log("Hello");
// }

// One line function does not need a braces

// const sayHello = () => console.log("Hello");

// One live return
// const sayHello = () => "Hello";

// const sayHello = function(){
//     return "Hello";
// }

// return object

// const sayHello = () => ({msg:"Hello"});

// Single param doest not need a parenthesis

// const sayHello = name => console.log(`Hello ${name}`);
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


// console.log(sayHello("Jagan", "Javid"));

const users = ["Javid", "Jagan", "Akash", "Arun"];

// users.forEach(function(arr){

//     console.log(arr);

// })

// users.forEach((user, index) => {
//     console.log(`${user} - ${index}`);
// })


const getUserNameLength = users.map((user) => {
    return user.length;
})

console.log(getUserNameLength);