

const clearBtn = document.querySelector(".clear-tasks"); // BTN

// Mouse Event

// Click
// clearBtn.addEventListener("click", runEvent); // ***

// Double Click
// clearBtn.addEventListener("dblclick", runEvent);

// Mouse Down
// clearBtn.addEventListener("mousedown", runEvent);

// Mouse up
// clearBtn.addEventListener("mouseup", runEvent);

// Mouse Enter
// clearBtn.addEventListener("mouseenter", runEvent);

// Mouse Leave
clearBtn.addEventListener("mouseleave", runEvent);





function runEvent(event){
    console.log(event);
    console.log(`Event Type : ${event.type}`);
}
