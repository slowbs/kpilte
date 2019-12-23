<?php

unset($_SESSION['login']);
echo json_encode([
    'message' => 'Logged Out'
    // 'session' => $_SESSION['login']
]);