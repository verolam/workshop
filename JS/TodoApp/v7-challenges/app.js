//alert("It's working!");
//confirm("It's working!");


/*  Playlist App
---------------------------------*/

let playlist = [
  {name:   "Balavoine",
  title : "Mon fils, ma bataille",
  year:   1980
  }
]


/* Function display Playlist
---------------------------------*/
function displayPlaylist(){
 
  console.log(playlist);
 // show(playlist);
}


/* Function add Playlist
---------------------------------*/
// The argument passed to the function is an Object
let msg = "";

function addPlaylist(arg){
  if (arg.name == ""){
    alert("name is empty"); 
    msg = "true";
  }

  if (arg.title == ""){
   alert("title is empty"); 
   msg = "true";
  }

  if (arg.date == ""){
    alert("date is empty"); 
    msg = "true";
   }

//    //show(arg.year);
//    if (arg.year.length !== 4) {
//     alert("Year is not proper. Please check");
//     msg = "true";
// }


  // if(isNaN(arg.date) == true)
  // {
  //   show(arg.date);
  //   alert("arg.date n\'est pas un nombre");
  //   msg = "true"
  // }

  show(playlist);
  if (msg == ""){
    playlist.push(arg);
  }
   
 }

addPlaylist({
  name:   "Balavoine",
  title : "Sauver l'amour",
  year:   1985
})

addPlaylist({
  name: "Balavoine",
  title : "Le Chanteur",
  year:   1978
}) 

displayPlaylist();



/* The Farm Problem
---------------------------------*/
/*  In this challenge, a farmer is asking you to tell him
 how many legs can be counted among all his animals.
 The farmer breeds three species:*/

let numLeg = 0;
 function animals(chicken, cows, pigs){
numLeg = chicken * 2 + cows * 4 + pigs * 4;
console.log ("The number total of legs is " + numLeg) 

}
 animals(2, 3, 5) // ➞ 36

 animals(1, 2, 3) // ➞ 22
 
 animals(5, 2, 8) // ➞ 50


 /* Find the Smallest and Biggest Numbers
 ---------------------------------------- */
/*  Create a function that takes an array of numbers
 and return both the minimum and maximum numbers, in that order.*/

 function minMax(list) {
  minList = Math.min(...list); // add "..." if you pass an array
  maxList = Math.max(...list);
  console.log("The Min of the list is " +  minList + " and the max is " + maxList);
 }

minMax([1, 2, 3, 4, 5]) // ➞ [1, 5]
minMax([2334454, 5]) // ➞ [5, 2334454]
minMax([1]) // ➞ [1, 1]


/* LOOP :  Filter out Strings from an Array
-------------------------------------- */
/* Create a function that takes an array of non-negative 
integers and strings and return a new array without the strings. */

function filterArray(list2) {
let i = 0;
let list3 = []; // new array with only integer

for (i=0; i < list2.length ; i++)
  if (Number.isInteger(list2[i])) {
    console.log(list2[i] + " is an integer");
    list3.push(list2[i]); // add integer in the list
   
  } 
  else {
    console.log(list2[i] + " is not an integer");
      
  }

  list2 = list3; // new list2 
  
}

filterArray([1, 2, "a", "b"])   // ➞ [1, 2]
filterArray([1, "a", "b", 0, 15]) // ➞ [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) // ➞ [1, 2, 123]



/*THE TERNARY OPERATOR 
 -----------------------*/
// Using the ternary operator create a condition who checks if today is Tuesday 

 let date = new Date();
 day = date.getDay();
 show(day);

 
         //CONDITION   IF TRUE  IF FALSE
  output = (day == 2) ? "Tuesday" : "Not Tuesday";
 show(output);


 /* Equality of 3 Values
 ----------------------------- */
 // Create a function that takes three integer arguments (a, b, c) and returns the
 //amount of integers which are of equal value. 


function equal(int1, int2, int3 ){
let count = 0;
let output = "";

console.log(int1, int2, int3);

if (int1 == int2 ){
  count = count + 1;
}
if (int1 == int3 ){
  count = count + 1;
}
if (int2 == int3 ){
  count = count + 1;
}

output = "They are " + count  + " elements of equal value";
console.log(output);
}

equal(3, 4, 3) // ➞ 2
equal(1, 1, 1) // ➞ 3
equal(3, 4, 1) // ➞ 0



/* Strictly Increasing or Decreasing
----------------------------------------*/
//Create a function that takes an array and determines whether it's strictly 
//increasing, strictly decreasing, or neither.

function check(arr){
let output = "";

for (let i=0; i<= length ; i++){
  if ( (arr[i] < arr [i+1]) && (arr[i+1] < arr[i+2])){
    output = "increasing";
  }
  else if ( (arr[i] > arr [i+1]) && (arr[i+1] > arr[i+2])){
    output = "decreasing";
  }
  else output = "neither"
  }

  console.log("The array [" + arr + "] is " +  output);
}

check([1, 2, 3]) // ➞ "increasing"
check([3, 2, 1]) // ➞ "decreasing"
check([1, 2, 1]) // ➞ "neither"
check([1, 1, 2]) // ➞ "neither"


/* Loops  :  counting persons by Gender
---------------------------------------*/
// Create an array containing 6 persons, girls and boys. 
// Each person should have 2 keys, name and gender.

//Loop into the array and check how many girls and boys do you have. 
//The output should // be something like : "My list contains 2 girls and 4 boys"

let person = [
  {
    name :  "Penelope",
    gender : "female"
  },

  {
    name :  "Teresa",
    gender : "female"
  },

  {
    name :  "Rocky",
    gender : "male"
  },

  {
    name :  "Mireille",
    gender : "female"
  },

  {
    name :  "Mehdy",
    gender : "male"
  },
];

function NumGender (){
  let numM = 0; // number of Boys
  let numF = 0; // number of girls
  let output = "";
  let length = person.length;

  for (let i=0; i < length; i++){
  console.log(person[i].gender);  
  if (person[i].gender == "male" ){
    numM = numM + 1;
  } 
  else if (person[i].gender == "female" ){
    numF = numF + 1;
  } 
  }

  output = "My list contains " + numF + " girls and "+ numM + " boys";
  console.log(output);
}

//call of the function
NumGender();