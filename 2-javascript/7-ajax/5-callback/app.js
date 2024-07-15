

const posts = [
    {title:"post 1", body:"This is a post one"},
    {title:"post 2", body:"This is a post two"}
];


// SNYC

// function createPost(post){

//     setTimeout(function(){
//         posts.push(post);
//     },3000);

// };

// function getPosts(){
//     setTimeout(function(){

//         let output = "";

//         posts.forEach(function(post){

           
//             output += `<li>${post.title}</li>`;

//         });

//         document.body.innerHTML = output;

//     },2000)

// }

// createPost({title:"post 3", body: "This is post three"});

// getPosts();


// Async


function createPost(post, callback){

    setTimeout(function(){
        posts.push(post);
        callback();
    },3000);

};


function getPosts(){
    setTimeout(function(){

        let output = "";

        posts.forEach(function(post){

           
            output += `<li>${post.title}</li>`;

        });

        document.body.innerHTML = output;

    },2000)
}

createPost({title:"post 3", body: "This is post three"}, getPosts);