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
  show(playlist);
}


/* Function add Playlist
---------------------------------*/
// The argument passed to the function is an Object
let msg = "";

function addPlaylist(arg){
  if (arg.name == ""){
    alert("name is empty"); 
    msg = "true"
  }

  if (arg.title == ""){
   alert("title is empty"); 
   msg = "true"
  }

  if (arg.date == ""){
    alert("date is empty"); 
    msg = "true"
   }

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