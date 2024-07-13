
// https://api.chucknorris.io/jokes/random?category=fashion

const categorieInput = document.querySelector("#categories-input");

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


document.addEventListener("DOMContentLoaded", function(){

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



