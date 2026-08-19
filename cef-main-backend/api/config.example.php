<?php
define('SITE_NAME', 'IIT Delhi Civil Society');
define('DB_PASSWORD', 'your_db_password_here');
define('DB_USERNAME', 'your_db_username_here');
define('DB_NAME', 'your_db_name_here');
define('DB_HOST', 'localhost');
define('DB_PORT', '3306');
define('SECRET_KEY', 'your_secret_key_here');

if (basename($_SERVER['REQUEST_URI']) == 'config.php' || basename($_SERVER['REQUEST_URI']) == 'config') {
    http_response_code(404);
    return;
}
?>
