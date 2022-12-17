/*var htmlNode = window.document.documentElement;
console.log('htmlNode:', htmlNode);

document.documentElement.tagName

console.log(htmlNode.nodeName);
console.log(htmlNode.attributes);
console.log(htmlNode.id);
console.log(htmlNode.className);

console.log(htmlNode.hasChildNodes());

var bodyNode = htmlNode.childNodes[2];
console.log(htmlNode.childNodes);

var divHeaderNode = document.getElementById('header');
var mainHeaderNode = document.querySelector('.main-header');
console.log(mainHeaderNode.nodeName);
console.log(mainHeaderNode.attributes);
console.log(mainHeaderNode.id);
console.log(mainHeaderNode.className);


var paragraphNodes = document.getElementsByTagName('p');
var mainHeaders = document.getElementsByClassName('.main-header');
var mainHeaders1 = document.querySelectorAll('.main-header');
var sixthPNode = paragraphNodes[5];
console.log(sixthPNode);

sixthPNode.className = 'strong-paragraph';*/

/*setInterval(function () { 
    if (sixthPNode.className === 'strong-paragraph') { 
        sixthPNode.className = '';
        return;
    }
    sixthPNode.className = 'strong-paragraph';
}, 500);*/

/*var sixthPNode = paragraphNodes[5];

setInterval(function () { 
    if (sixthPNode.textContent === 'JESTEEEE') { 
        sixthPNode.textContent = 'NIJEEEE';
        return;
    }
    sixthPNode.textContent = 'JESTEEEE';
}, 500);*/

/*setTimeout(function () {
    divHeaderNode.innerHTML = '<ul><li>First item</li><li>Second item</li></ul>';
}, 3000);*/

/*setTimeout(function () {
    divHeaderNode.outerHTML = '<ul><li>First item</li><li>Second item</li></ul>';
}, 3000);*/

/*var divHeaderNode = document.getElementById('header');

var newPNode = document.createElement('p');
newPNode.textContent = 'pozdraaaaav';
//var textNode = document.createTextNode('Caoo');
//newPNode.appendChild(textNode);

/*setTimeout(function () {
    divHeaderNode.appendChild(newPNode);
}, 3000);*/

/*var nodeToDelete = document.getElementById('delete');
var parentNode = nodeToDelete.parentElement;

setTimeout(function () {
    parentNode.removeChild(nodeToDelete);
}, 3000);

nodeToDelete.hasAttribute('id');
console.log(nodeToDelete.setAttribute('class', 'bla bla-bla'));

var linkNode = document.createElement('a');
linkNode.textContent = 'google';
linkNode.setAttribute('href', 'http://google.com');
linkNode.setAttribute('target', '_blank');

var divHeaderNode = document.getElementById('header');

console.log(divHeaderNode.className);
divHeaderNode.className + ' neka-nova';
divHeaderNode.classList.add('druga-nova');
divHeaderNode.classList.remove('switch');
divHeaderNode.classList.toggle('cao');*/

/*document.documentElement.hasChildNodes() - true
document.documentElement.childNodes.length - 3
document.documentElement.childNodes - NodeList(3) [head, text, body]
document.documentElement.tagName - 'HTML'
console.log(htmlNode.nodeName);
console.log(htmlNode.attributes);
console.log(htmlNode.id);
console.log(htmlNode.className);

*/

//document.documentElement.tagName

/*var htmlNode = document.documentElement;
console.log('htmlNode:', htmlNode);

document.getElementByClass('exerciseListDuo');

var divexerciseListDuoNode = NodeList[2];
console.log(divexerciseListDuoNode);

div.exerciseListDuo = 'colored-list';

var secondLiNode = document.getElementsByClassName('exerciseListDuo');*/

function addBackgroundToList() { 
    //prvo selektujemo drugu listu  - querySelectorAll vraca sve elemente koji odgovaraju selektoru u zagradi
    //document.querySelectorAll('ul')
    var allList = document.querySelectorAll('ul'); //qs - obuhvata sve a get.ide samo na prvi
    console.log(allList);
    var secondList = allList[1];
    secondList.classList.add('blueBckrgd') //dodamo klasu
   // console.log(secondList.classList);
    //secondList.classList.remove('blueBckrgd') //uklonimo klasu
}
addBackgroundToList();

function AllLiRed() { 
    var allElements = document.querySelectorAll('li');
    console.log(allElements);
    for (var i = 0; i < 8; /*allElements.length;*/  i++) { 
        allElements[i].classList.add('redText');
        //var allElements = document.querySelectorAll('li');
        //console.log(allElements);
    }          
   /* allElements[8].classList.remove('redText');
    allElements[9].classList.remove('redText');
    allElements[10].classList.remove('redText');
    allElements[11].classList.remove('redText');*/
}
AllLiRed();

function thirdUpperCase() { 
    var allList = document.querySelectorAll('ul');
    console.log(allList);
    var thirdList = allList[2];    
    thirdList.classList.add('upperCase');
}
thirdUpperCase();

function createActive() { 
    var allList = document.querySelectorAll('ul');
    console.log(allList);
    var fifthList = allList[4];
    fifthList.classList.add('theFifth');
    var AllElements = document.getElementsByClassName('theFifth'); //elementS - vraca NIZ!!! Iako je samo jedan element
    //console.log(AllElements[0].children);
    var allLi = AllElements[0].children; 
    var firstLi = allLi[0];
    firstLi.classList.add('active');
    console.log(fifthList);
    console.log(firstLi);
}
createActive();

function moveActive() { 
    var lastClass = document.querySelectorAll('li');
    console.log(lastClass);
    var twentyfirstLi = lastClass[16];
    twentyfirstLi.classList.remove('active');
    console.log(twentyfirstLi);

    var allList = document.querySelectorAll('ul');
    console.log(allList);  // pronadjemo sve liste
    var fourthList = allList[3]; // pronadjemo trecu listu
    //console.log(fourthList);
    fourthList.classList.add('fourth'); // dodelimo joj klasu
    var allLis = document.getElementsByClassName('fourth');   //vraca nam niz elemenata u ul
    console.log(allLis);
    var allLi = allLis[0].children; 
    console.log(allLi);
    var firstChildLi = allLi[0];
    firstChildLi.classList.add('theClass');
    console.log(firstChildLi);
}
moveActive();

var p = document.getElementById('clock');
setInterval(function () {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var formattedTime = hours + ':' + minutes + ':' + seconds;
    p.textContent = formattedTime;

}, 1000);

//console.log(hours + ':' + minutes + ':' + seconds);