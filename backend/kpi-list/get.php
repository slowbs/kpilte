<?php


if (isset($_GET['type']) && isset($_GET['status'])) {
    if ($_GET['status'] = 1) {
        $query = 'SELECT * FROM `kpi_list` k 
        WHERE k.type = ? and k.par <= 1';
        $stmt = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param(
            $stmt,
            's',
            $_GET['type']
        );
        mysqli_stmt_execute($stmt);
        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        // ถ้า error
        $error_message = mysqli_error($database);

        /** เช็ค error */
        if ($error_message) {
            http_response_code(400);
            exit(json_encode([
                'message' => $error_message
            ]));
        }

        /** ส่งค่าไป frontend */
        echo json_encode([
            'result' => $result
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode([
        'message' => 'The request is invalid'
    ]);
}
