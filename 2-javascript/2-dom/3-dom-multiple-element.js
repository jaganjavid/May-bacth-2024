

// document.getElementsByClassName("");

const items = document.getElementsByClassName("collection-item"); // HTML COLLECTION


// items[0].style.backgroundColor = "blue";
// items[1].style.backgroundColor = "blue";
// items[2].style.backgroundColor = "blue";
// items[0].style.color = "#ffffff";
// items[0].innerText = "Hello";

// for(let i = 0; i< items.length; i++){
//    items[i].style.backgroundColor = "blue";
// }

// Convert items to array

// let lists = Array.from(items);

// lists.forEach(function(item){
//     item.style.backgroundColor = "blue";
// })

// document.querySelectorAll();

const listItems = document.querySelectorAll(".collection-item"); // NodeList

listItems.forEach(function(item, index, nodelist){
    item.style.backgroundColor = "blue";

    console.log(index);

    console.log(nodelist);
})




const arr = [1,2,3];

console.log(arr);

