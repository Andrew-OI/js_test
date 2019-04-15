// Read this string from file and convert to object

const fs = require("fs");

fs.readFile("/Git/js_test/student_file.txt",'utf8', function (err, data) {
    if (err) throw err;
console.log(data);

let x = JSON.parse(data);
console.log(x)
});