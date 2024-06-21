

// For Loop

// Loop can execute a block of code number of times

for(let i = 0; i <= 10; i++){

    if(i === 2){
        console.log(`2 is fav number`);
        continue;
    }

    if(i === 5){
        console.log("Hits 5 stop the loop");
        break;
    }

    // console.log(i);
}


const arr = ["Hello", 123, true];

// for(let i = 0; i < arr.length; i++){
//    console.log(arr[i]);
// }

// arr.forEach(function(element, index, arr){

//     console.log(element, index, arr);

// });

Array.prototype.customForeach = function(array, callback){
    for(let i = 0; i<array.length; i++){
        callback(array[i], i, array);
    }
}

arr.customForeach(arr, function(element){
    console.log(element);
})


