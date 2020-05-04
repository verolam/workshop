/* CONDITIONS
------------------------------------*/
// Comparisons operators :
// >= greater or equal to
// <= less or equal to 
// == equal to
// === equal to and the same type
// != NOT equal to
// !== NOT equal to and not the same type
// 


// A SIMPLE CONDITION
let num = 5;
let num2 = 20;

if (num > 10) {
  console.log("True!!");
}
else {
  console.log("FALSE!");
} 

// A STRICT EQUALITY CHECK CONDITION
if (num === 5){
  show("Strict equality", "TRUE");
  console.log("true");
}
else {
  console.log("false");
  show("Strict equality", "TRUE");
}

// A DOUBLE CHECK WITH "OR" (logical operator)
// One condition must be true
if (num > 5 || num < 30 ) {
  console.log("TRUE");
}

// A DOUBLE CHECK WITH "AND" (logical operator)
// BOTh condictions must be true

if ( num > 5 && num2 <30){
console.log("double check AND", "TRUE");
}

//USING NOT OPERATOR
if (num != 5) {
console.log("FALSE");
}

// COMPLEX CHECKS

if ( (num === 5 && num > 5) || (num2 == 20 || num2 > 20) ){
console.log("complex cond : TRUE!");
}


// CHALLENGE 

function message(customHour = null){
// IF customHours ===?
/// customHour = null // false

let date = new Date();
let hour = date.getHours();
let output ="";



  if ( hour < 8) {
  console.log("What are you doing that early?");
  }

if (hour >= 8 && hour <=12)
   console.log("Good morning");

if (hour >= 12 && hour <= 17)
  console.log("Good afternoon");  

if (hour >= 17 && hour <= 21 )
console.log("Good evening");

if (hour > 21 )
console.log("Good night");

};

message();


/*  ELSE IF STATMENT
---------------------- */
function message(hour){
  
if ( hour < 8) {

  show("What are you doing that early?");
  }

else if (hour >= 8 && hour <=12){
  show("Good morning");
}
  
else if (hour >= 12 && hour <= 17) {
  show("Good afternoon"); 
}
   
else if (hour >= 17 && hour <= 21 ) {
  show("Good evening");
}

else if (hour > 21 ) {
  show("Good night");
}

else {
 show("Not sure what you typed");
}

}

message(25);


/* THE BANG OPERATOR (LOGICAL NOT)
---------------------- */

let n =56;
let bool = true;

show(n != 56); //false
show ( !bool); //false


/*THE TERNARY OPERATOR 
 -----------------------*/

let num5 = 25;

if (num5 >= 25) {
  output = "TRUE";
}
else {
  output = "FALSE";
}

show(output);


        //CONDITION  then IF TRUE  IF FALSE
 output = (num5 >= 25) ? "TRUE" : "FALSE";
show(output);


output = num5 >=25;
if(output) {
  show("Yes is true!");
}


/* THE SWITCH
---------------------*/
switch(new Date().getDay){
  case 0 :
    day = "Sunday";
    break;
    case 1 :
    day = "Monday";
    break;
}


/* Dates
-------------- */

let day = new Date().getDay(); // show(day); 

// The switch - "day" is the expression you want to evalauate
switch(day){

case 0 :
  output = "Sunday";
break;

case 1 :
  output = "Monday";
break;

case 2 :
  output = "Tuesday";
break;

case 3 :
  output = "Wednesday";
break;

case 4 :
  output = "Thursday";
break;

case 5 :
  output = "Friday";
break;

case 6 :
  output = "Saturday";
break;

default : 
output = "Dont know what you 're typing";
}

show(output);

show(new Date());