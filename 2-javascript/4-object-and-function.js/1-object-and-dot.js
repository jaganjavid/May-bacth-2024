

var person = new Object();

person["firstName"] = "Jagan"; // Property
person["lastName"] = "Javid";
person.age = 27; // ***

person.address = new Object();
person.address.street = "111 main st";
person.address.city = "chennai";
person.address.state = "TN";

// Method
person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}


console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.city);
console.log(person.age);
console.log(person.getFullName());