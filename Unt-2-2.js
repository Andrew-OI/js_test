// 1. Write a JavaScript function to check if given string includes given symbol.

let fun1 = function (a, b) {
    let str = a.indexOf(b);
    if (str !== -1) {
        console.log("It is here!");
    }
}
let fun2 = fun1 ("abcdefg", "fg");

// 2. Write a JavaScript function to check whether a string is blank or not.

let fun3 = function (a) {
    if (a.length == 0) {
        console.log("It is empty")
    }
    else if (a.indexOf(" ") !== -1) {
        console.log("It containes spaces")
    }    
}
let fun4 = fun3("Hello there");

// 3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Andriy Oprofat")) – should be “A.O.”

let fun5 = function (a) {
    let x1 = a.charAt(0);
    let x2 = a.indexOf(" ");
    let x3 = ++x2;
    let x4 = a.charAt(x3);
    let x5 = `${x1}.${x4}.`;
    let x6 = x5.toUpperCase();
    console.log(x6)
}
let fun6 = fun5 ("andriy oprofat");

// 4. Write a JavaScript function that accept two integers and display the larger.

let fun7 = function (a, b) {
    if (a > b) {
        console.log(a);
    }
    if (a < b) {
        console.log(b);
    }
}
let fun8 = fun7(30, 20);

// 5. Write a JavaScript function with conditional statement to sort three numbers.

let fun9 = function (a, b, c) {
    if (a < b && b < c && a < c) {
        console.log(a, b, c);
    }
    else if (a < b && c < b && a < c) {
        console.log(a, c, b);
    }
    else if (b < a && b < c && a < c) {
        console.log(b, a, c);
    }
    else if (b < a && b < c && c < a)  {
        console.log(b, c, a);
    }
    else if (c < b && c < a && b < a) {
        console.log(c, b, a);
    }
    else if (c < a && a < b && c < b) {
        console.log(c, a, b);
    }
}
let fun10 = fun9(52, 102, 11);