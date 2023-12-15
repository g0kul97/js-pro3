let readlineSync = require('readline-sync');
let n = readlineSync.question("Enter the number : ");

let sum=0;
let square=0;

function sumOfSquares (n) {
    for (i=0;i<=n;i++) {
        
        square=i**2;
        sum+=square;
    }
    console.log("The sum of squares =",sum);
}
sumOfSquares (n);