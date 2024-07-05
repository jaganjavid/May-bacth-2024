

class Person{

    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

}

class Customer extends Person{

    constructor(firstName,lastName, phone, membership){

        super(firstName,lastName);
        this.phone = phone;
        this.membership = membership;

    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName} welcome`;
    }

}


const javid = new Person("Jagan", "Javid");
const javidCustomer = new Customer("Jagan", "Javid","111-1111-1111", "Standard");


console.log(javidCustomer);
console.log(javidCustomer.greeting());