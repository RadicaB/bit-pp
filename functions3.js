/*
function filterEven(a) { 
    var b = [];
    for (var i = 0; i < arr < a.length; i++) {
        if (a[i] % 2 === 0) { 
        b[b.length] = a[i];
    }
 }
    return b;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var res = filterEven(arr);
console.log(res);  */

function filter(a, cb) { 
    var b = [];
    for (var i = 0; i < a.length; i++) { 
       // if (a[i] < 0; i < a.length; i++) { 
            var element = a[i]; //stavili smo trenutnui varijalblu u iteraciji stavili u element
        var isConditionTrue = cb(element); 
        if (isConditionTrue) { 
            b[b.length] = a[i];
        }
    }
    return b;
}

var arr = [1, -2, 3, 4, 5, 6, 7, 8];
//var resEven = filter(arr, function (e) { return e % 2 === 0 });
//console.log(resEven);

var isEven = function (e) {
    return e % 2 === 0;
};
var resEven = filter(arr, isEven);
console.log(resEven);


var resOdd = filter(arr, function (e) { return e % 2 !== 0 });    //function(e) - kalback f-ja koja proverava jedan element - e, ako je true ubacice ga u novi niz
console.log(resOdd);

var resNegative = filter(arr, function (e) { return e < 0; });
console.log(resNegative);

var resPositive = filter(arr, function (e) { return e > 0; });
console.log(resPositive);


function map (a, cb) { //cb - call back funkcija, dajemo joj element i vraca obradjen element e+1; element je a[i]
    var b = [];
    for (var i = 0; i < a.length; i++) { 
        var element = a[i];
        var processedElement = cb(element);
        b[b.length] = processedElement;
    }
    return b;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
function incrementByOne(e) { 
    return e + 1;
}
var resIncrementByOne = map(arr, incrementByOne);
console.log(resIncrementByOne);

function double(e) { 
    return e * 2;
}
var resDouble = map(arr, double);
console.log(resDouble);

function process(e) { 
    if (e % 2 === 0) {  // ako je paran pomnozi sa samim sobom - ovo je mapiranje, ne filtriranje
    return e * e;
    }
    return e;
}
var res = map(arr, process);
console.log(res);

//1.	Write IIFE that replaces the first and the last element of the given array and prints out its elements. //
//IIFE = Immediately Invoked Function Expressions function() {}

var testInput = [4, 5, 11, 9];

(function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        console.log(el);
        var temp = arr[0];
        if (arr[0] === arr[i]) {
            el = arr[arr.length - 1];
        }
        if (arr[arr.length - 1] === arr[i]) { 
            el = temp;
        }
        newArr[newArr.length] = el;
    }
    console.log(newArr);
    return newArr;
}) (testInput);

//2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
//Input: 4 5
//Output: 20

console.log((function (a, b) {
    return a * b;
})(4, 5));

//3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
//	Input: prograMming
//	Output: progra**ing, 2

(function (string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        var el = string[i];
        if (string[i] === "m" || string[i] === "M") {
            el = "*";
        } 
        //console.log(el);
        newString = newString + el;
        //console.log(newString);
    };
    console.log(newString);
    return newString;
})   
    ("prograMming");

//4.Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

(function (name, lastName) {
    var fullEmail = " ";
    console.log(name + "." + lastName + "@gmail.com");
}
)("pera", "peric");

(function (mail) { 
    var newMail = "";
    for (var i = 0; i < mail.length; i++) { 
        var el = mail[i];        
        if (mail[i] === " ") { 
            el = ".";
        } //console.log(el); 
        newMail += el;
        //console.log(newMail)
    }   newMail += "@gmail.com";
    console.log(newMail);
    return newMail;
}        
)("pera peric");

//5.Write a function that returns a function that calculates a decimal value of the given octal number.
//Input: 034
//Output: 28 

(function (decimal) {
    //var conversion = ;
    var string = "" + decimal;
    var sum = 0;
    for (var i = string.length - 1, j = 0; i >= 0; i--, j++) {   //j = 8
    //console.log(i,j);
    //console.log(string[i]);
    //console.log(string.length);
        var el = parseInt(string[i]);
    //console.log(typeof el);
        var octal = 8 * j;
        if (j === 0) {
            octal = 1;
        } else {
            octal = 8 * j;
        }
        //console.log(octal);
        //console.log(el * octal);
        numb = el * octal;
        sum += numb;
    }
    console.log(sum);
    } 
)(34);

//6.Write a function that checks if a given string is valid password. The password is valid if it is at least 6 characters long and contains at least one digit. The function should receive two callbacks named successCallback and errorCallback that should be called in case password is correct or invalid.
//Input: JSGuru
//Output: Your password is invalid!
//Input: JSGuru123
//Output: Your password is cool!

function successCallback(string) {
    if (string.length < 6) {
        return "Your password is invalid";
    } 
    for (var i = 0; i < string.length; i++) {
        
        //console.log(string[i], parseInt(string[i]));
        //var el = string[i];
        //console.log(el);
        //isFinite

        console.log(string[i]);

        if (string[i] === "1" || string[i] === "2") {
            return "Your password is cool!"
        } else {
            return "Your password is invalid!";
        }
    }
}
var x = successCallback("JSGuru123");
//successCallback("JSGuru2");
console.log(x);

//function (errorCallback)
//function (passCheck)


var result = true;
function subtract(first, secon  )