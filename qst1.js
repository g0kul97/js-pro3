let readlineSync = require('readline-sync');
let Username = readlineSync.question("Please enter your name : ");

function greetmessage(name) {
    
    return "hellow"+" "+ name;
}
let greeting =  greetmessage(Username);

console.log( greeting);
