

class EasyHTTP {

    // Make an httt get request

    get(url){

        return new Promise((resolve, reject) => {
           fetch(url)
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject("Some thing went worng"));
        })

    }

    // Create a post
    post(url, data){

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:"POST",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        })

    }

    // Update a post
    put(url, data){

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:"PUT",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        })

    }


    // Delete
    delete(url){

        return new Promise((resolve, reject) => {

            fetch(url, {
                method:"DELETE",
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve("Resource Delete"))
            .catch(err => reject(err));

        })

    }


}