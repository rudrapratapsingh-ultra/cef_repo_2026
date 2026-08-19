UPDATE users 
SET user_type = 'alumni', alumni_id = 'ALUMNI2025', entry_number = NULL, kerberos_id = NULL, current_company = 'Amazon', designation = 'SDE'
WHERE user_id = 123 AND user_type = 'student';
