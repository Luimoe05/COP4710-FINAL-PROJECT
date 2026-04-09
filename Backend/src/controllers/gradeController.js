const db = require("../config/db");

exports.getAllGrades = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM view_all_grades");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching all grades" });
  }
};

exports.createGrade = async (req, res) => {
  const { student_id, course_id, grade, semester } = req.body;
  try {
    await db.query(
      "INSERT INTO grades (student_id, course_id, grade, semester) VALUES (?, ?, ?, ?)",
      [student_id, course_id, grade, semester]
    );
    res.status(201).json({ message: "Grade created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating grade" });
  }
};
