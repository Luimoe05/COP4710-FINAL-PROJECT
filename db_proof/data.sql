USE school_adminsys;

-- Staff
INSERT INTO staff (first_name, last_name, email, staff_role, department) VALUES
('Maria', 'Lopez', 'mlopez@school.edu', 'Advisor', 'Computer Science'),
('John', 'Smith', 'jsmith@school.edu', 'Coordinator', 'Mathematics'),
('Sara', 'Brown', 'sbrown@school.edu', 'Admin', 'Engineering');

-- Instructors
INSERT INTO instructor (first_name, last_name, email, department, work_location) VALUES
('James', 'White', 'jwhite@school.edu', 'Computer Science', 'Miami'),
('Linda', 'Green', 'lgreen@school.edu', 'Mathematics', 'Miami'),
('Carlos', 'Rivera', 'crivera@school.edu', 'Engineering', 'Miami');

-- Students
INSERT INTO students (first_name, last_name, email, major) VALUES
('Luis', 'Angel', 'langel@school.edu', 'Computer Science'),
('Ana', 'Martinez', 'amartinez@school.edu', 'Mathematics'),
('Kevin', 'Johnson', 'kjohnson@school.edu', 'Engineering');

-- Courses
INSERT INTO courses (course_code, course_name, instructor_id, course_schedule, credits) VALUES
('COP4710', 'Database Management', 1, 'MWF 9:00AM', 3),
('MAD3107', 'Discrete Math', 2, 'TTH 11:00AM', 3),
('EEL3701', 'Digital Logic', 3, 'MWF 1:00PM', 3);

-- Enrollments
INSERT INTO enrollments (student_id, course_id, term, enrollment_date) VALUES
(1, 1, 'Spring 2026', '2026-01-10'),
(2, 2, 'Spring 2026', '2026-01-10'),
(3, 3, 'Spring 2026', '2026-01-10');

-- Grades
INSERT INTO grades (student_id, course_id, grade, semester) VALUES
(1, 1, 'A', 'Spring 2026'),
(2, 2, 'B+', 'Spring 2026'),
(3, 3, 'A-', 'Spring 2026');

-- Staff Course Management
INSERT INTO staff_course_management (staff_id, course_id, assigned_date, management_role) VALUES
(1, 1, '2026-01-01', 'Course Advisor'),
(2, 2, '2026-01-01', 'Coordinator'),
(3, 3, '2026-01-01', 'Admin');