<?php
    require_once __DIR__ . '/config.php';

    header('Content-Type: application/json');
    $request_uri = trim($_SERVER['REQUEST_URI'], '/');

    # Default Route - Server Status Check
    if (basename($request_uri) == 'api') {
        $response = [
            'status' => 'success',
            'message' => 'All Systems Functional!',
        ];
        echo json_encode($response);
        return;
    }
    $route_file = __DIR__ . "/routes/" . basename($request_uri) . ".php";
    if (file_exists($route_file)) {
        include $route_file;
    } else {
        http_response_code(404);
    }
    return;
?>