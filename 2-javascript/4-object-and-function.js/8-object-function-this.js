
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
        
        var javid = this; //c

        var setName = function(newName){
            javid.name = newName; 
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