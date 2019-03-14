function x1(a, b) {
    let xx1 = a;
    let xx2 = xx1.indexOf(b);
    return xx2;
}

let xx3 = x1("abcdef", "cd");
console.log(xx3)


function y1(a, b) {
    if(a != "") {
        let yy1 = a;
        let yy2 = yy1.indexOf(b);
        console.log(`it is here - ${yy2}`);
    }
    else if (a == "") {
         console.log("It is empty!");
    }

}

let yy3 = y1("Hello there!", " ");
console.log(yy3);


function getAbb(name) {
    let firstSymbol = name.charAt(0);
    let spaceSymbol = name.indexOf(" ");
    let positionSecondSymbol = ++spaceSymbol;
    let secondSymbol = name.charAt(positionSecondSymbol);
    let result = `${firstSymbol}.${secondSymbol}.`;
    return result;
}

let result = getAbb("Nazar Babiy");
console.log(result);



function w1(a, b) {
    if(a > b) {
        console.log(a);
    }
    else if(a < b) {
        console.log(b)
    }
}

let ww = w1(10, 15);


function sort(a, b, c) {
    if(a < b && b < c) {
        console.log(`${a}, ${b}, ${c}`);
    }
    else if(a < c && c < b) {
        console.log(`${a}, ${c}, ${b}`);
    }
    else if(c < a && a < b) {
        console.log(`${c}, ${a}, ${c}`);
    }
    else if(b < a && a < c) {
        console.log(`${b}, ${a}, ${c}`);
    }
    else if(c < b && b < a) {
        console.log(`${c}, ${b}, ${a}`);
    }
    else if(b < c && c < a) {
        console.log(`${b}, ${c}, ${a}`);
    }
    else {
        console.log("You should give different numbers!");
    } 
    return 1;
}

let r = sort(55, 101, 65);