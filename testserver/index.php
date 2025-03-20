<?php
    include("database.php");
?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>boilerplate</title>
    <link rel="stylesheet" href="/testserver/styles.css">

    <!-- Coded by MLGBD -->
</head>
<body>
    <?php 
        $sql = "SELECT * FROM `users`";
        $result = mysqli_query($conn, $sql);
        
        if(mysqli_num_rows($result) >  0) {
            while($row = mysqli_fetch_assoc($result)) {
                echo "id: " . $row["ID"]. " Name: " . $row["Name"]. "<br>";
            }
        }
        else {
            echo "0 results";
        }
    ?>
    <form name="form" action="http://127.0.0.1:5500/testserver/doit.php" method="GET">
        <input type="text" name="fname" id="fname" placeholder="Enter name">
        <button type="submit">Submit</button>
    </form>
</body>
</html>