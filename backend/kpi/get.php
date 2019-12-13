<?php

// print_r($_SERVER);

$sql = "SELECT *, count(*) as amount, CASE
when par <= 1 then 'ทั้งหมด'
when par <= 2 then 'ผ่าน'
when par <= 3 then 'มีแน้วโน้ม'
when par <= 4 then 'ไม่ผ่าน'
end as status
FROM `kpi_list` WHERE type = 1
GROUP by status";
$query = mysqli_query($database, $sql);
$result1 = mysqli_fetch_all($query, MYSQLI_ASSOC);

$sql = "SELECT *, count(*) as amount, CASE
when par <= 1 then 'ทั้งหมด'
when par <= 2 then 'ผ่าน'
when par <= 3 then 'มีแน้วโน้ม'
when par <= 4 then 'ไม่ผ่าน'
end as status
FROM `kpi_list` WHERE type = 2
GROUP by status";
$query = mysqli_query($database, $sql);
$result2 = mysqli_fetch_all($query, MYSQLI_ASSOC);

$sql = "SELECT *, count(*) as amount, CASE
when par <= 1 then 'ทั้งหมด'
when par <= 2 then 'ผ่าน'
when par <= 3 then 'มีแน้วโน้ม'
when par <= 4 then 'ไม่ผ่าน'
end as status
FROM `kpi_list` WHERE type = 3
GROUP by status";
$query = mysqli_query($database, $sql);
$result3 = mysqli_fetch_all($query, MYSQLI_ASSOC);

$sql = "SELECT *, count(*) as amount, CASE
when par <= 1 then 'ทั้งหมด'
when par <= 2 then 'ผ่าน'
when par <= 3 then 'มีแน้วโน้ม'
when par <= 4 then 'ไม่ผ่าน'
end as status
FROM `kpi_list` WHERE type = 4
GROUP by status";
$query = mysqli_query($database, $sql);
$result4 = mysqli_fetch_all($query, MYSQLI_ASSOC);

// $_SESSION['login'] = 'duck';

// echo json_encode($result);
echo json_encode([
    'result1' => $result1,
    'result2' => $result2,
    'result3' => $result3,
    'result4' => $result4
]);
