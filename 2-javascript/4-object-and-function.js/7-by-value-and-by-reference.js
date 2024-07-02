

// By value (Primitive Types) its a copy

var a = 5;

var b;

b = a;

a = 2;

console.log(a);
console.log(b);

// By Reference (all object)

var c = {
    greeting: "Hai"
}

var d;

d = c;

d.greeting = "Hello";

console.log(c);
console.log(d);


