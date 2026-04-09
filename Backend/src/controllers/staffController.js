const db = require("../config/db");

exports.getAllStaff = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT staff_id, first_name, last_name, staff_role FROM staff"
    );
    res.status(200).json(rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error fetching staff" });
  }
};

exports.createStaff = async (req, res) => {
  const { first_name, last_name, role } = req.body;
  try {
    await db.query(
      "INSERT INTO staff (first_name, last_name, staff_role) VALUES (?, ?, ?)",
      [first_name, last_name, role]
    );
    res.status(201).json({ message: "Staff member created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error creating staff member" });
  }
};
