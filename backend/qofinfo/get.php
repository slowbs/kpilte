<?php


if (
    isset($_GET['type']) && isset($_GET['kpi_id']) && isset($_GET['hmain'])
    && isset($_GET['hospcode']) && isset($_GET['status'])
) {
    if (isset($_SESSION['login']) && ($_SESSION['user']['hospcode'] == $_GET['hospcode'])) {
        if ($_GET['status'] == 1) {
            // $query = "SELECT cl.hospcode, cl.pid, cl.cid, cl.name, cl.birth, cl.date_start, cl.date_end, 
            // cl.date_serve, cl.outcome from (
            //     (SELECT * FROM `$_GET[kpi_id]` ) as cl
            //     left join cmastercup c on c.hsub = cl.hospcode )
            //     where cl.hospcode = ?";
            $query = "SELECT * from (
            (SELECT * FROM `$_GET[kpi_id]` ) as cl
            left join cmastercup c on c.hsub = cl.hospcode )
            where cl.hospcode = ?";
            $stmt = mysqli_prepare($database, $query);
            mysqli_stmt_bind_param(
                $stmt,
                's',
                $_GET['hospcode']
            );
            mysqli_stmt_execute($stmt);
            // ถ้า error
            $error_message = mysqli_error($database);

            /** เช็ค error */
            if ($error_message) {
                http_response_code(400);
                exit(json_encode([
                    'message' => $error_message
                ]));
            }
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        } else if ($_GET['status'] == 2) {
            // $query = "SELECT cl.hospcode, cl.pid, cl.cid, cl.name, cl.birth, cl.date_start, cl.date_end, 
            // cl.date_serve, cl.outcome from (
            //     (SELECT * FROM `$_GET[kpi_id]` ) as cl
            //     left join cmastercup c on c.hsub = cl.hospcode )
            //     where cl.hospcode = ? and cl.outcome = 'YES'";
            $query = "SELECT * from (
            (SELECT * FROM `$_GET[kpi_id]` ) as cl
            left join cmastercup c on c.hsub = cl.hospcode )
            where cl.hospcode = ? and cl.outcome = 'YES'";
            $stmt = mysqli_prepare($database, $query);
            mysqli_stmt_bind_param(
                $stmt,
                's',
                $_GET['hospcode']
            );
            mysqli_stmt_execute($stmt);
            // ถ้า error
            $error_message = mysqli_error($database);

            /** เช็ค error */
            if ($error_message) {
                http_response_code(400);
                exit(json_encode([
                    'message' => $error_message
                ]));
            }
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        } else if ($_GET['status'] == 3) {
            // $query = "SELECT cl.hospcode, cl.pid, cl.cid, cl.name, cl.birth, cl.date_start, cl.date_end, 
            // cl.date_serve, cl.outcome from (
            //     (SELECT * FROM `$_GET[kpi_id]` ) as cl
            //     left join cmastercup c on c.hsub = cl.hospcode )
            //     where cl.hospcode = ? and cl.outcome = 'NO'";
            $query = "SELECT * from (
            (SELECT * FROM `$_GET[kpi_id]` ) as cl
            left join cmastercup c on c.hsub = cl.hospcode )
            where cl.hospcode = ? and cl.outcome = 'NO'";
            $stmt = mysqli_prepare($database, $query);
            mysqli_stmt_bind_param(
                $stmt,
                's',
                $_GET['hospcode']
            );
            mysqli_stmt_execute($stmt);
            // ถ้า error
            $error_message = mysqli_error($database);

            /** เช็ค error */
            if ($error_message) {
                http_response_code(400);
                exit(json_encode([
                    'message' => $error_message
                ]));
            }
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        }

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
        // ถ้า error
        $error_message = mysqli_error($database);

        /** เช็ค error */
        if ($error_message) {
            http_response_code(400);
            exit(json_encode([
                'message' => $error_message
            ]));
        }
        $result2 = $stmt->get_result()->fetch_assoc();

        /** ส่งค่าไป frontend */
        echo json_encode([
            'result' => $result,
            'result2' => $result2
        ]);
    } else {
        http_response_code(401);
        echo json_encode([
            'message' => 'Unauthorized'
        ]);
    }
} else {
    http_response_code(400);
    echo json_encode([
        'message' => 'The request is invalid'
    ]);
}