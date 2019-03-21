// 1. Write a JS program to compute and print the sum of the two given integers

let int1 = 10;
let int2 = 15;
console.log(int1 + int2);

function sum(a, b) {
    let x = a + b;
    return x;
}
let start1 = sum(33, 22);
console.log(start1);

// 2. Write a JS program to create a new string adding “Test_" in front of a given string

let str1 = "Test_";
let str2 = "One";
let str3 = str1 + str2;
console.log(str3);

function str4 (str5, str6) {
    console.log(str5 + str6);
}
let str_4 = str4("Test_", "two");

// 3. Write a JS program to combine and print your first, last name and age

let st1 = "Andy";
let st2 = "Oprofat";
let st3 = 31;
console.log(`My name is ${st1}, my family name is ${st2}, I'm ${st3} years old.`);

function st4 (x, y, z) {
    console.log(`My name is ${x}, my family name is ${y}, I'm ${z} years old.`);
}
let st4_1 = st4 ("Andy", "Oprofat", 31);

// 4. Write a JS program to check a given integer is bigger than 100

function comp (x1) {
    if (x1 > 100) {
        console.log("Given integer is bigger than 100")
    }
    else {
        console.log("Given integer is less or equal to 100");
    }
}
let x3 = comp(510);

// 5. Write a JS program to find if the first number is larger from the two given positive integers

function comp_1 (x, y, z) {
    if (x > y && x > z) {
        console.log("First integer is bigger than the second and the third ones");
    }
    else {
        console.log("It is equal or less than the others");
    }
}
let x_3 = comp_1 (50, 20, 30);

// 6. Write a JS program to check two given numbers and return true if one of the number is 50 or if their sum is 50

function comp_2 (x, y) {
    if (x == 50 || y == 50) {
        console.log("This is true");
    }
    else if (x + y == 50) {
        console.log("This is true");
    }
    else {
        console.log("This is false");
    }
}
let x_4 = comp_2 (25, 25);

// 7. Write a JS program check if a given positive number is a multiple of 3 or a multiple of 7

function comp_3 (x) {
    if (x % 3 == 0) {
        console.log("It is a multiple of 3");
    }
    else if ( x % 7 == 0) {
        console.log("It is a multiple of 7");
    }
    else {
        console.log("It is not a multiple of 3 or 7");
    }
}
let x_5 = comp_3 (28);
