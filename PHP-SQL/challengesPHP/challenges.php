<?php

/*
Variables start with symbol => '$'
Concatenation is with "."
The legnth is with function count()
Definition of properties in array is with "=>"
At the end of the instruction put ";"
Min and max ==>   min($list); $maxList = max($list

*/

//=============================================

/* FUNCTION show() to print 1 result by line
-----------------------------------*/
function show($arr) {

  echo '<pre>';
  print_r($arr);
  echo '</pre>';

}

//=============================================


/* Function calculate profit
---------------------------------*/

$table = [
[ 
  '$costPrice' => 32.67,
  '$sellPrice' => 45.00,
  '$inventory' => 1200
]
,
[
  '$costPrice' => 225.89,
  '$sellPrice' => 550.00,
  '$inventory' => 100
],

[
  '$costPrice' => 2.77,
  '$sellPrice' => 7.95,
  '$inventory' => 8500
]

];


//count($table) to get the length (number of elements)

function profit(){
   global $table;
   $num = count($table);
  for ($i=0; $i< $num; $i++){
    $result = $table[$i]['$sellPrice'] * $table[$i]['$inventory'] - $table[$i]['$costPrice'] * $table[$i]['$inventory'];
    show($result);
  }
}

profit();


//=============================================


/* Function Remainder
---------------------------------*/
// Concatenation in PHP is with "."

function remainder($num1, $num2){

  $modulo = $num1 % $num2;
  show("The remainder between " .$num1 ." and " . $num2 ." is=> " .$modulo);
  return $modulo ;
    
  }
  
  remainder(2560,3); // remainder =1
  remainder(2550,5); // remainder = 0
  

//=============================================


  /* Function Cities with facts 
  ---------------------------------*/
   $city = [ 
    [
    'name' => "Paris",
    'population' => "2,140,526",
    'continent'  => "Europe" 
  ],
  [
    'name'      => "Tokyo",
    'population'=> "13,929,286",
    'continent' => "Asia" 
  ]  
  ];

  function cityFacts(){
    global $city; // Put table $city GLOBAL to get access to it
    for ($i=0; $i<2;$i++){
      show($city[$i]['name'] ." has a population of " .$city[$i]['population'] ." and is situated in " .$city[$i]['continent']  );
    }
  }
    
  cityFacts();
  
 
//============================================= 


/* Function testing if an integer is divisible by 5 
--------------------------------------------------*/
// A number is divisible by 5 if remainder = 0 or 5

function divisibleByFive($int) {
  $modulo2 = 0;
  $output = "";

  $modulo2 = ($int % 5);
 
  if ($modulo2 === 0 || $modulo2 === 5 || $modulo2 === -5) {
    $output = "true";}
  else { $output = "false";
  }
  
  show("divisibleByFive ".$output);  
}


divisibleByFive(5); // ➞ true
divisibleByFive(-55); // ➞ true
divisibleByFive(37); // ➞ false

  
//=============================================


/* Loops  =>  counting persons by Gender
---------------------------------------*/
// Create an array containing 6 persons, girls and boys. 
// Each person should have 2 keys, name and gender.

//Loop into the array and check how many girls and boys do you have. 
//The output should // be something like => "My list contains 2 girls and 4 boys"

$person = [
  [
  
    'name' =>  "Penelope",
    'gender' => "female"
],

  [
    'name' =>  "Teresa",
    'gender' => "female"
  ],

  [
    'name' =>  "Rocky",
    'gender' => "male"
  ],

  [
    'name' =>  "Mireille",
    'gender' => "female"
  ],

  [
    'name' =>  "Mehdy",
    'gender' => "male"
  ]

];


function NumGender (){
  global $person;
  $numM = 0; // number of Boys
  $numF = 0; // number of girls
  $output = "";
  $length = count($person);

  for ($i=0; $i < $length; $i++){
 
    if ($person[$i]['gender'] == "male" ){
      $numM +=  1;
  }
    else if ($person[$i]['gender'] == "female" ){
      $numF += 1;
  }
}

  show("My list contains " . $numF . " girls and " . $numM . " boys");
  
};

//call of the function
NumGender();


//=============================================

 /* Find the Smallest and Biggest Numbers
 ---------------------------------------- */
/*  Create a function that takes an array of numbers
 and return both the minimum and maximum numbers, in that order.*/

 function minMax($list) {
  $minList = min($list); // add "..." if you pass an array
  $maxList = max($list);
  show("The Min of the list is " .  $minList . " and the max is " . $maxList);
 }

minMax([1, 2, 3, 4, 5]); // ➞ [1, 5]
minMax([2334454, 5]); // ➞ [5, 2334454]
minMax([1]); // ➞ [1, 1]


//=============================================