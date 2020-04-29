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
  console.log("true");
}
else {
  console.log("false");
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

function message(){

let date = new Date();
let hour = date.getHours();

  if ( hour < 8)
console.log("What are you doing that early?");

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
