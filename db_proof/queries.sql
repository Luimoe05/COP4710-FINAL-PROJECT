USE school_adminsys;

CREATE VIEW view_all_instructors AS
SELECT * FROM instructor;

CREATE VIEW view_all_courses AS
SELECT * FROM courses;

CREATE VIEW view_all_enrollments AS
SELECT * FROM enrollments;

CREATE VIEW view_all_grades AS
SELECT * FROM grades;


CREATE VIEW view_all_staff AS
SELECT staff_id, first_name, last_name, staff_role FROM staff;


