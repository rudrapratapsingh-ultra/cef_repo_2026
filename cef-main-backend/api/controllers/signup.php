<?php
    require_once __DIR__ . '/../config.php';

    function registerUser($name, $password, $email, $phone = null, $entry_number = null, $kerberos_id = null, $alumni_id = null, $department = null, $passing_year = null, $user_type = "guest", $linkedin_url = null, $github_url = null, $personal_website = null, $current_company = null, $designation = null) {
        // Hash the password
        $password_hash = password_hash($password, PASSWORD_BCRYPT);

        // Connect to the database
        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);
        
        if ($conn->connect_error) {
            die(json_encode(["success" => false, "message" => "Database Connection Failed: " . $conn->connect_error]));
        }

        // Check if the email already exists
        $check_stmt = $conn->prepare("SELECT user_id FROM users WHERE email = ?");
        $check_stmt->bind_param("s", $email);
        $check_stmt->execute();
        $check_stmt->store_result();
        
        if ($check_stmt->num_rows > 0) {
            $check_stmt->close();
            $conn->close();
            return ["success" => false, "message" => "An account with this email already exists."];
        }
        $check_stmt->close();

        // Prepare the SQL statement
        $stmt = $conn->prepare("
            INSERT INTO users 
            (name, phone, email, entry_number, kerberos_id, alumni_id, department, passing_year, user_type, linkedin_url, github_url, personal_website, current_company, designation, password_hash) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ");

        if (!$stmt) {
            die(json_encode(["success" => false, "message" => "Prepare failed: " . $conn->error]));
        }

        // Bind parameters, handling null values properly
        $stmt->bind_param(
            "sssssssssssssss",
            $name,
            $phone,
            $email,
            $entry_number,
            $kerberos_id,
            $alumni_id,
            $department,
            $passing_year,
            $user_type,
            $linkedin_url,
            $github_url,
            $personal_website,
            $current_company,
            $designation,
            $password_hash
        );

        // Execute the query
        if ($stmt->execute()) {
            $stmt->close();
            $conn->close();
            return ["success" => true, "message" => "User registered successfully!"];
        } else {
            $stmt->close();
            $conn->close();
            return ["success" => false, "message" => "Registration failed: " . $stmt->error];
        }
    }
?>
