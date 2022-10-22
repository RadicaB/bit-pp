var a = 3;
if (a < 10) {
    console.log('a is smaller than 10')
} else {
    console.log('a is greater than 10')
}


var result = '';
var a = 3;
if (a > 2) {
    result = a + ' is greater than 2';
}
console.log(result);


var result = '';
var a = 1;
if (a > 0) {
    result = a + ' is a positive number bla';
} else {
    result = a + ' is a negative number or zero';
}
console.log(result);

result = (a > 0) ? a + ' is a positive number' : a + 'is a negative number or zero';
console.log(result);


var number = 3;
if (number % 2 === 0) {
    console.log('even')
} else {
    console.log('odd');
}

var number = 4;
var result = '';
if (number % 2 === 0) {
    result = 'even'
} else {
    result = 'odd';
}

var number = 9;
var result = '';
var result = number % 2 === 0 ? 'even' : 'odd';
//var number % 2 === 0 ? console.log('even') : console.log('odd');
    
    
var number = 15;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number)
} else {
    console.log('it\'s not devisible')
}

var number = 12;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number)
} else {
    console.log('it\'s not devisible')
}

//Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2 
//Output: The sign is - 


var a = 3;
var b = -7;
var c = 2;
var product = a * b * c;
var result = '';
if ( product < 0) {
    result = 'The sign is ' + product;
} else {
    result = 'The sign is ' + product;
}
console.log(result);

var a = 10;
var divisible = a % 2;
var result = '';
if (divisible === 0) {
    result = '0';
} else {
    result = 'X'
}
console.log(result);

//Write a program to check if the variable is a number. If it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”
//Sample numbers: 10 | 7 (check one at the time)
//Output: 10 / 2 = 5 | X 


var a = 7;
var divisible = a % 2;
var result = '';
if (divisible === 0) {
    result = console.log(divisible)
} else { result = 'X' }
console.log(result);

//Write a conditional statement to find the largest of five numbers. Display the result in console.
//Sample numbers: -5, -2, -6, 0, -1 
//Output: 0 

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
if (a > b && a > c && a > d && a > e) {
    console.log(a)
} else if (b > a && b > c && b > d && b > e) {
    console.log(b)
} else if (c > a && c > b && c > d && b > e) {
    console.log(c)
} else if (d > a && d > b && d > c && d > e) {
    console.log(d)
} else { console.log(e) }

//Write a conditional statement to sort three numbers.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1

var a = 4;
var b = 0;
var c = -1;
if (a > b && a > c)
{
    if (b > c) {
        console.log(a + ", " + b + ", " + c);
    }
    else {
        console.log(a + ", " + c + ", " + b);
    }
}
else if (b > a && b > c)
{
    if (a > c)
    {
        console.log(b + ", " + a + ", " + c);
    }
    else
    {
        console.log(b + ", " + c + ", " + a);
    }
}
else if (c > a && c > b)
{
    if (a > b)
    {
        console.log(c + ", " + a + ", " + b);
    }
    else
    {
        console.log(b + ", " + b + ", " + a);
    }
}

//Task 1. Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
//Sample numbers: 3, -7, 2 //
//Output: The sign is - //


var a = 3;
var b = -7;
var c = 2;
if (a * b * c < 0) {
    console.log("The sign is -");
}
else {
    console.log("The sign is +");
}

//Task 2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
//Sample numbers: -5, -2, -6, 0, -1 
//Output: 0 

var a = -5;
var b = -2;
var c = -6;
var d = 0;
var e = -1;
if (a > b && a > c && a > d && a > e) {
    console.log(a);
}
else if (b > a && b > c && b > d && b > e) {
    console.log(b);
}
else if (c > a && c > b && c > d && c > e) {
    console.log(c);
}
else if (d > a && d > b && d > c && d > e) {
    console.log(d);
}
else if (e > a && e > b && e > c && e > d) {
    console.log(e);
}

//Task 3. Write a conditional statement to print three numbers as sorted number list.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1
var a = 0;
var b = -1;
var c = 4;
if (a > b && a > c) {
    if (b > c)
{ console.log(a +", "+ b + ", " + c)
}
else { console.log(a +", " + c + ", " + b)}
}

if (b > a && b > c) {
    if (a > c)
    {
        console.log(b + ", "+ a +", " + c)
    }
else { console.log(b +", " +c + ", " + a)}
}

if (c > a && c > b) {
    if (a > b)
    {
        console.log(c +", " + a + ", " + b)
    }
else { console.log(c + ", " + b +", " + a)}
}

//Task 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
//Sample input: 10  					Sample input: 7
//Output: 10 / 2 = 5					Output: X  
var a = 10;
if (typeof a == "number") {
    if (a % 2 === 0) {
        console.log(a / 2);
    }
    else {
        console.log("X");
    }
}

var a = 7;
if (typeof a == "number") {
    if (a % 2 === 0) {
        console.log(a / 2);
    }
    else {
        console.log("X");
    }
}

//Task 5. Write a program that compares two numbers and displays the larger. Display the result in the console.

var a = 0;
var b = -1;
if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

//Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
//Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//Sample Input: 60°C
//Output : 60°C is 140 °F

var c = 60;
var f = (9 * c / 5) + 32;
console.log(c + "C" + " is " + f + "F");

//Task 7. Write a JavaScript program to get the difference between 13 and a given number, if the number is greater than 13 return double difference between that number and 13.
//Sample Input: 11					Sample Input: 32
//Output : 2						Output : 38

var a = 11;
var b = 13;
if (b - a > b) {
    console.log((b - a) * 2);
}
else {
    console.log(b - a);
}

var a = 32;
var b = 13;
if (a - b > b) {
    console.log((a - b) * 2);
}
else {
    console.log(b - a);
}

//Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
//Sample Input: 12, 5					Sample Input: 8, 8
//Output : 17						Output : 48

var a = 12;
var b = 5;
if (a === b) {
    console.log((a + b) * 3);
}
else { 
    console.log(a + b);
}

var a = 8;
var b = 8;
if (a === b) {
    console.log((a + b) * 3);
}
else { 
    console.log(a + b);
}

//Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
//Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
//Output : -				Output : true				Output : true

var a = 5;
var b = 54;
if (a === 50 || b === 50 || a + b === 50) {
        console.log('true');
}
else console.log("-");

var a = 6;
var b = 50;
if (a === 50 || b === 50 || a + b === 50) {
        console.log('true');
}
else console.log("-");

var a = 40;
var b = 10;
if (a === 50 || b === 50 || a + b === 50) {
        console.log('true');
}
else console.log("-");

//Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
//Sample Input: 13			Sample Input: 34			Sample Input: 256
//Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400
var a = 13;
if (a >= 20 && a <= 100) {
    console.log("a belongs to range 20 ⇔ 100");
}
else if (a >= 100 && a <= 400) {
    console.log("a belongs to range 100 ⇔ 400");
}
else { console.log("-"); }

var a = 34;
if (a >= 20 && a <= 100) {
    console.log("a belongs to range 20 ⇔ 100");
}
else if (a >= 100 && a <= 400) {
    console.log("a belongs to range 100 ⇔ 400");
}
else { console.log("-"); }

var a = 256;
if (a >= 20 && a <= 100) {
    console.log("a belongs to range 20 ⇔ 100");
}
else if (a >= 100 && a <= 400) {
    console.log("a belongs to range 100 ⇔ 400");
}
else { console.log("-"); }
