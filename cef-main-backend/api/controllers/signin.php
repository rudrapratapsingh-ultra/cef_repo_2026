<?php
    require_once __DIR__ . '/../config.php';

    function loginUser($identifier, $password) {
        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

        if ($conn->connect_error) {
            die(json_encode(["success" => false, "message" => "Database Connection Failed: " . $conn->connect_error]));
        }

        // Check if user exists (email, kerberos_id, or alumni_id)
        $stmt = $conn->prepare("
            SELECT user_id, name, email, password_hash 
            FROM users 
            WHERE email = ? OR kerberos_id = ? OR alumni_id = ?
        ");

        if (!$stmt) {
            die(json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]));
        }

        $stmt->bind_param("sss", $identifier, $identifier, $identifier);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 0) {
            $stmt->close();
            $conn->close();
            return ["success" => false, "message" => "Invalid credentials!"];
        }

        $stmt->bind_result($user_id, $name, $email, $password_hash);
        $stmt->fetch();
        $stmt->close();

        // Verify password
        if (!password_verify($password, $password_hash)) {
            $conn->close();
            return ["success" => false, "message" => "Invalid credentials!"];
        }

        // Generate a secure token (encrypt user data)
        $token_data = json_encode(["user_id" => $user_id, "email" => $email, "name" => $name]);
        $encrypted_token = openssl_encrypt($token_data, "AES-256-CBC", SECRET_KEY, 0, substr(SECRET_KEY, 0, 16));

        // Set cookie (valid for 7 days)
        setcookie("auth_token", $encrypted_token, time() + (7 * 24 * 60 * 60), "/", "", false, true);

        $conn->close();
        return ["success" => true, "message" => "Login successful!", "user" => ["user_id" => $user_id, "name" => $name, "email" => $email]];
    }
?>
