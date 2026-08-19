SELECT u.user_id, u.name, u.email, u.phone, u.user_type
FROM users u
JOIN event_registrations er ON u.user_id = er.user_id
WHERE er.event_id = 456;
