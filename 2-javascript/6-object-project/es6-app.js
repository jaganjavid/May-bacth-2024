

// Book Constructor

class Book {

    constructor(title, author, isbn) {

        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }

}


class UI {


    addBookToList(book) {

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

    clearFields() {
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";
    }

    clearTasks() {
        document.querySelector("#book-list").innerHTML = "";
    }

    deleteBook(item) {
        item.parentElement.remove();
    }

    showAlert(message, type) {
        this.clearAlert();

        // Create a div
        const div = document.createElement("div");

        // Add Class
        div.className = `alert alert-${type}`;

        // Add Text 
        div.innerText = message;

        // Get a show alert parent
        document.querySelector(".show-alert").appendChild(div);

        setTimeout(function () {
            document.querySelector(".alert").remove();
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {

        const currentAlert = document.querySelector(".alert");

        if (currentAlert) {
            currentAlert.remove();
        }

    }
}

class Storage {

    getBooks() {

        let books;

        if (localStorage.getItem("books") === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

    }

    addbooks(book) {

        const books = this.getBooks();

        books.push(book);

        // Set into localStorage
        localStorage.setItem("books", JSON.stringify(books))

    }

    displayBook() {

        const books = this.getBooks();

        books.forEach(function (book) {

            const ui = new UI();

            ui.addBookToList(book);

        });

    }

    removeBook(isbn) {

        const books = this.getBooks();

        books.forEach(function (book, index) {
            if (book.isbn === isbn) {

                books.splice(index, 1);

            }
        })

        localStorage.setItem("books", JSON.stringify(books));

    }

    clearBook() {
        localStorage.removeItem("books");
    }

}


const storage = new Storage();

document.addEventListener("DOMContentLoaded", storage.displayBook());



// Event Listen for submit

document.querySelector("#book-form").addEventListener("submit", function (e) {


    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;


    const ui = new UI();
    const storage = new Storage();

    // Validate 

    if (title === "" || author === "" || isbn === "") {

        ui.showAlert("Please fill all the fields", "danger");

    } else {


        let bookExist = false;


        const books = document.querySelectorAll("#book-list tr");

        for (const bookRow of books) {

            const existingTitle = bookRow.querySelector("td:nth-child(1)").innerText;
            const existingIsbn = bookRow.querySelector("td:nth-child(3)").innerText;

            if (existingTitle === title || existingIsbn === isbn) {
                bookExist = true;
                break;
            }

        }


        if (bookExist) {
            ui.showAlert("Book with same title and isbn they already exist", "danger");
        } else {
            const book = new Book(title, author, isbn);

            ui.addBookToList(book);

            ui.showAlert("Book Added", "success");

            storage.addbooks(book);

            ui.clearFields();
        }



    }


});


// Delete Task
document.querySelector("#book-list").addEventListener("click", function (e) {

    if (e.target.parentElement.classList.contains("delete")) {


        const isbn = e.target.parentElement.previousElementSibling.innerText;




        const ui = new UI();
        const storage = new Storage();

        // Delete Book
        ui.deleteBook(e.target.parentElement);

        storage.removeBook(isbn);

        ui.showAlert("Book Deleted", "success");


    }

})


// Clear All

document.querySelector("#clear").addEventListener("click", function (e) {

    const ui = new UI();

    const storage = new Storage();

    ui.clearTasks();

    storage.clearBook();

    ui.showAlert("All book clear", "success");


})

