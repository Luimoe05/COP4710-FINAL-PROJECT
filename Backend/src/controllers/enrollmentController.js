const db = require("../config/db");

exports.getAllEnrollments = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM view_all_enrollments");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching all enrollments" });
  }
};

exports.createEnrollment = async (req, res) => {
  const { student_id, course_id, status } = req.body;
  try {
    await db.query(
      "INSERT INTO enrollments (student_id, course_id, status) VALUES (?, ?, ?)",
      [student_id, course_id, status]
    );
    res.status(201).json({ message: "Enrollment created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating enrollment" });
  }
};
