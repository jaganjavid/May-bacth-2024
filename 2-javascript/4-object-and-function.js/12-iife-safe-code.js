

// IIFE

(function(global, name){

    // console.log(this);

    var greeting = "Hey";
    
    global.greeting = "Vanakam";


    console.log("IIFE", greeting + " " + name);

})(window, "Javid");

console.log(greeting);
greeting = "Hola";
console.log(window);
console.log(greeting);

const arr = [1,2,3];

console.log(arr);


