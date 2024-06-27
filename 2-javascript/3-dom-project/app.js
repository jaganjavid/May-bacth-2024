
// Define a UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");


loadEventListeners();

function loadEventListeners(){

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Clear Task
    clearBtn.addEventListener("click", clearTask);

}


function addTask(e){

    // To stop browers refresh 
    e.preventDefault();

    if(taskInput.value === ""){
        alert("Please fill the text field");
    }else {

        // Create a Li Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Create a text
        li.innerText = taskInput.value;

        // Create a new link element
        const link = document.createElement("a");

        // Add class to link
        link.className = "delete-item secondary-content";

        // Add Icon HTML
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // Add to li
        li.appendChild(link);

        // Add li to ul
        taskList.appendChild(li);

        taskInput.value = "";

    }


}

function clearTask(){

    
    // The ul
    // document.querySelector(".collection").innerHTML = null;
    // document.querySelector(".collection").innerHTML = "";


    const lists = document.querySelectorAll("li");
    

    lists.forEach(function(li){
        li.remove();
    })


}