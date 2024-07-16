

document.querySelector("#button-1").addEventListener("click", getText);

document.querySelector("#button-2").addEventListener("click", getJson);

document.querySelector("#button-3").addEventListener("click", ExternalApi);


function getText(){

    fetch("text.txt").then(function(res){
        return res.text();
    }).then((data) => {
        document.querySelector(".output").innerHTML = data;
    }).catch((err) => console.log(err));

}

function getJson(){

    fetch("posts.json").then((res) => {
        return res.json();
    }).then(data => {

        let output = "";
        
        data.forEach(post => {
            output += `<li>${post.title}</li>`
        });

        document.querySelector(".output").innerHTML = output;

    }).catch((err) => {
        console.log(err);
    })

}

function ExternalApi(){

    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
        return res.json();
    }).then(data => {

        // console.log(data);

        let output = "";
        
        data.forEach(user => {
            output += `<li>${user.name}</li>`
        });

        document.querySelector(".output").innerHTML = output;

    }).catch((err) => {
        console.log(err);
    })

}





// function getText(){

//     fetch("text.txt").then((res) => {
//         return res.text();
//     }).then((data) => {
//         document.querySelector(".output").innerHTML = data;
//     }).catch(function(err){
//         console.log(err);
//     })

// }



