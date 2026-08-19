CREATE TABLE users (
    user_id         INT PRIMARY KEY AUTO_INCREMENT,
    name           VARCHAR(100) NOT NULL,
    phone          VARCHAR(15) UNIQUE DEFAULT NULL,
    email          VARCHAR(50) UNIQUE NOT NULL,  -- Compulsory for all users
    entry_number   VARCHAR(15) UNIQUE DEFAULT NULL, -- For current IIT students
    kerberos_id    VARCHAR(50) UNIQUE DEFAULT NULL, -- For IIT students
    alumni_id      VARCHAR(50) UNIQUE DEFAULT NULL, -- For alumni
    department     VARCHAR(100) DEFAULT NULL,  -- IITians have departments, guests don't
    passing_year   YEAR DEFAULT NULL,  -- Only for IITians
    user_type      ENUM('student', 'alumni', 'guest' , 'admin') NOT NULL,
    
    -- Additional Social Information
    linkedin_url   VARCHAR(255) DEFAULT NULL,
    github_url     VARCHAR(255) DEFAULT NULL,
    personal_website VARCHAR(255) DEFAULT NULL,
    current_company  VARCHAR(255) DEFAULT NULL,  
    designation      VARCHAR(255) DEFAULT NULL, 
    
    password_hash  VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE events (
    event_id      INT PRIMARY KEY AUTO_INCREMENT,
    name         VARCHAR(200) NOT NULL,
    description  TEXT,
    date         DATE NOT NULL,
    time         TIME NOT NULL,
    venue        VARCHAR(255) NOT NULL,
    organizer    VARCHAR(100) NOT NULL,
    capacity     INT DEFAULT NULL,
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE event_registrations (
    registration_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id        INT NOT NULL,
    event_id       INT NOT NULL,
    registered_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE,
    UNIQUE(user_id, event_id) -- Ensures one user registers only once per event
);
