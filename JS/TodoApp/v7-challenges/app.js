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

