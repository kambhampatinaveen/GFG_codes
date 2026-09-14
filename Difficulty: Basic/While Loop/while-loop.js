const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();
let x = parseInt(input);

// code here
let result = [];
while(x >= 0){
    result.push(x);
    x--;
}
console.log(result.join(' '));