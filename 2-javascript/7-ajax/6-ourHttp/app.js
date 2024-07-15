

const http = new OurHttp();


// Get Post

http.get("https://jsonplaceholder.typicode.com/posts", function(posts){

    if(!posts){
        console.log(posts);
    } else {
        console.log(JSON.parse(posts));
    }
    
})

http.get("https://jsonplaceholder.typicode.com/users", function(posts){

    if(!posts){
        console.log(posts);
    } else {
        console.log(JSON.parse(posts));
    }
    
})


