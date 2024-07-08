
// Book constructor

function Book(title, author, isbn) {

    this.title = title;
    this.author = author;
    this.isbn = isbn;

}

// UI constructor

function UI() {


    // Add Book to UI

    UI.prototype.addBookToList = function (book) {

        const list = document.querySelector("#book-list");

        // Create a tr element

        const row = document.createElement("tr");

        row.innerHTML = `
             <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>
                <span class="btn btn-danger">X</span>
            </td>
        `;

        list.appendChild(row);

    }

    UI.prototype.clearFields = function(){
        document.querySelector("#title").value  = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    UI.prototype.clearTasks = function(){
        document.querySelector("#book-list").innerHTML = "";
    }
}

// Stroage

function Storage(){

    // Prototype

}


// Event Listen for submit

document.querySelector("#book-form").addEventListener("submit", function (e) {


    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    // Validate 

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all the fields");
    } else {

        const ui = new UI();

        const book = new Book(title, author, isbn);

        ui.addBookToList(book);

        ui.clearFields();

    }


});


// Clear All

document.querySelector("#clear").addEventListener("click", function(e){
    
    const ui = new UI();

    ui.clearTasks();


})



const arr = [1,2,3];

const x = arr.forEach(function(num){
   console.log(num);
});

console.log(x);

const y = arr.map(function(num){
    return num;
});

console.log(y);