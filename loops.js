var i = 10;

while (i < 0) {
    console.log(i);
    i++;
};

console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');

var i = 20;
do {
    console.log(i);
    i++;
} while (i < 10);

console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');
console.log('dalje izvrsavanje programa');

var i = 20;
do {
    console.log('cao');
    } while (false);/*posto broj 20 nije false, ne ide dalje*/

console.log('dalje izvrsavanje programa');

var cars = ['BMW', 'Volvo', 'Saab', 'Ford'];
var i = cars.lenght - 1;
var noviNiz = [];

while (cars[i]) { 
    noviNiz[i] = cars[i];
    i++;
}
console.log(noviNiz);

var punishment = '';
for (var i = 0; i < 10; i++) { 
    punishment += 'I will never do this again\t';
}
console.log(punishment);

var res = '\n'; /* /n-novi red, /t-tab */
for (var i = 0; i < 5; i++) { 
    for (var j = 0; j < 5; j++) { 
        res += '*\t';
    }
    res += '\n';
}
console.log(res);

/*1.	Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]*/

var e = 5;
var a = [5, -4.2, 3, 7];
var i = 0;

for (i = 0; i<a.length; i++) {
    if (e === a[i]) {
        console.log("yes");
        break;
    }
    else
        {
        console.log("no");
        break;
        }
}

var e = 3;
var a = [5, -4.2, 18, 7];
var i = 0;

for (i = 0; i<a.length; i++) {
    if (e === a[i]) {
        console.log("yes");
        break;
    }
    else
        {
        console.log("no");
        break;
        }
}
 
/*2.	Write a program that multiplies every positive element of a given array by 2*/

var a = [-3, 11, 5, 3.4, -8];
var sum = [];
var i = 0;

for (i = 0; i < a.length; i++) { 
    if (a[i] > 0) {
        sum[i] = a[i] * 2;
    } else sum[i] = a[i];
}
console.log(sum);

/*3. Write a program that finds the minimum of a given array and prints out its value and index. */

var a = [4, 2, 2, -1, 6];
var i = 0;

for (i=0; i < (a.length - 2);) {
    if (a[i] < a[i+1]) {
        i += 1;
    } else {
        a [i] = a[i+1];
        i++
    }
}
console.log(a[i],i);

/*4. Write a program that finds the first element larger than minimum and prints out its value. */

var a = [4, 2, 2, -1, 6];
var min = a[0];
var min2 = a[0];
var i = 0;
for (i = 0; i < a.length; i++) {
    if (a[i] < min) {
        min = a[i];
    }
}
for (i = 0; i < a.length; i++) { 
    if (a[i]!== min && a[i] < min2) { 
        min2 = a[i];
    }
}    
console.log(min2);

/*5.	Write a program that calculates the sum of positive elements in the array.*/

var a = [3, 11, -5, -3, 2];
var sum = 0;

for (i = 0; i < a.length; i++) { 
    if (a[i] > 0) {
        sum = sum + a[i];
    }
    } console.log(sum);
    
/*6. Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side. */

var a = [2, 4, -2, 7, -2, 4, 2];
var output = "The array is symetric";

for (var i = 0; j = a.length-1; i <= j, i++, j--) {
    if (a[i] !== a[j]) {
        output = "The array isn't symetric";
        break;
    }
} console.log(output);

var arr = [3, 4, 12, 8];
var output = "The array is symetric";

for (var i = 0; j = arr.lenght - 1; i <= j, i++, j--) {
    if (arr[i] !== arr[j]) {
        output = "The array isn't symetric";
        break;
    }
} console.log(output);

/*7.	Write a program that intertwines two arrays. You can assume the arrays are of the same length. */

var arr1 = [4, 5, 6, 2]; 
var arr2 = [3, 8, 11, 9];
var arr3 = [];

for (var i = 0; i< arr1.length; i++) {
    c[c.lenght] = a[i];
    c[c.lenght] = b[i];
}
console.log(c); 

/*Write a program that will iterate from 0 to 10 and display squares of numbers.*/

/*10.	Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]*/

/*var e = 78;
var p = 33;
var a = [2, -2, 33, 12, 5, 8];
var resultArray = [];
for (var i = 0; i <= a.lenght; i++) { 
    if ()
        
}
    

for (var i = 0; i <= 10; i++) {
    console.log(i * i);
}

/*Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.*/

for (var i = 0; i <= 15; i++) {
    if (i % 2 === 1) {
        console.log('the number', i, 'is odd');
    }
    else console.log('the number', i, 'is even')
    }
/*2.	Write a program to sum the multiples of 3 and 5 under 1000.*/

var result = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0)  { 
        result += i;
        }
}
console.log(result);

/*3.Write a program to compute the sum and product of an array of integers

var arr = [1, 2, 3, 4, 5, 6, 7],
sum = 0,
pro = 1,
i;
for (i = 0; i < array.length; i+=1)
{
    sum += array[i];
    pro *= array[i];
}
console.log('Sum is ' + sum + 'Product is ' + pro);*/

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : ' + s + ' Product :  ' + p); 

/*3.4.	Write a program which prints the elements of the following array as a single string*/

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var i = x.lenght - 1;

console.log('Sum : ' + s + ' Product :  ' + p);
