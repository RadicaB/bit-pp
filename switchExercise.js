var day = 4;
var result = "";

switch (day) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
}
console.log(result);
    
var day = 8;
var result = "";

switch (day) {
    case 1:
        result = 'Monday';
        break;
    case 2:
        result = 'Tuesday';
        break;
    case 3:
        result = 'Wednesday';
        break;
    case 4:
        result = 'Thursday';
        break;
    case 5:
        result = 'Friday';
        break;
    case 6:
        result = 'Saturday';
        break;
    case 7:
        result = 'Sunday';
        break;
    default: result = 'Input must be a number between 1 and 7';
}
console.log(result);

var day = 2;
var result = "";

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'It’s weekday';
        break;
    case 6:
    case 7:
        result = 'It’s weekend';
        break;
    default: result = 'Input must be number between 1 and 7';
}
console.log(result);
    

var day = 8;
var result = "";

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        result = 'It’s weekday';
        break;
    case 6:
    case 7:
        result = 'It’s weekend';
        break;
    default: result = 'Input must be number between 1 and 7';
}
console.log(result);

var month = 13;
var result = '';

switch (month) {
    case 1:
        result = 'January';
        break;
    case 2:
        result = 'February';
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
    case 7:
        result = 'July';
        break;
    case 8:
        result = 'August';
        break;
    case 9:
        result = 'September';
        break;
    case 10:
        result = 'October';
        break;
    case 11:
        result = 'November';
        break;
    case 12:
        result = 'December';
        break;
    case 13:
        result = 'Input must be a number between 1 and 12';
        break;
    /*default:
        result = 'Input must be a number between 1 and 12';*/
}
console.log(result);

var month = 5;
var result = '';

switch (month) {
    case 1:
    case 2:
    case 3:
        result = 'Winter';
        break;
    case 4:
    case 5:
    case 6:
        result = 'Spring';
        break;
    case 7:
    case 8:
    case 9:
        result = 'Summer';
        break;
    case 10:
    case 11:
    case 12:
        result = 'Autmn';
        break;
    default:
        result = 'Input must be a number between 1 and 12';
}
console.log(result);
               
var grade = 'S';
var result = '';

switch (grade) {
    case 'A':
        result = "Good job";
        break;
    case 'B':
        result = 'Pretty good';
        break; 
    case 'C':
        result = 'Passed';
        break;
    case 'D':
        result = 'Not so good';
        break;
    case 'F':
        result = 'Failed';
        break;
    default: result = 'Unknown grade';
}
console.log(result);

var city = 'Kragujevac';
var result = '';

switch (city) {
    case 'Belgrade':
    case 'Nis':
    case 'Novi Sad':
        result = 'Serbia';
        break;
    case 'Tokyo':
    case 'Osaka':
    case 'Okinawa':
        result = 'Japan';
        break;
    case 'Berlin':
    case 'Frankfurt':
    case 'Munich':
        result = 'Germany';
        break;
    case 'Paris':
    case 'Strazbure':
    case 'Nice':
        result = 'France';
        break;
    case 'London':
    case 'Liverpool':
    case 'Manchester':
        result = 'United Kingdom';
        break;
    default: result = 'Please choose a different city';
}
console.log(result);

var number1 = 5;
var number2 = 10;
var operator = '/';
var result = '';
switch (operator) { 
    case '+':
        result = (number1 + number2);
        break;
    case '-':
        result = (number1 - number2);
        break;
    case '/':
        result = (number1 / number2);
        break;
    case '*':
        result = (number1 * number2);
        break;
    default: result = 'Unknown operator';
}
console.log(result);