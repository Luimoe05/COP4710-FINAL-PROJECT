CREATE DATABASE IF NOT EXISTS school_adminsys;
USE school_adminsys;

CREATE TABLE staff (
	staff_id INT AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
    staff_role VARCHAR(50) NOT NULL,
    department VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, # marks when the staff joined
    PRIMARY KEY (staff_id)
);

CREATE TABLE instructor (
	instructor_id INT AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
    department VARCHAR(100) NOT NULL,
    work_location VARCHAR(150) NOT NULL,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (instructor_id)
);

CREATE TABLE students (
	student_id INT AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
    major VARCHAR(150) NOT NULL,
    enrollment_status boolean DEFAULT True,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (student_id)
);

CREATE TABLE courses (
	course_id INT AUTO_INCREMENT,
    course_code VARCHAR(20) NOT NULL UNIQUE,
    course_name VARCHAR(100) NOT NULL,
    instructor_id INT,
    course_schedule VARCHAR(100) NOT NULL,
    credits INT NOT NULL DEFAULT 3,
    PRIMARY KEY (course_id),
	CONSTRAINT fk_course_instructor FOREIGN KEY (instructor_id)
		REFERENCES instructor(instructor_id) ON DELETE SET NULL
);

CREATE TABLE staff_course_management (
	management_id INT AUTO_INCREMENT,
    staff_id INT NOT NULL,
    course_id INT NOT NULL,
    assigned_date DATE NOT NULL,
    management_role VARCHAR(100) NOT NULL,
	PRIMARY KEY (management_id),
    CONSTRAINT fk_management_staff FOREIGN KEY (staff_id)
		REFERENCES staff(staff_id) ON DELETE CASCADE,
	CONSTRAINT fk_management_course FOREIGN KEY (course_id)
		REFERENCES courses(course_id) ON DELETE CASCADE
);

CREATE TABLE enrollments (
	enrollment_id INT AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    term VARCHAR(50) NOT NULL,
    grade VARCHAR(10),
    enrollment_date DATE NOT NULL,
    PRIMARY KEY (enrollment_id),
    CONSTRAINT fk_enrollment_student FOREIGN KEY (student_id)
        REFERENCES students(student_id) ON DELETE CASCADE,
    CONSTRAINT fk_enrollment_course FOREIGN KEY (course_id)
        REFERENCES courses(course_id) ON DELETE CASCADE
);

CREATE TABLE grades (
    grade_id INT AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    grade VARCHAR(10) NOT NULL,
    semester VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (grade_id),
    CONSTRAINT fk_grade_student FOREIGN KEY (student_id)
        REFERENCES students(student_id) ON DELETE CASCADE,
    CONSTRAINT fk_grade_course FOREIGN KEY (course_id)
        REFERENCES courses(course_id) ON DELETE CASCADE
);

