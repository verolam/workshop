//alert("It's working!");
//confirm("It's working!");

/* TODO LIST - Global scope
todoList is an array 
---------------------------------*/

let todoList = [
  "Go shopping",
  "Buy tobacco",
  "Do this",
  "Do that"
];


/* DISPLAY TODO 
---------------------------------*/
// Function which display the todolist Array

function displayTodos(){

  console.log(todoList);

}


/* ADD TODO
---------------------------------*/
// Function which ADD an element in the Array todoList
// then the previous function displayTodos() is called to show the result

function addTodos(arg){

todoList.push(arg);
displayTodos();

}

addTodos("My New todo");


/* Change a TODO
---------------------------------*/
// Function which change and element of the array targetted by its index
 

function changeTodo(index, text){

  todoList[index] = text;
  displayTodos();
   
  }
  
  changeTodo(1, "Buy sugar");      // element "Buy Tobacco" ==> "Buy sugar"   
  changeTodo(2, "Go for a walk");  // element "Do This" ==> "Go for a walk"
  

/* Delete a TODO
---------------------------------*/
// Function which delete one or several elements (numberToDelete) from a position(index1)
function deleteTodo(index1, numberToDelete = 1){

  todoList.splice(index1, numberToDelete);
  displayTodos();
   
  }
  
  deleteTodo(1,1); //  Delete element one element with index 1


//===========================================================================
/* Function Remainder
---------------------------------*/
function remainder(num1, num2){

let modulo = num1 % num2;
console.log("The remainder between " + num1 + " and " + num2 + " is " + modulo);
return modulo ;


}

remainder(2560,3); // remainder =1
remainder(2550,5); // remainder = 0



//===========================================================================

/* Function Frame per second
---------------------------------*/
function frames(minute, number) {

let fps = minute * number * 60;
console.log("For " + minute + " minutes " + " and number " + number + "the FPS IS "  + fps);
return fps;
}
frames(1 , 1); //60
frames(10,1); // 600
frames(10, 25) // 15000   




//===========================================================================


/* Function Cities with facts using an object
---------------------------------*/
// The argument passed to the function is an Object

function cityFacts(arg){
  console.log(arg.name + " has a population of " + arg.population + " and is situated in " + 
 arg.continent);
}


cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
}) // "Paris has a population of 2,140,526 and is situated in Europe"

cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
}) // "Tokyo has a population of 13,929,286 and is situated in Asia"



 //===========================================================================

/* Function to calculate surface
---------------------------------*/
function surface(type,dim1,dim2){
   
  let result = 0;
  switch (type) {
    case "square":
    case "rectangle":
      result = dim1 * dim2;
      break;
    case "triangle" :
      result = dim1 * dim2 *0.5;
      break;
}
    console.log("The area for a " + type + " is " + result + "m2");

}

surface("triangle",25,10);
surface("rectangle",25,10);
surface("square",25,10);



 //===========================================================================

/* Function calculate profit
---------------------------------*/
// The argument (arg)  is an object !!!!

function profit(arg){

let result = 0;
result =  ( arg.sellPrice * arg.inventory) - (arg.costPrice * arg.inventory) ;
result = Math.round(result);
console.log(result);
}


profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
}) // ➞ 14796

profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
}) // ➞ 32411

profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
}) // ➞ 44030



//===========================================================================

/* Function Cities with facts 
---------------------------------*/
let cities = [

  {
    name : "Paris",
    population :  "2.148.000",
    continent :  "Europe"
  },
  
  { name : "Milan",
    population : "1.352.000",
    continent: "Europe"
  },
  
  { name : "Tokyo", 
    population :"37.280.000",
    continent: "Asia"
  },
  
  { name : "Casablanca", 
    population :"3.360.000", 
    continent: "Africa"
  },
  
  { name : "Washington",
    population : "702450",
    continent: "America"
  }
  ];
  
  function cityFacts2(city){
    let i;
    let trouve = 0; // If city found trouve = 1
    for (i=0; i<5; i++){
  
      if (city == cities[i].name) {
        console.log(cities[i].name + " has a population of " + cities[i].population + " and is situated in " + cities[i].continent);
        trouve = 1;
      }
          
     }
     if (trouve == 0) {    
      console.log("city not registered");
    }
    
  }
  
  cityFacts2("Paris");
  cityFacts2("Berlin");
  cityFacts2("Milan");
  cityFacts2("Tokyo");
  show(cities);
  
  
 //===========================================================================

/* Function testing String isEmpty
---------------------------------*/
function isEmpty(str){
output = " ";

if (str === "" )
output = "true";
else output = "false";

console.log(output);
}

isEmpty("") // ==> true
show(output);
isEmpty(" ") // ➞ false
show(output);
isEmpty("a") // ➞ false
show(output);


 //===========================================================================

/* Function testing if an integer is divisible by 5 
--------------------------------------------------*/
// A number is divisible by 5 if remainder = 0 or 5

function divisibleByFive(int) {
  let modulo2 = 0;
  let output = "";

  modulo2 = (int % 5);
  show(modulo2);
  if (modulo2 == 0 || modulo2 == 5 || modulo2 == -5) {
    output = "true";}
  else { output = "false"; }
  
  console.log("divisibleByFive", output);  
}
  

divisibleByFive(5) // ➞ true
divisibleByFive(-55) // ➞ true
divisibleByFive(37) // ➞ false


/* Is the Number Less than or Equal to Zero?
--------------------------------------------------*/

//  Create a function that takes a number as its only argument and
//  returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
if (num<= 0) {
  console.log("lessThanOrEqualToZero", "true");
  }
else {
  console.log("lessThanOrEqualToZero", "false");
}
}

lessThanOrEqualToZero(5) // ➞ false
lessThanOrEqualToZero(0) // true
lessThanOrEqualToZero(-2) //  ➞ true



/*Is the Number Even or Odd?
--------------------------------------------------*/
// Create a function that takes a number as an argument
// and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num2) {
  remainder = 0;
  remainder = num2 % 2;
  if (remainder == 0 ){
    console.log("isEvenOrOdd", "Even" );
  }  
  else {
    console.log("isEvenOrOdd", "Odd" );
  }
}


isEvenOrOdd(3)    // ➞ "odd"
isEvenOrOdd(146)  // ➞ "even"
isEvenOrOdd(19)   // ➞ "odd"


