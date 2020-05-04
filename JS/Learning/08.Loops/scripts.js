/* FOR LOOPS
--------------------------------- */
//let names = ["James", "Julia","Edith"];

// show(names);

let num = 10;

// Classic loop:
// 1st part = initialization
// 2nd part = condition - when do you want to stop the loop
// 3rd part = incrementation

for (let i = 1; i <= 10; i++) {
show("my current nymber is " + i);

}

let names = ["James", "Julia","Edith"];


for ( let i = 0; i <= names.length; i++ ) {
  show(" name : " + names[i]);

}


// CHALLENGE
// 1. Display the numbers between 20 and 30
// Given this array :


//1 
for (let i= 20; i<=30; i++ ){
//show(i);
}


//2 Display the properties of an array

let todos = [
  {
    text: "Learn JS",
    completed: true
  },
  {
    text: "Learn PHP",
    completed: false
  },
  {
    text: "Learn Python",
    completed: false
  }
];

 

// Second way 

for (let i=0; i < todos.length; i++) {
let text = todos[i].text;
let completed = todos[i].completed ;
let displayStatus = (completed) ?  " Done" : " Todo ...";

let output = text + " " + displayStatus;
show(output);

}
  

  /* FOREACH LOOPS
--------------------------------- */
// We call the function argument "Closure" or "anonymous function"

todos.forEach(function(item){
//show(item.text);

});


// other way to do the same 

function bob(item){
 // show(item.text);
}

todos.forEach(bob);