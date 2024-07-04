

function greet(firstName, lastName, language){

    if(arguments.length === 0){
       console.log("Missing Parameters");
       console.log("------------------");
       return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments);

    console.log("arg[0]:", arguments[0]);
    console.log("arg[0]:", arguments[1]);
    console.log("arg[0]:", arguments[2]);

}

greet("Jagan", "Javid", "Tamil");