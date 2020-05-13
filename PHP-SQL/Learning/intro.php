<?php
/* COMMENTS
----------------------------------*/
// Single line comment
#  Single line comment
/* 
Multi 
line
comments
*/


/* VARIABLES : use the $ sign
-----------------------------------*/
$num = 4;
$str = "String";
$bool = true;
$arr = [1,2,3,4];
$void = null;


/* ARRAYS
-----------------------------------*/
$arr = [1,2,3,"String",false,null]; // like in JS
$arr2 = array(1,2,3,"String",false,null); // like PHP


// echo $arr[3]; // shows the 3rd index
// print $arr[3]; //idem
// print_r($arr);
show($arr);

array_push($arr, "bob");
array_pop($arr); //remove the last
array_shift($arr);// show($arr);

// Pushhing something at the end
$arr[] = "Something at the end"; show($arr);
$arr[2] = 33; show($arr); // replace value of arr[2] by 33

//Multidimensional array
$website_data = [
  'global-title' => "This is my first php website",
  'keywords' => "php,dev,bob",
  'author'   => "Véro",
  'pages'    => [
      'home' => [
      'title' => "Welcome to my humble home",
      'menu'  => "Home"
  ],
      'work' => [
      'title' => "This is my work",
      'menu'  => "Work"
   ],
      'contact' => [
      'title' => "This is my contact",
      'menu'  => "Contact"
    ]
  ]
];

show( $website_data['pages']['work']['title']);

show($pages['global-title']);


/* FUNCTIONS
-----------------------------------*/
function show($arr) {

  echo '<pre>';
  print_r($arr);
  echo '</pre>';

}


/* function surface 
-------------------------------------- */
function calculte_surface($arg1 = 0, $arg2 = 0) {

 // This will be shown directly when you call function() 
 // echo $arg * $arg2;
 // show($arg * $arg2);

 // this will return result without showing in console
  return $arg1 * $arg2; 
}

$calc = calculte_surface(10, 20); show($calc);


/* function website
-------------------------------------- */

// A function uses a local "scope"
// We have to use a special key word in order to use a global scope



function site($key = '', $page_key = '', $title = true) {

  global $website_data, $pages, $arr;

  if ( page_key != '') {
      $page_str = ($title) ? 'title' : 'menu'; 
     return $website_data['pages'][$page_key][$page_str];
  }

  return $website_data[$key];

}

show ( site( 'pages', 'contact' ) ); // affichage fonction site()

show ( site( '', 'work', false ) ); // 




/* CONDITIONS
-------------------------------------- */
$n = 10 ;
if ($n>5) {
  show ("True");
 
}

if ($n > 5 && $n > 10 ) {
  show("true");
}
else {
  show("false");
}


$hour = 9;

if($hour < 7 ) {
  show("So early ?");
}
elseif($hour >=7 && hour <=12) {
 show ("Good morning");
}
else {
  show (" Im not sure what you re saying");
}



/* LOOPS
-------------------------------------- */
$n = 10;

// Show numbers from 1 to 10
for ($i=1; $i <= $n; $i++ ) {

show ($i);

}


// The best for array is to use forEach
// A foreach could return only values 
foreach($website_data as $val) {
  show($val);
}


// ...  OR the pair key/value
foreach($website_data as $key => $val) {
  show($key);
  show($val);
  }

