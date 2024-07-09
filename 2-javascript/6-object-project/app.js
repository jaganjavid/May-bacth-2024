
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
            <td class="delete">
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

    UI.prototype.deleteBook = function(item){
       item.parentElement.remove();
    }

    UI.prototype.showAlert = function(message, type){

        this.clearAlert();

        // Create a div
        const div = document.createElement("div");

        // Add Class
        div.className = `alert alert-${type}`;

        // Add Text 
        div.innerText = message;

        // Get a show alert parent
        document.querySelector(".show-alert").appendChild(div);

        setTimeout(function(){
            document.querySelector(".alert").remove();
            this.clearAlert();
        }, 3000);

    }
    
    UI.prototype.clearAlert = function(){

        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }

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

  
    const ui = new UI();

    // Validate 

    if (title === "" || author === "" || isbn === "") {

        ui.showAlert("Please fill all the fields", "danger");

    } else {

        const book = new Book(title, author, isbn);

        ui.addBookToList(book);

        ui.showAlert("Book Added", "success");

        ui.clearFields();

    }


});


// Delete Task
document.querySelector("#book-list").addEventListener("click", function(e){

    if(e.target.parentElement.classList.contains("delete")){
        
        const ui = new UI();

        // Delete Book
        ui.deleteBook(e.target.parentElement);
        ui.showAlert("Book Deleted", "success");


    }

})


// Clear All

document.querySelector("#clear").addEventListener("click", function(e){
    
    const ui = new UI();

    ui.clearTasks();

    ui.showAlert("All book clear", "success");


})












// setTimeout(function(){
//     console.log("Hello");
// }, 5000)












// const arr = [1,2,3];

// const x = arr.forEach(function(num){
//    console.log(num);
// });

// console.log(x);

// const y = arr.map(function(num){
//     return num;
// });

// console.log(y);