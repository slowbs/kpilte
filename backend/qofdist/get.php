<?php


if (isset($_GET['type']) && (isset($_GET['kpi_id']))) {
    $sql = "SELECT c.hmainname, c.hmain, q.B, q.A, q.per from (
        (select sum(if(outcome = 'YES',1,0)) as A,
        count(outcome) as B,
        ROUND(sum(if(outcome = 'YES',1,0))/count(outcome)*100, 2) as per,
        hmain
        from `$_GET[kpi_id]` GROUP BY hmain) as q
        left join
        cmastercup c on c.hmain = q.hmain)
        GROUP BY q.hmain";
    $query = mysqli_query($database, $sql);
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC);

    // ถ้า error
    $error_message = mysqli_error($database);

    /** เช็ค error */
    if ($error_message) {
        http_response_code(400);
        exit(json_encode([
            'message' => $error_message
        ]));
    }

    // echo json_encode($result);
    echo json_encode([
        'result' => $result
    ]);
} else {
    http_response_code(400);
    echo json_encode([
        'message' => 'The request is invalid'
    ]);
}
