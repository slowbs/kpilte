<?php

$data = json_decode(file_get_contents('php://input'));

if (isset($data->username) && isset($data->password)) {

    if (empty($data->username)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรุณากรอก email'
        ]));
    } elseif (empty($data->password)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'กรุณากรอก phone'
        ]));
    }

    $username = mysqli_real_escape_string($database, $data->username);
    $password = md5(mysqli_real_escape_string($database, $data->password));
    $query = mysqli_query($database, "
        SELECT * from 
        users where 
        username = '$username' and 
        password = '$password'
    ");
    $result = mysqli_fetch_array($query, MYSQLI_ASSOC);

    //http_response_code(400);
    //$_SESSION['login'] = $data;
    if (empty($result)) {
        http_response_code(400);
        exit(json_encode([
            'message' => 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง'
        ]));
    }

    $_SESSION['login'] = $result['id'];
    //http_response_code(400);
    exit(json_encode([
        'message'   => 'Login สำเร็จ',
        //'session'   => $_SESSION['login']
        //'result'    => $_SESSION['login']
    ]));
}

http_response_code(400);
echo json_encode([
    'message' => 'The reqeust is invalid',
    $data
]);
