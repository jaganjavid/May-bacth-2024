
function greet(firstName, lastName, language){

    return firstName + " " + lastName + " " + language;

}

function tamilGreet(language){
    
    return greet("Jagan", "Javid", language);
    
}

function englishGreet(language){
    return greet("Akash", "Kumar", language);
}


console.log(tamilGreet("tn"));
console.log(englishGreet("en"));