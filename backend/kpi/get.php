<?php

// print_r($_SERVER);

$sql = 'SELECT * from amphur';
$query = mysqli_query($database, $sql);
$result = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

echo json_encode($result);
