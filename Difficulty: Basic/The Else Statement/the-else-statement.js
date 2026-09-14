const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let a = input[0];

// code here
if (a > 100){
    console.log("Big")
}
else if(a <= 100){
    console.log("Small")
}