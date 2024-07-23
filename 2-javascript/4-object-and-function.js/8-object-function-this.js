
// Global;

console.log(this);


function a(){
   
    console.log(this);

}

a();

var b = function(){
    console.log(this);
}

b();


var c = {
    name: "The c Object",
    
    log:function(){

        console.log(this); // c 
        
        var self = this; //c

        var setName = function(newName){

            // this looks for the window object when we call direct this in a methode function, so im giving reference outside with name called self

            console.log(this);

            self.name = newName; 
        }

        setName("This is a Upadated c object");


    }
}

// c.log();

// console.log(c);

var e = {name:"jagan"};

function test(){

    var e = {name:"javid"};

    console.log(e);

}

function test2(){

    var e = {name:"Akash"};

    var d = e;

    e.name = "Arun";

    console.log(d);

}

test();

console.log(e);

test2();