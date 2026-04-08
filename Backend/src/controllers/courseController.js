const db = require("../config/db");


exports.getAllCourses = async (req, res) => {
    try{
        const [rows] = await db.query("Select * from courses")
        res.status(200).json(rows)
    }catch (err) {
        console.log(error)
        res.status(500).json({ message: "Error fetching all courses" })
    }
}

// exports.getAllStaff = async (req, res) => {
//   try {
//     const [rows] = await db.query(
//       "Select staff_id, first_name, last_name, staff_role FROM staff"
//     );

//     res.status(200).json(rows);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Error fetching staff" });
//   }
// };
