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

console.log(arr);

console.log("312" == 312);
console.log(typeof 2 + 3);

var a = [[1, 2, 3], [4, 5, 6], 8, [9, 10]];
console.log(a[3][0]);

var x;
var y = 5;
console.log(x + "y=" + (x + y));


console.log([2, 3, 4] == [2, 3, 4]);

var array = ['s', 'c', 'r','i','p','t'];
array.length = 0;
console.log(array);

var a = 10;
var b = 5;
var c = a || b++;
console.log(10 * 'kcp');
