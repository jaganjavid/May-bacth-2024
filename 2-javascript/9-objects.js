
// Key : Value || Name : Value

const person = {
    // Properties
    fistName: "Jagan",
    lastName:"Javid",
    age: 27,
    email:"jagan@email.com",
    hadDinner:false,
    hobbies:["music", "sports"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName:function(){
        return `${this.fistName} ${this.lastName}`;
    }
}

let val;


val = person;

// Get a specific value

val = person.fistName;
val = person.lastName;
val = person.age;
val = person.email;
val = person.hadDinner;
val = person.hobbies[1];
val = person.address.state;
val = person.getFullName();


console.log(val);