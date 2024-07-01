

// ***

var person = {
    firstName: "Jagan",
    lastName: "Javid",
    age:27,
    address: {
        street:"222 main st",
        city: "Chennai",
        state:"TN"
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.address.city);
console.log(person.getFullName());

