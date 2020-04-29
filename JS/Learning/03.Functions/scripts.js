/* FUNCTIONS
------------------------------------*/
function calculateAge(name, birthYear) {

  let date = new Date();
  let currentYear = date.getFullYear(); //console.log(currentYear);
  let age = currentYear - birthYear;

  let display = name + " is " + age + " years old!";

  console.log(display);

  return display; // EXIT here !

}

//let bob_age = calculateAge("Bob", 1954);
//console.log(bob_age);

//calculateAge("Marc", 1985);
//calculateAge("Bobby", 1981);

//console.log( calculateAge("Bob", 1974) );
//console.log( calculateAge("Sorin", 1966) );
//console.log( calculateAge("Marc", 1985) );


//Return day of the week based on a number
function dayOfTheWeek(index) {

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return days[index];

}

//let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//console.log(days[1]);

//console.log( dayOfTheWeek(6) );

//----------

//Greeting Function
//sayHello("Bob"); → "Hello Bob !"
//sayHello("Dada"); → "Hello Dada !"
function sayHello(greeting, input) {

  console.log(greeting + " " + input + " !"); //Hello, Hi, Bonjour...

}
// sayHello("Hello", "Bob");
// sayHello("Hi", "Marc");

//----------

//Convert minutes into seconds
//minToSec(52) → 3120 sec;
function minToSec(minutes) {

  console.log(minutes + " minutes = " + (minutes * 60) + " seconds" );

}
//minToSec(60);
//minToSec(24*60);
//BONUS - Using prompt instead of an argument
function minToSecPrompt() {

  let userInput = parseInt( prompt("Number of minutes") ); //by default it's a string
  console.log(userInput + " minutes = " + (userInput * 60) + " seconds" );

}
//minToSecPrompt();



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
    
    
    