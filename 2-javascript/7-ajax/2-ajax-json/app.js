
document.getElementById("btn-1").addEventListener("click", loadjson);


document.getElementById("btn-2").addEventListener("click", loadjsons);


function loadjson(){


    // Create a XHR Object
    const xhr = new XMLHttpRequest();


    // open
    xhr.open("GET", "customer.json", true);

    xhr.onload = function(){

        if(this.status === 200){
           
            const customer = JSON.parse(this.responseText);

            const output = `
             <ul>
               <li>${customer.id}</li>
               <li>${customer.name}</li>
               <li>${customer.company}</li>
               <li>${customer.phone}</li>
             </ul>
            `;

            document.getElementById("customer").innerHTML = output;

        }

        if(this.status === 404){
            document.getElementById("customer").innerHTML = `<h1>${this.statusText
            }</h1>`;
        }

        

    }

    xhr.send();
    


}



function loadjsons(){


    // Create a XHR Object
    const xhr = new XMLHttpRequest();


    // open
    xhr.open("GET", "customers.json", true);

    xhr.onload = function(){

        if(this.status === 200){
           
            const customers = JSON.parse(this.responseText);

            // console.log(customers)

            let output = "";

            customers.forEach(function(customer){

               output += `<ul>
                     
               <li>ID : ${customer.id}</li>
               <li>Name : ${customer.name}</li>
               <li>Company : ${customer.company}</li>
               <li>Phone : ${customer.phone}</li>
               </ul>`;
               

            });
            

            document.getElementById("customers").innerHTML = output;

        }

        if(this.status === 404){
            document.getElementById("customer").innerHTML = `<h1>${this.statusText
            }</h1>`;
        }

        

    }

    xhr.send();
    


}