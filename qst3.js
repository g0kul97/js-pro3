let readlineSync = require('readline-sync');
let n = readlineSync.question("Enter the number : ");

function printEvenNumbers(n) {
    for (i=0;i<=n;i++) {
        if (i%2===0) {
            console.log(i);
        }
    }
}
printEvenNumbers(n)