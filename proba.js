
var arr = [2, 4, 7, 8, 7, 7, 1];

function sumOddElements(arr) { 
    sum = 0;
    for (var i = 1; i < arr.lenght; i++) { 
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
    return sum;
}
console.log(sumOddElements([arr]));


var month = 'February';
console.log(month[1]);

var month = [4,5,12,9];
console.log(month.length);

var a = '34abc';
var b = 12;
var tmp;

tmp = a;
a = b;
b = tmp;
console.log(parseInt(a));

var s = 'JavaScrip';
var result = s[3];
console.log(result);


var a = [2, 3, 11];
a.length = 5;
console.log(a);

var nesto = true;
console.log(!nesto);

var kks = 'Do the magic';
var s = '';
