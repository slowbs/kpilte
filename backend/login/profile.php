<?php

if ( isset($_SESSION['login']) && !empty($_SESSION['login']) )
{
    $id = $_SESSION['login'];
    $query = mysqli_query($database, "SELECT username, user_type, hospcode from users WHERE id = $id");
    $result = mysqli_fetch_assoc($query);
    $_SESSION['user']['user_type'] = $result['user_type'];
    $_SESSION['user']['hospcode'] = $result['hospcode'];
    exit(json_encode($result));
    // exit(json_encode($id));
}