

const http = new EasyHTTP();


http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));


// User data

const data = {
    name: "Jagan Javid",
    username:"Jagan_Javid",
    email:"jj@gmail.com"
}

http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.put("https://jsonplaceholder.typicode.com/users/9", data)
.then(data => console.log(data))
.catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/7")
.then(data => console.log(data))
.catch(err => console.log(err));


