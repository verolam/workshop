/*  DOM = Document Object Model
-------------------------------*/
// queryselector()  returns the first Element within 
// the document that matches the specified selector 'h1'


// Grab the object 'h1' and store it
const h1 = document.querySelector('h1');

// Display the Object
console.log(h1);

// Display the inner content of the object h1
console.log(h1.innerHTML);

// Change text content
h1.innerHTML = "Changement de titre :)";
console.log(h1)

//Add an id attribute with the value of main-title
h1.setAttribute("id", "main-title");
console.log(h1)

//Add a class attribute with the value of title
h1.classList.add("title");
console.log(h1)




