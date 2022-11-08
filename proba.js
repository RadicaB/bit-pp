
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
