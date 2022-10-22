var a = 3;
var arr = [2, 3, 4, 5];
console.log(arr[1]);

var a = 3;
var arr = [2, 'cao', false, null];
console.log(arr);

var a = 3;
var arr = [2, 'cao', false, null];
console.log(arr[1]);

var a = 3;
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr[1]);

var a = 3;
var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr[1][1]);

var a = 3;
var arr = [
    [1, 2, 3],
    33,
    [7, 8, 9]
];
console.log(arr[1][1]);

var month = 'February';
console.log(month[1]);

var month = 'February';
console.log(month.length);

var firstElement = arr[0]; /*ovo je prvi index*/

var arr = [
    [1, 2, 3],
    null,
    [7, 8, 9]
];

arr[1] = [4, 5, 6];
console.log(arr);

arr[3] = 'cao';
console.log(arr);

arr[10] = 200;
console.log(arr);

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
arr[10] = 200;
console.log(arr.lenght);

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

delete arr[1];
console.log(arr);