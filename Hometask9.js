// Create a spec to verify if JS program computes correct sum of the two given integers 

var a = 10;
var b = 20;
var c = 30;

xdescribe('Sum of two', function () {
    xit('Sum', function () {
        expect(a+b).toBe(c)
    });
});

// Create a suite to verify if JS program (calculator) works correctly

var a1 = Math.floor((Math.random()*100 + 1));
var a2 = Math.floor((Math.random()*100 + 1));

let plus1 = function (a1, a2) {
    return a1 + a2;
   };

let a3 = plus1(a1, a2);

let minus1 = function (a1, a2) {
    return a1 - a2;
};

let a4 = minus1(a1, a2);

let multiply1 = function (a1, a2) {
    return a1 * a2;
};

let a5 = multiply1(a1, a2);

let divide1 = function (a1, a2) {
    return a1 / a2;
};

let a6 = divide1(a1, a2);

xdescribe('calculator', function () {
    xit('calculator', function () {
        expect(a3).toBe(a1+a2);
        expect(a4).toBe(a1-a2);
        expect(a5).toBe(a1*a2);
        expect(a6).toBe(a1/a2);
    });
});

// Create a spec to verify if JS program that compare two given numbers return true if one of the number is 50 or if their sum is 50

var b1 = 20;
var b2 = 30;

describe('sum is', function () {
    it('sum is', function () {
        expect(b1+b2).toBe(50);
        expect(b1).toBe(50);
        expect(b2).toBe(50);
    });
});
