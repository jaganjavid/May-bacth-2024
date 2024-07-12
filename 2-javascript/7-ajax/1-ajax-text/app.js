



document.getElementById("btn").addEventListener("click", loadData);


function loadData(){

    // Create a XHR Object

    const xhr = new XMLHttpRequest();

    // Open
    xhr.open("GET", "data.txt", true);

    xhr.onload = function(){

        console.log(this);

        if(this.status === 200){

            document.getElementById("output").innerHTML = `
             <h1>${this.responseText}</h1>
            `;

        }

        if(this.status === 404){
            document.getElementById("output").innerHTML = `
            <h1>${this.statusText
            }</h1>
           `;
        }

        

    }

    xhr.send();
    
}