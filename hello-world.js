console.log("HELLO WORLD");
const fs = require("fs");
fs.appendFileSync("Welcome.txt","HelloNode");


fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
