<?php


if (isset($_GET['type']) && isset($_GET['kpi_id']) && isset($_GET['hmain'])) {
    $query = "SELECT c.hmainname, c.hmain, q.B, q.A, q.C, q.per, q.hospcode, ms.hospname from (
        (select sum(if(outcome = 'YES',1,0)) as A,
        count(outcome) as B,
        sum(if(outcome = 'NO',1,0)) AS C,
        ROUND(sum(if(outcome = 'YES',1,0))/count(outcome)*100, 2) as per,
        hmain, hospcode
        from `$_GET[kpi_id]` GROUP BY hospcode) as q
        left join
        cmastercup c on c.hmain = q.hmain
        left JOIN
        mas_client ms on ms.hospcode = q.hospcode)
        where q.hmain = ?
        GROUP BY q.hospcode";
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        's',
        $_GET['hmain']
    );
    mysqli_stmt_execute($stmt);
    $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);

    /** ดึง header */
    $query = 'SELECT * FROM `kpi_qof` WHERE kpi_id = ?';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param(
        $stmt,
        's',
        $_GET['kpi_id']
    );
    mysqli_stmt_execute($stmt);
    // $result2 = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    // $result = mysqli_fetch_assoc($query);
    $result2 = $stmt->get_result()->fetch_assoc();

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
        'result' => $result,
        'result2' => $result2
    ]);
} else {
    http_response_code(400);
    echo json_encode([
        'message' => 'The request is invalid'
    ]);
}
