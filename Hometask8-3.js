// Make some change to object and append is as new line to existed file

const fs = require("fs");

fs.appendFile("/Git/js_test/student_file.txt","New line added", function (err) {
     if (err) throw err;
 console.log('Done!');

});