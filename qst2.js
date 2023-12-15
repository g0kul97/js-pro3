let readlineSync = require('readline-sync');
let lastnumber = readlineSync.question("Enter the last number : ");

function printNumbers(lastnumber) {
    for (i=1; i<= lastnumber;i++){
        console.log(i);
    }
}
printNumbers(lastnumber) 