var month = 2;
var result = "";

/*if (month === 1) { 
    result = 'January';
else if (month === 2) { 
    result = 'February';
else if (month === 3) { 
    result = 'Martch';
else if (month === 4) { 
    result = 'April';
else if (month === 5) { 
    result = 'May';
else if (month === 6) { 
    result = 'June';
else {
    reulst='not supported input!!';
}*/

switch (month) { 
    case 1:
        result = 'January';
        break;
    case 2:
        result = '2';
        break;
    case 3:
        result = 'March';
        break;
    case 4:
        result = 'April';
        break;
    case 5:
        result = 'May';
        break;
    case 6:
        result = 'June';
        break;
    default:
        result = 'not supported input';
}
console.log(result);

var CarBrand = 'tesla';
var result = '';

switch (CarBrand) { 
    case 'bmw':
    case 'audi':
    case 'mercedes':
        result = 'This car is german car';
        break;
    case 'peugeot':
    case 'renault':
    case 'citroen':
        result = 'This car is french car';
        break;
    default:
        result = 'unknown brand';
}
console.log(2.10?'two':5>3?'five':'three');

