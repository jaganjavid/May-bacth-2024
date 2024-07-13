

const button = document.getElementById("btn-1");

const output = document.querySelector(".output");


button.addEventListener("click", function(e){

   const xhr = new XMLHttpRequest();

   xhr.open("GET","https://api.chucknorris.io/jokes/random", true);

   xhr.onload = function(){

      if(this.status === 200){

        const result = JSON.parse(this.responseText);

        console.log(result);

        output.innerText = result.value;
        

      } else{
         console.log("error");
      }

   }

   xhr.send();


})