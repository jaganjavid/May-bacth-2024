
const github = new Github();

const ui = new UI();

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const getInput = document.querySelector("#search-user").value;
    
    if(getInput === ""){
        alert("Fill the field")
    } else {
        
        github.getUser(getInput)
        .then((data) => {
            ui.showProfile(data)
            document.querySelector("#search-user").value = "";
        })
        .catch(err => console.log(err));

    }

})