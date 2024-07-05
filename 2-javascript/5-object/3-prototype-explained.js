

function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    // this.getFullName = function(){
    //    return this.firstName + " " + this.lastName;
    // }
 
}


// Get Full Name

Person.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

const javid = new Person("Jagan", "Javid");
const akash = new Person("Akash", "Kumar");

// javid.__proto__.__proto__.getFullName = function(){
//     return this.firstName + " " + this.lastName;
// };


console.log(javid);

console.log(javid.getFullName());

const arr = [1,2,3];

console.log(arr);




