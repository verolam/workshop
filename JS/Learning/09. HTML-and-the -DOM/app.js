/*  DOM = Document Object Model
-------------------------------*/
// queryselector()  returns the first Element within the document that matches the specified selector 'title'

// Target the head title DOM Object 

const title = document.querySelector('title'); 

// Display the Object
console.log(title);


// Display the inner content of the object title
console.log(title.innerHTML);


// Grab the object 'h1' and store it
const h1 = document.querySelector('h1');


// Using Chaining

h1.innerHTML = "I just changed the h1 content with JS "; // change h1 by new text

h1.classList.add('bob'); // ADD a class 'bob' to h1
h1.classList.remove('bob'); // REMOVE the class 'bob' from h1


//  SET/GET Element Attributes
h1.setAttribute('id', 'main-header'); // ADD an attribute (id='main-header') to h1

h1.removeAttribute('id'); // Remove attribute 'id' = main-header

console.log(h1);


// GET ELEMENT BY  ID ("my-console" is the ID of my element )
const myConsole = document.getElementById('my-console');
console.log(myConsole);

//const myConsole = document.querySelector('#my-console');

myConsole.innerHTML = "Hello"; // ADD "Hello" in "myConsole"


console.log( h1.getAttribute('class') );
console.log(h1);


