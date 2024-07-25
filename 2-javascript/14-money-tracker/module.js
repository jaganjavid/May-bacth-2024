

const person1 = (function(){

    // Private
    const firstName = "Jagan";
    const lastName = "Javid";


    // Public
    return {

        getFullName: function(x, y){
            return x + " " + y;
        }

    }


})();

console.log(person1.getFullName("Jagan", "Javid"));

