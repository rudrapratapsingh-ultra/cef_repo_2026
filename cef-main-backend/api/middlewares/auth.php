<?php
    require_once __DIR__ . '/../config.php';

    function authenticateUser() {
        if (!isset($_COOKIE["auth_token"])) {
            return ["success" => false, "message" => "Unauthorized access"];
        }

        // Decrypt the token
        $decrypted_token = openssl_decrypt($_COOKIE["auth_token"], 'AES-256-CBC', SECRET_KEY, 0, substr(SECRET_KEY, 0, 16));

        if (!$decrypted_token) {
            return ["success" => false, "message" => "Invalid token"];
        }

        $user_data = json_decode($decrypted_token, true);

        if (!isset($user_data['email'])) {
            return ["success" => false, "message" => "Invalid session"];
        }

        return ["success" => true, "user" => $user_data];
    }
?>
