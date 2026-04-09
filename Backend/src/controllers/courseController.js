const db = require("../config/db");


exports.getAllCourses = async (req, res) => {
    try{
        const [rows] = await db.query("Select * from view_all_courses")
        res.status(200).json(rows)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error fetching all courses" });
    }
};

exports.createCourse = async (req, res) => {
    const { course_name, course_code, credits, instructor_id } = req.body;
    try {
        await db.query(
            "INSERT INTO courses (course_name, course_code, credits, instructor_id) VALUES (?, ?, ?, ?)",
            [course_name, course_code, credits, instructor_id]
        );
        res.status(201).json({ message: "Course created" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error creating course" });
    }
};
