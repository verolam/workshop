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



/* CREATE ADMIN MESSAGE
--------------------------------------*/
let div1 = make('div');
let div2 = make('div');

div1.setAttribute('id', 'admin-msg');
div1.setAttribute('class', 'message');
div2.setAttribute('class', 'msg-content');

div2.innerHTML = "Some admin text.";

div1.prepend(div2);


// $('body').insertBefore(d1, $('script'));


/* EVENTS
--------------------------------------*/
let count = 0;

// The event listener needs 2 arguments : The event and the action 
$('#btn1').addEventListener("click", function() {
  count++;
  $('#msg').innerHTML += "I just clicked";
  $('#p1').innerHTML = count; 
}
);

// //hover
// $('#btn1').addEventListener('mouseenter', function() {
  
//   count++;
//   $('msg').innerHTML += "I just clicked";
//   $('#p1').innerHTML = count;

  
// });
