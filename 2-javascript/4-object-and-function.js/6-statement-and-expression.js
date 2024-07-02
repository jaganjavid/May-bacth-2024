

// Function statement

function greet(){
    console.log("Hai");
}

greet();

// Function expression

// Assign them to var

var anonymousGreet = function(){
    console.log("Hello");
}

// anonymousGreet();


// Pass them around

function log(a){
    a();
}
// log("Hello");
// log(5);
// log(true);
// log([]);
// log({});

log(anonymousGreet);

// Create them on fly

log(function(){
    console.log("Hello");
})


