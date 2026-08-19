SELECT e.event_id, e.event_name, e.date, e.location 
FROM events e
JOIN event_registrations er ON e.event_id = er.event_id
WHERE er.user_id = 123;
