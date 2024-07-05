
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}


// Get Full Name
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const javid = new Person("Jagan", 'Javid');


// Customer

function Customer(firstName, lastName, phone, membership){

    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;

}


// Inherit th eperson prototype methods to customers
Customer.prototype = Object.create(Person.prototype);

Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome`;
}

const javidCustomer = new Customer("Jagan", "Javid", "111-1111-111", "Standard");

// Make Customer prototype 
Customer.prototype.constructor = Customer;

console.log(javidCustomer);
console.log(javidCustomer.greeting());


// var x = Object.create({name:"x"});

// console.log(x);

