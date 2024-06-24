


// Create Element
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Create a text
li.innerText = "Hello";

// Create a link element
const link = document.createElement("a");

// Add class to link
link.className = "delete-item secondary-content";

// Add icon html
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Append link to li
li.appendChild(link);


document.querySelector(".collection").appendChild(li);