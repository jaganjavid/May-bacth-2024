

function OurHttp(){

    this.http = new XMLHttpRequest();

}


// Make an HTTP Get Request

OurHttp.prototype.get = function(url, callback){

    this.http.open("GET", url, true);

    let self = this;

    this.http.onload = function(){

        // Window
        // console.log(this);

    
        if(self.http.status === 200){

            callback(self.http.responseText);

        } else {
            callback(`404`);
        }

    }

    this.http.send();

}