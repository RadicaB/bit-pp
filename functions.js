var number = 22;
var result = '';

if (number % 2 === 0) {
    result = 'number is even';
} else { 
    result = 'odd';
} console.log(result);


function checkIfNumberIsEvenOrOdd(n) {
    var result = '';

    if (n % 2 === 0) {
        result = 'even';
    } else {
        result = 'odd';
    } return result;
}
var r = checkIfNumberIsEvenOrOdd(33);
console.log(r);

var f = checkIfNumberIsEvenOrOdd(22);
console.log(f);

// this function checks if number is even or odd and return string "even" or "odd"
function checkIfNumberIsEvenOrOdd(n) {
    if (typeof n !== 'number') {   //if (!isFinite(n)) {}
        return 'Invalid input';
    }
    var result = '';
    if (n % 2 === 0) {
        result = 'even';
    } else {
        result = 'odd';
    } return result;
}
var r = checkIfNumberIsEvenOrOdd;

var f = r(22);
console.log(f);

function sumNumbers() { 
    var result = 0;
    for (var i = 0; i < arguments.length; i++) { 
        result += arguments[i];
    }
    return result;
}

var r = sumNumbers(22, 33, 44);
console.log(r);

function sumNumbers(arrayOfNumbers) { 
    var result = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) { 
        result += arrayOfNumbers[i];
    }
    return result;
}
var r = sumNumbers([22, 33, 44]);
console.log(r);

var number = parseInt('333');
console.log(number);

var number = parseInt('555dsa756aldjs');
console.log(number);

var number = parseFloat('11.11');
console.log(number);

var number = parseFloat('3e-4');
console.log(number);

var number = parseFloat('eee');
console.log(isNaN(number));

var number = parseFloat('eee');
console.log(isFinite(NaN));

//var result = '*****\n*   *\n*   *\n*   *\n*****';

var result = '';

for (var i = 0; i < 5; i++) {  //ulazimo u prvu petlju koja ide od 0 do p
    for (var j = 0; j < 5; j++) {//u drugoj j petlji dodeljujemo novi red i dodelimo zvezdice
        if ((i === 1 || i === 2 || i === 3) && (j === 1 || j === 2 || j === 3)) {  //ovde dodoljujemo drugom, trecem i cetvrtom redu razmake
            result += ' ';          //ovo crta novi red, ispod crta novu kolonu, ako je i=1,2,3 crta kvadrate bez razmaka
    } else {
        result += '*';
    }
}
    if (i !==4) result += '\n';
}
console.log(result);


function drawSquare(dimension) { 
    var result = '';

for (var i = 0; i < dimension; i++) {
    for (var j = 0; j < dimension; j++) {
      if (i === 0 || i === dimension - 1 || j === 0 || j === dimension-1) {
        result += '*';
    } else {
        result += ' ';
    }
}
    if (i !== dimension - 1) result += '\n';
    }
    return result;
}

var r = drawSquare(10);
console.log(r);

/*1.	Write a program that calculates the maximum of two given numbers*/


function maxNumber(a, b) { 
    if (a > b)
        return a;
    if (b > a)
        return b;
}
var c = maxNumber(1,2)
console.log(c);

/*2.	Write a program that checks if a given number is odd*/

function oddEven(a) { 
    if (a % 2 === 0) {
        result = "number is even";
    } else {
        result = "number is odd";
    } return result;
}
var c = oddEven(1);
var d = oddEven(2);
console.log(c,',',d);
    
/*3.	Write a program that checks if a given number is a three digit long number.*/

function threeDigit(a) {
    if (a >= 100 && a <= 999) {
        return "this is a three digit number";
    }
    else {
        return "it's not a three digit number";
    }
}
var b = threeDigit(20);
var c = threeDigit(125);
console.log(b,',',c);
    
/*4. Write a program that calculates an arithmetic mean of four numbers.*/

var arr = [1, 2, 3, 4];
var sum = 0;

function arithmeticMean(arr) { 

    for (var i = 0; i < arr.length; i++) {      
        sum = sum + arr[i];
        arithmeticMean = sum / arr.length;
        }
        return arithmeticMean;
}
var e = arithmeticMean(arr);
console.log(e);

/*6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * * 
var rusult = '';

var arr = [a, b, c]
var star = '*';

*/

var star = "*";

function starsNumbers(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        while (arr[i] > 0) {
            result += star; arr[i]--;
        }
        result += "\n";
    }
    console.log(result);
}
starsNumbers([5, 3, 7]);


/*7.Write a program that calculates a number of digits of a given number. */

var a = 1704985715212;
function numberOfDigits(a) { 
    var result = 0;
    if (typeof(a) === number) {
        result = "This is not a number";
    } else { 
        var string = a + '';  //da dobijemo broj u stringu
        result = string.length;
    }  
    return result;
} 
var b = numberOfDigits(a);
console.log(b);

/* 8.	Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3  */

var arr = [2, 4, 7, 8, 7, 7, 1];
var e = 7;

/*function numberOfAppearences(arr, e) {
    result = 0;
    for (i = 0; i < arr.lenght; i++) {
        if (arr[i] === e) { 
            result += 1;
        }
    } 
    console.log(result,'cao');
    return result;    
}
var b = numberOfAppearences([2, 4, 7, 8, 7, 7, 1], 7);
console.log(b);*/

function calc(arr,e){
    count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i] === e){
            count+=1;
            //console.log(e)
       /* }else{
            console.log('nema');*/
        }
    }
    return count;
}   
var a= calc([2, 4, 7, 8, 7, 7, 1],7)
console.log(a);


//9.Write a program that calculates the sum of odd elements of a given array.

function sumOddElements(arr) { 
    for (var i = 1; i < arr.lenght; i++) { 
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }
    return sum;
}
console.log(sumOddElements([2, 4, 7, 8, 7, 7, 1]));

function cacl2(arr) {
    var suma = 0;
    //console.log(1%2);
    for(i=0;i<arr.length;i++){
        if(arr[i] % 2 > 0){
            console.log(arr[i]);
            suma += arr[i]
        }
    }
    console.log(suma);
}
cacl2([2, 4, 7, 8, 7, 7, 1])  


//10.Write a program that calculates the number of appearances of a letter a in a given string. Modify the program so it calculates the number of both letters a and A.

var word = "Appearances";

function letterAppearances(word) {
    //console.log(word.length);
    sum = 0;
    
    for (var i = 0; i < word.length; i++) {
        /*console.log(word[i],i);*/
        if (word[i] === 'a' || word[i] === 'A') {
            sum += 1;
            //console.log(sum); //ispisujemo rezultat svake iteracije, return - rezultat cele funkcije
        }
    }
    return sum;
}
var c = letterAppearances(word);
console.log(c);

/*testing
var a = 2;
var b = 4;
function sumAB(a, b) { 
    console.log('flkgjdfifljd');
    if (a < b) { return a }
}
console.log(sumAB(a, b));*/

/*11. Write a program that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. */

var a = 'abc';
var b = 4;

function concatenates(a, b) { 
    c = '';
    for (var i = 0; i < 4; i++) { 
        if (typeof(a) == 'string') { 
            c += a;
        }
    } return c;
}
console.log(concatenates(a, b));

//1.Write a function to check whether the `input` is a string or not.

var a = "My random string";
var b = 12;
result = '';

function stringOrNot(a) { 
    if (typeof(a) == 'string') {
        result = 'true';
    } else {
        result = 'false';
    }
    return (result)
}
console.log(stringOrNot(a));

//2. Write a function to check whether a string is blank or not.

var arr = ["My random string", "", 12, false];
/*var b = "";
var c = 12;
var d = false;*/
result = [];

function stringEmpty(arr) { 
    for (var i = 0; i < arr.length; i++) { 
        if (a[i] == 'string') { 
            result = 'true';
        } else {
            result = 'false';
        }
        return (result)
    }
} 

var arr = ["My random string", "", 12, false];
console.log(stringEmpty(arr[i]));

