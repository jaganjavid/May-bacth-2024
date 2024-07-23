
// async function myFunc(){

//     const promise = new Promise((reslove, reject) => {
//         setTimeout(() => reslove("Hello"), 3000)
//     })


//     const error = false;

//     if(!error){
//         const res = await promise;
//         return res;
//     } else{
//         await Promise.reject(new Error("Something went worng"));
//     }

// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));




async function getUsers(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // Only proceed once it resolve
    const data = await response.json();

    if(data){
        return data
    }else {
        await Promise.reject(new Error("Something went worng"))
    }

}


getUsers().then(users => console.log(users));