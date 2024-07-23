

function OurHttp(){

    this.http = new XMLHttpRequest();

}


// Make an HTTP Get Request

OurHttp.prototype.get = function(url, callback){

    this.http.open("GET", url, true);

    let self = this;

    this.http.onload = function(){
    
        if(this.status === 200){

            callback(this.responseText);

        } else {
            callback(`404`);
        }


    }

    this.http.send();

}