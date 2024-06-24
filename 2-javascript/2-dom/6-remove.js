

const list = document.querySelectorAll("li"); // Nodelist

// list[0].remove();
// list[1].remove();
// list[2].remove();

// list.forEach(function(item){
//    item.remove();
// })


// Class & Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList; // DOMTokenList

// val = link.classList[0];



val.add("jagan");

// val.remove("jagan");

val.forEach(function(cls){
    console.log(cls); 
})

console.log(val.contains("jagan"));

val.replace("jagan", "javid");


console.log(val);







