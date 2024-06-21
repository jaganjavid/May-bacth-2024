
// Two phases

// 1 - creation
// 2 - excutation

// Function decalaration - Function statement



// function greet(firstName = "John", lastName = "Doe"){    
    
   // Default value
   
//    if(typeof firstName === "undefined"){
//       firstName = "John";
//    }

//    if(typeof lastName === "undefined"){
//     lastName = "Doe";
//    }

//    return `${firstName} ${lastName}`;

// }

// Reuseable

// console.log(greet("Akash", "Kumar"));
// console.log(greet("Jagan", "Javid"));

// Function expression


// var add = function(x){
//     return x + 5;
// }

// console.log(add(5));


// IIFE (Immediately Invoked Function Expression);

// (function(){
//     console.log("IIFE RUN");
// })();


// (function(name = "Javid"){
//     console.log(`Hello ${name}`);
// })("Jagan");

const person = {
    firstName:"Jagan",
    lastName: "Javid",
    getFullName:function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person.firstName);

console.log();

