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

-- #This filters the names to make sure that the first letter is capitalized and the rest are not

DELIMITER //

CREATE TRIGGER trg_clean_student_name
BEFORE INSERT ON students
FOR EACH ROW
BEGIN 
	SET NEW.first_name = CONCAT(UPPER(SUBSTRING(NEW.first_name, 1, 1)), LOWER(SUBSTRING(NEW.first_name, 2)));
    SET NEW.last_name = CONCAT(UPPER(SUBSTRING(NEW.last_name, 1, 1)), LOWER(SUBSTRING(NEW.last_name, 2))); 
END //

DELIMITER ;
    
