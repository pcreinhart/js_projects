console.log ("Word3");
// REQUIRES : npm install readline - sync but I'm trying it without it. 

let readline = require('readline-sync');

let name = readline.question("What is your nameo ? ");
let age = readline.question ("How old are you?");
let eyes = readline.question ("And your eyes ?");

console.log(`Your name is ${name}`);
console.log(`Your age is ${age}`);
console.log(`Your eyes are ${eyes}`)

