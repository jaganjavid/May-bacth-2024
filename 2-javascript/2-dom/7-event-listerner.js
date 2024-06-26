

// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     alert("Hey");
// });

document.querySelector(".clear-tasks").addEventListener("click", onClick);

let count = 0;

document.getElementById("task-title").textContent = count;

function onClick(){

  count += 1;

 

  document.querySelector(".card-action").classList.toggle("rest");

  document.getElementById("task-title").textContent = count;

}

// console.log(document.querySelector(".card-action").classList);


