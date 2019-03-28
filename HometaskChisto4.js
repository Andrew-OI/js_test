// 1. Write a JavaScript function to get the last element of an array

function getLast (al) {
    let lastIs = al.pop();
    console.log(lastIs);
}
let gl = getLast (a = ["Red", "Blue", "Yellow", "Green"])


// 2. Write a simple JavaScript program to join all elements of the following array into a string

function getTogether (ab) {
    let tog = ab.join();
    console.log(tog);
}
let gt = getTogether (al = ["Red", "Blue", "Yellow", "Green"])

// 3. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array

function summar (a, b) {
    for (i = 0; i < a.length; i++) {
        console.log(a[i] + b[i])
    }
}
let strt = summar (a = [5, 6, 7], b = [8, 9, 10])

// 4. Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();

let rect = {
    width: 10,
    height: 15,
    getArea:  function () {return this.width * this.height},
    getPerimeter: function () {return (this.width + this.height) * 2}
};
let x1 = rect.getArea ();
let x2 = rect.getPerimeter ();
console.log(`Area is ${x1}, Perimeter is ${x2}`);