<?php
/** kpi */
$routes['/api/kpi']['GET'] = 'kpi/get.php';
$routes['/api/kpi']['POST'] = 'kpi/post.php';
$routes['/api/kpi']['PUT'] = 'kpi/put.php';
$routes['/api/kpi']['DELETE'] = 'kpi/delete.php';


/** เอาไว้เทส session หน้า login ของ php */
//$routes['/api/login']['GET'] = 'account/login.php';


$routes['/api/login']['POST'] = 'account/login.php';
$routes['/api/logout']['POST'] = 'account/logout.php';
$routes['/api/profile']['GET'] = 'account/profile.php';