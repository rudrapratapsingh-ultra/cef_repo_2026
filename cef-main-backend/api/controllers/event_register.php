<?php
    require_once __DIR__ . '/../config.php';

    function registerForEvent($user_id, $event_id) {
        // Connect to the database
        $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);
        
        if ($conn->connect_error) {
            return ["success" => false, "message" => "Database connection failed"];
        }

        // Check if the user is already registered for the event
        $stmt = $conn->prepare("SELECT * FROM event_registrations WHERE user_id = ? AND event_id = ?");
        $stmt->bind_param("ii", $user_id, $event_id);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $stmt->close();
            $conn->close();
            return ["success" => false, "message" => "Already registered for this event"];
        }
        $stmt->close();

        // Register the user for the event
        $stmt = $conn->prepare("INSERT INTO event_registrations (user_id, event_id) VALUES (?, ?)");
        $stmt->bind_param("ii", $user_id, $event_id);

        if ($stmt->execute()) {
            $stmt->close();
            $conn->close();
            return ["success" => true, "message" => "Successfully registered for the event"];
        } else {
            $stmt->close();
            $conn->close();
            return ["success" => false, "message" => "Event registration failed"];
        }
    }
?>
