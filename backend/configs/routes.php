<?php
/** kpi */
$routes['/api/kpi']['GET'] = 'kpi/get.php';
$routes['/api/kpi']['POST'] = 'kpi/post.php';
$routes['/api/kpi']['PUT'] = 'kpi/put.php';
$routes['/api/kpi']['DELETE'] = 'kpi/delete.php';

// kpi-list
$routes['/api/kpi-list']['GET'] = 'kpi-list/get.php';

/** amphur */
$routes['/api/amphur']['GET'] = 'amphur/get.php';

/** client */
$routes['/api/client']['GET'] = 'client/get.php';

/** Qof */
$routes['/api/qof']['GET'] = 'qof/get.php';

/** QofDist */
$routes['/api/qofdist']['GET'] = 'qofdist/get.php';

/** Login */
$routes['/api/login']['GET'] = 'login/profile.php';
$routes['/api/login']['POST'] = 'login/post.php';
$routes['/api/logout']['POST'] = 'login/logout.php';



/** เอาไว้เทส session หน้า login ของ php */
//$routes['/api/login']['GET'] = 'account/login.php';


// $routes['/api/login']['POST'] = 'account/login.php';
// $routes['/api/logout']['POST'] = 'account/logout.php';
// $routes['/api/profile']['GET'] = 'account/profile.php';