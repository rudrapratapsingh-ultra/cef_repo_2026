<?php
    header('Content-Type: application/json');

    // Clear the authentication cookie by setting it to an empty value and expiring it
    setcookie("auth_token", "", time() - 3600, "/", "", true, true);

    echo json_encode(["success" => true, "message" => "Signed out successfully"]);
?>
