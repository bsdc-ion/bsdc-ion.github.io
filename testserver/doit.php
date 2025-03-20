<?php
    include 'database.php';

    echo "<pre>";
    var_dump($_GET);
    echo "</pre>";

    // Collect form data
    if (!empty($_GET["fname"])) {
        $value =  mysqli_real_escape_string($conn, $_GET['fname']);
        $stmt = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt, "s", $value);
        if (mysqli_stmt_execute($stmt)) {
            echo "User added successfully: " . htmlspecialchars($_GET["fname"]);
        } else {
            echo "Error: " . mysqli_error($conn);
        }
        // Close the statement
        mysqli_stmt_close($stmt);
    }
    else echo"empty";
?>