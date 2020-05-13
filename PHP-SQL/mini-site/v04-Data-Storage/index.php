<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

//My custom print_r function
function show($arr) {

  echo '<pre>';
  print_r($arr);
  echo '</pre>';

}

// Get page from URI
$page = isset($_GET['page']) ? $_GET['page'] : 'index'; // echo $page;

//GRAB THE JSON CONTENT
$site_data_json = file_get_contents("site_data.json");

//Convert the json content into PHP array
//Has 2 arguments: the json string AND the data type :
//true → conversion to an array
//false → conversion to an object (by default)
$site_data = json_decode($site_data_json, true); // show($site_data);

//Only the pages array :
$pages = $site_data['pages'];

//show( $pages['work']['title'] );
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo $pages[$page]['title']; ?></title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $site_data['description']; ?>">
  <meta name="keywords" content="<?php echo $site_data['keywords']; ?>">
  <meta name="author" content="<?php echo $site_data['author']; ?>">

  <link rel="icon" href="img/favicon.png">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <ul class="menu">
        <li class="menu-item"><a href="?page=index">HOME</a></li>
        <li class="menu-item"><a href="?page=work">WORK</a></li>
        <li class="menu-item"><a href="?page=contact">CONTACT</a></li>
      </ul>
    </nav>

  </header>


  <!-- CONTENT -->
  <main class="content">

    <!-- Main Title -->
    <h1 class="main-title"><?php echo $pages[$page]['title']; ?></h1>

    <?php
    // You could echo the title here like this, insted of creating the html tag above :
    // echo '<h1 class="main-title">'.$pages[$page]['title'].'</h1>';

    // Grab an external content methods :
    // Include function 
    // include("html/index.html");

    // Include once function
    // include_once("html/index.html");

    // Require function
    // require("html/index.html");

    //Require once function
    require_once("html/$page.html");
    ?>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>