

const taskInput = document.querySelector("#task");

// Key Down
// taskInput.addEventListener("keydown", runEvent);

// Key Up
// taskInput.addEventListener("keyup", runEvent); // ***

// Key Press
// taskInput.addEventListener("keypress", runEvent);




function runEvent(event){
    console.log(event);
    console.log(`Event Type : ${event.type}`);
    console.log(event.target.value);
}
