<?php
    require_once __DIR__ . '/../../controllers/signin.php';

    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        echo json_encode(["success" => false, "message" => "Invalid request method"]);
        exit;
    }

    // Get the JSON request body
    $data = json_decode(file_get_contents("php://input"), true);

    if (!isset($data['mail']) || !isset($data['password'])) {
        echo json_encode(["success" => false, "message" => "Missing required fields"]);
        exit;
    }

    // Call the login function from the controller
    $response = loginUser($data['mail'], $data['password']);

    echo json_encode($response);
?>
