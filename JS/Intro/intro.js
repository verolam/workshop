/* COMMENTS
------------------------------*/

// This is a single comment


/* 
This is a block
comment
---------------------------
*/




/* VARIABLES
------------------------------*/
/* NAMING RULES 
-----------------------*/
// 1. No spaces
// 2. You can not start with numbers
// 3. You can not use dashes or operators
// 4. You can not use "reserved keywords"

let str = "My name is bob";
const num = 9;


/* NAMING BEST PRACTICES 
--> camel case
---------------------------*/
let my_name = "Véro";
// let myName = "Véro"; camel case
let someHeadAreGonnaRoll = "Judas Priest song"


/*  JS IS CASE SENSITIVE 
---------------------------*/
let name = "Sorin";
//  not the same as this :
let Name = "Sorin";

/*  A VAR IT 'S A CONTAINER 
* it can be EVERYTHNIG
---------------------------*/
let number = 9; //numbers
let text = "blabla"; //strings
let cond = true; //boolean
let data = [1,2,3,"Bob"]; //array
let object = {
  name: "John",
  age: 23
};




/* STRINGS
------------------------------*/
let str1 = "I'm 18 years old.";
let str2 = 'I\'m 18 years old.'; //escape charater

//in JS we concatenate with + sign
let str3 = "I'm " + 35; 
let person_name = "Bob";
let age = 32;

let phrase = name + " is " + age + " years old"; //Bob is 32 years old

// console.log(phrase, age);

/* NATIVE STRINGS METHODS
------------------------------*/
let txt     = "Apple is red";
let txtLength   = txt.length; //console.log[txtLength];

let txt2        = "Beatles"; //console.log(txt2.split(""));
let txt3        = "Powercoders"; //console.log( txt3.substr(5,2) );

/* NUMBERS
------------------------------*/
let integer    = 92; //integer
let negative   = -92; //negative
let float      = 1.5; //float
let calculate  = 8 + 2; // console.log(calculate);
let calc2      = 2 + 3 * 10; //32
let calc3      = (2 + 3) * 10; //50
let calc4      = -2 -2; //console.log(calc4); // console calc4


/* Modulo operator
------------------------------*/
let reminder; // declare the variable undefined;
reminder = 110 % 60; // console.log(reminder);
reminder = 3 % 2; // console.log(reminder);





/* NATIVE NUMBERS METHODS
------------------------------*/
let rand       = Math.random() * 10; //console.log(rand);
let randInt    = Math.round(1.5) * 10; //console.log(rand);
let roundCeil  = Math.ceil(1.2); //console.log(rand);
//let roundCeil  = Math.ceil(1.2); //console.log(roundCeil);
let roundFloor  = Math.floor(1.2);


/* ARRAY (LISTS)
------------------------------*/
let arr1  = [1,2,3,4,5]; //console.log(arr1);
let arr2  = ["Sorin", "Jane", "Tarzan"];
//console.log( arr2[1] );// 2
//console.log( arr2[2] ); //Tarzan

//NATIVE ARRAY METHODS
// Add to array
arr2.push("Bob"); //console.log(arr2);
//console.log( arr2.length );

//Delete from array
//arr2.pop(); //console.log(arr2);// Last element
//arr2.shift(); //console.log(arr2);// First element

console.log(arr2);
//arr2.splice(1,2); //console.log(arr2);



 /* 
 Using splice method to modify an array
 with 3rd argument
 */
 arr2.splice(1,0,"Freddy"); //Ajout Freddy dans arr2
 console.log(arr2);




//Change a value inside array
//arr2[1] = "Rachel"; //console.log(arr2);




/* FUNCTIONS
--------------------------------------*/
function calculateAge(name, birthYear) {

  //let name = "Vero";
  let date = new Date();
  let currentYear = date.getFullYear(); // console.log(currentYear);
  let age = currentYear - birthYear;
  
  let display = name + " is " + age + " years old";

  return name + " is " + age + " years old"; // Exit here
  
//Nothing will be displayed after the 

  let Bob = 56;
  return Bob;

}
console.log( calculateAge("Vero",1970) );
//console.log( calculateAge("Titi",1975) );

/* 
function which return the day of the week with
a number argument*/

function dayOfTheWeek(index) {

 let days = ["Monday", "Tuesday","Wednesday","Thursady","Friday","Saturday", "Sunday"] 

return days[index];

}

//console.log( dayOfTheWeek(1) );


/* Function saying a message with a givenname */

function givName(msg,name){

  display = msg + " " + name + " !";
  return display

}

console.log(givName("Hi","Bob"));

/* 
Convert minutes into seconds
*/
function minToSec(min) {

  console.log( min + " minutes = " +  min * 60 + "secondes");
}

minToSec(52);

 minToSec(50);

/* 
Prompt window
*/

function minToSecPrompt() {

  let userInput = parseInt( prompt("Number of minutes"));
console.log(userInput)
}

 //minToSecPrompt;



 
/* OBJECTS
--------------------------------------*/
//Name, gender, age, country

let person = {
  
  name: "Bob Geldof",
  gender: "man",
  age: 68,
  country: "UK"  

}
// console.log(person);

// console.log(person['name'])
/ console.log(person.name); //dot.notation
 

let persons = {

  bob: {
    name: "Bob Geldof",
    gender: "man",
    age: 68,
    country: "UK"
  },
  marco: {
    name: "Marco van Basten",
    gender: "man",
    age: 45,
    country: "Holland"
  },
  nadia: {
    name: "Nadia Comaneci",
    gender: "female",
    age: 45,
    country: "Romania"
  }


}

console.log(person.marco.name);