
var arr = [
    1,
    "Hello",
    true,
    {
        name:"javid"
    },
    [1,2,3],
    function(name){
        console.log(`Greeting: ${name}`)
    },
    undefined,
    null
];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3].name);
console.log(arr[4][1]);
console.log(arr[5]("Javid"));
console.log(arr[7]);