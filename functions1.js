var resAdd = add(22, 33);
console.log(resAdd);
var ressMult = multiplay(2, 4);
console.log(ressMult);

function add(number1, number2) { 
    return number1 + number2;
}

function multiplay (number1, number2) {
    return number1 * number2;
}

(function () {
    console.log('I am IIFE function');
})();

function outer(string) { 
    function inner(s) {   //definisana ali nije pozvana inner, outer se poziva dole, nikad nece biti iskoriscena - imamo isti ishod dogadja-stampa se samo ouiter
        return s + s; 
    }
    return string
}

var res = outer('cao');
console.log(res);


function outer1(string) { 
    function inner1(s) {
        return s + s; 
    }
    return inner1(string);
}

var res = outer1('cao');
console.log(res);

function a() { 
    console.log('A!');
    return function () {
        console.log('B!');
    };
}
//var result = function () {
//console.log('B!');
//};




var myArr = [];

var hi = function () {
   return "Hi";
};

myArr[0] = hi;
myArr[0]();

var firstElement = myArr[0];

typeof firstElement;

firstElement();

 