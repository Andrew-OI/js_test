// Create a variable student and set ‘name’, ‘surname’ and ‘rate’ in json format

let randomstring = require("randomstring");

let x1 = randomstring.generate({
    length: 5,
    charset: 'alphabetic'
});

let x2 = randomstring.generate({
    length: 5,
    charset: 'alphabetic'
});

let x3 = Math.floor((Math.random()*100));

let student = {
    "name" :  x1,
    "surname" :  x2,
    "rate" :  x3
};

// Use JSON.stringify() method to make a JSON string 

let x4 = JSON.stringify(student)
console.log(x4)

// write it into file (not existed)

const fs = require("fs");

fs.writeFile("/Git/js_test/student_file.txt", x4, function (err) {
    if (err) throw err;
    console.log('Saved!')
});