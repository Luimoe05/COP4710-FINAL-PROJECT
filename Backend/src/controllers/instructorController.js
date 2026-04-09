const db = require("../config/db");

exports.getAllInstructors = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM view_all_instructors");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching all instructors" });
  }
};

exports.createInstructor = async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    department,
    work_location = "Miami",
  } = req.body;
  try {
    await db.query(
      "INSERT INTO instructor (first_name, last_name, email, department, work_location) VALUES (?, ?, ?, ?, ?)",
      [first_name, last_name, email, department, work_location]
    );
    res.status(201).json({ message: "Instructor created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating instructor" });
  }
};
