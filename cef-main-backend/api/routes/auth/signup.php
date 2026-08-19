<?php
    require_once __DIR__ . '/../../controllers/signup.php';

    header('Content-Type: application/json');

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(["success" => false, "message" => "Invalid request method"]);
        exit;
    }
    
    $data = json_decode(file_get_contents("php://input"), true);

    $result = registerUser(
        $data['name'],
        $data['password'],
        $data['email'],
        $data['phone'] ?? null,
        $data['entry_number'] ?? null,
        $data['kerberos_id'] ?? null,
        $data['alumni_id'] ?? null,
        $data['department'] ?? null,
        $data['passing_year'] ?? null,
        "guest",
        $data['linkedin_url'] ?? null,
        $data['github_url'] ?? null,
        $data['personal_website'] ?? null,
        $data['current_company'] ?? null,
        $data['designation'] ?? null
    );

    echo json_encode($result);

?>