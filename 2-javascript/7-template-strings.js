
const name = "Javid";
const age = 27;
const job = "Web Dev";
const city = "Chennai";

let html;


// Without template strings
// html = "My name is " + name + " " + "im" + " " + age + " " + "My job is " + job + " " + "and im from " + " " + city;




// With Template Strings (ES6)

html = `My name is ${name} im ${age} My job is ${job} im from ${city}`;


console.log(html);




// const x = "Bruh";
// const y = "Bro";
// const z = `Brroooo`;
// console.log(x);
// console.log(y);
// console.log(z);