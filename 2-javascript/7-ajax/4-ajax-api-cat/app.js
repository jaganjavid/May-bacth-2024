
// https://api.chucknorris.io/jokes/random?category=fashion

const categorieInput = document.querySelector("#categories-input");
const input = document.querySelector("#categories-input");
const ul = document.querySelector("ul");



const categories = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
];


function xhrFunction(url){

    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);

    xhr.onload = function(){
       
        if(this.status === 200){

            const result = JSON.parse(this.responseText);

            const joke = result.value;

            const li = document.createElement("li");

            li.innerText = joke;

            ul.appendChild(li);

            input.value = "";

        }

    }

    xhr.send();

}




document.addEventListener("DOMContentLoaded", function(){

    const randomApi = `https://api.chucknorris.io/jokes/random`;

    xhrFunction(randomApi);

    categories.forEach(function(item){

        const btnWrapper = document.querySelector(".all-btn");
        const btn = document.createElement("button");

        btnWrapper.style.display = "flex";
        btnWrapper.style.gap = "10px"
        btn.className = "btn btn-dark categorie-btn"
        btn.innerText = item;
        btnWrapper.appendChild(btn);

    });

    const getAllBtn = document.querySelectorAll(".categorie-btn");


    getAllBtn.forEach(function(btn){

        btn.addEventListener("click", function(e){

            categorieInput.value = e.target.innerText;

        })

    })


})

document.querySelector("form").addEventListener("submit", getJokes);


function getJokes(e){

    e.preventDefault();

    const getInput = input.value;
    
    if(getInput === ""){
        alert("Please select the button");
    }else {
        const getCategories = `https://api.chucknorris.io/jokes/random?category=${getInput}`;
        xhrFunction(getCategories);
    }
}



