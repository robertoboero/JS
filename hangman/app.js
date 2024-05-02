//Primitive Value Types: String, Number, Boolean, null, undefined
// Array: myArray ---> Array.prototype  ---> Object.prototype ---> null
// Function: myFunction ---> Function.prototype --> Object.prototype ---> null

const team = new Array(["Luket", "Rob", "Bob"]);

console.log(team.hasOwnProperty(""));

const getScore = () => 1;
console.dir(getScore);
