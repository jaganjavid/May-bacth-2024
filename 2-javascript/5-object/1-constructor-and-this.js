

function Person(firstName, lastName){

   this.firstName = firstName;
   this.lastName = lastName;
   this.getFullName = function(){
      return this.firstName + " " + this.lastName;
   }

}


const javid = new Person("Jagan", "Javid");
const akash = new Person("Akash", "Kumar");

console.log(javid.getFullName());
console.log(akash.getFullName());