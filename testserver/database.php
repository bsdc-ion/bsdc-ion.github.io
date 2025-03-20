<?php
    $dbhost = "127.0.0.1";
    $dbname = "testdb";
    $user = "root";
    $pass = "";

    $conn = "";
    $conn = mysqli_connect($dbhost, $user, $pass, $dbname);

    if($conn) {
        echo"Working <br>";
    }
    else {
        echo"Try again!";
    }
?>
