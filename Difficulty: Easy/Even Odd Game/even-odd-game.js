const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let n = input[0];

// code here
if (n % 2 !== 0) {
    console.log("You");
} else {
    console.log("Friend");
}
