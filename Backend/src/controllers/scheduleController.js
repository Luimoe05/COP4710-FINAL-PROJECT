const db = require("../config/db");

exports.getAllSchedules = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM schedules");
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching all schedules" });
  }
};

exports.createSchedule = async (req, res) => {
  const { course_id, day_of_week, start_time, end_time, room } = req.body;
  try {
    await db.query(
      "INSERT INTO schedules (course_id, day_of_week, start_time, end_time, room) VALUES (?, ?, ?, ?, ?)",
      [course_id, day_of_week, start_time, end_time, room]
    );
    res.status(201).json({ message: "Schedule created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating schedule" });
  }
};
