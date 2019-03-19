// Write a JavaScript function to get the last element of an array


function list(a) {
    let b = a.length;
        let c = a[b-1];
        return c;
}

let d = list (["Hungary", "Slovakia", "Romania"]);
console.log(d);


// Write a simple JavaScript program to join all elements of the following array into a string


function tog(a) {
    let s = a.join("-");
    return s;
}

let  result1 = tog(["Siberia", "Texas", "Savanna"])
console.log(result1);


// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays and save them to third array


function sumArr2 (a, b) {
    let newArr = [];
    for (let i = 0; i < a.length; i++) {
        let a0 = a[i];
        let b0 = b[i];
        newArr [i] = a0 + b0;
    }
    return newArr;
}

let start1 = sumArr2 ([5, 10, 15], [6, 7, 8])
console.log(start1);


// Write a JavaScript program to calculate the area and perimeter of a rectangle. Rectangle should be an object with properties width and height and methods getArea() and getPerimeter();



let rectangle = {
    width: 10,
    height: 5,
    getArea: function() {
        return this.width * this.height;
    },
    getPerimeter: function() {
        return (this.width + this.height) * 2;
    }
};

let x5 = rectangle.getArea();
let x6 = rectangle.getPerimeter();
console.log(`Area is ${x5}, Perimeter is ${x6}.`);
