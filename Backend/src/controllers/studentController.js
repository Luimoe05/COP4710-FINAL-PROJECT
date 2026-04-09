const db = require("../config/db");

exports.getAllStudents = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM students");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching all students" });
  }
};

exports.createStudent = async (req, res) => {
  const { first_name, last_name, email, major } = req.body;
  try {
    await db.query(
      "INSERT INTO students (first_name, last_name, email, major) VALUES (?, ?, ?, ?)",
      [first_name, last_name, email, major]
    );
    res.status(201).json({ message: "Student created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating student" });
  }
};
