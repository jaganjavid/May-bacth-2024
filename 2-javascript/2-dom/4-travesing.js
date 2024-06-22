

let val;

const list = document.querySelector(".collection"); //ul
const listItem = document.querySelector("li:first-child");

val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2];
val = list.childNodes[3];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[3].nodeName;
val = list.childNodes[0].nodeType;
val = list.childNodes[1].nodeType;
val = list.childNodes[3].nodeType;

// 1 - Element
// 3 - Text Node
// 8 - Comment


// Get the childern element node

val = list.children; // HTML COLLECTION
val = list.children[0];
val = list.children[0].children[0];

// FirstChild
val = list.firstElementChild;

// LastChild
val = list.lastElementChild;

// Count child element
val = list.childElementCount;

// Get parent node
val = list.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;


val = listItem;

// Get Pervious sibling
// val = listItem.previousElementSibling.previousElementSibling;

// Get next Sibling
val = listItem.nextElementSibling.nextElementSibling.nextElementSibling;

console.log(val);