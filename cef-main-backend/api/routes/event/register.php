<?php
    require_once __DIR__ . '/../../middlewares/auth.php';  // Auth middleware
    require_once __DIR__ . '/../../controllers/event_register.php'; // Controller

    header('Content-Type: application/json');

    // Ensure the request is a POST request
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        echo json_encode(["success" => false, "message" => "Invalid request method"]);
        exit;
    }

    // Authenticate the user
    $user = authenticateUser();
    if (!$user) {
        echo json_encode(["success" => false, "message" => "Unauthorized"]);
        exit;
    }

    // Get the request data
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['event_id'])) {
        echo json_encode(["success" => false, "message" => "Event ID is required"]);
        exit;
    }

    // Call the controller function to register the user for the event
    $response = registerForEvent($user['user_id'], $data['event_id']);

    echo json_encode($response);
?>
