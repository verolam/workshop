// →→→ HELPER FUNCTION → TARGET ANY SELECTOR

//Target 1 element
function $(selector) {
return document.querySelector(selector);
}

//Target all elements "selector"
function $$(selector) {
  return document.querySelectorAll(selector);
  }

// →→→ HELPER FUNCTION → CREATE ANY ELEMENT

function make(selector) {
  return document.createElement(selector);
}



// Target element → classic approach
// const main = document.querySelector('main'); console.log(main);


// Target element → awesome approach
const main = $('main'); console.log(main);


// →→→ Manage attributes
$('h1').setAttribute('id','main-title');

// $('main p:first-child'); // target first p 

$('p').setAttribute('class', 'row');

//$('#p4').removeAttribute('class'); // remove attribute class

$('html').setAttribute('lang', 'fr');


// →→→ MANAGE CLASS ATTRIBUTE
body = $('body');
$('body').classList.add('menu-is-open');
$('body').classList.remove('bob');
//$('body').removeAttribute
console.log(body);


// →→→ CREATE ELEMENT [Classic approach]

// const p1 = document.createElement('p');
const p1 = make('p'); // create a new tag 'p'
p1.setAttribute('class', 'row'); // Set a class 'row' to p
p1.innerHTML = "je suis le texte du nouveau paragraphe"

const span = make('span'); // create a span tag
span.textContent = "Info : ";

main.append(p1); // will add new 'p' at the end of 'main'
p1.prepend(span); // will add  'span' before new 'p'



//INSERT BEFORE - 2 arguments : what and the  reference
main.insertBefore(p1, $('#p2'));


// Remove an elt
// $('main').remove();

// create a new element div
const d1 = make('div');
const d2 = make('div');

d1.setAttribute('id', 'admin-msg');
d1.setAttribute('class', 'message');
d2.setAttribute('class', 'msg-content');
d2.innerHTML = 'blablabla';

d1.prepend(d2); 

//$('body').append(d1);

// $('body').insertBefore(d1, $('script'));









// →→→ ADD TEXT CONTENT

p1.textContent = 'A simple text.';


// →→→ ADD HTML CONTENT

p1.innerHTML = '<span class="success" >Info:> </span>A complex content ';

// →→→ YOU CAN DO MORE WITH HTML CONTENT
// insertAdjacentHTML()
// The four positions available are:
// "beforebegin" (directly before the current node)
// "afterbegin" (inside the current node, at the beginning)
// "beforeend" (inside the current node, at the end)
// "afterend" (directly after the current node)


// This will only touch the first item of his kind


// This will touch all of them
// console.log( $$('p') ); 
// $$('p').forEach(function(item) {
// item.style.color = '#ccc';   // change the color of the item 
// item.style.backgroundColor = '#00000';
// }); 


// →→→ DO STYLES

$('#p2').style.color = '#f00'; 
$('#p3').style.backgroundColor ="#ccc";
// $('#p4').style.cssText = 'background-color = '#fc0'; color = 'fff';


// →→→ INSERT, APPEND, PREPEND



