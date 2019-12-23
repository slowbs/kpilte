<?php

if ( isset($_SESSION['login']) && !empty($_SESSION['login']) )
{
    $id = $_SESSION['login'];
    $query = mysqli_query($database, "SELECT * from users WHERE id = $id");
    $result = mysqli_fetch_assoc($query);
    exit(json_encode($result));
    // exit(json_encode($id));
}