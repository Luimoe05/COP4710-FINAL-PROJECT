const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/students", require("./routes/studentRoutes"));
app.use("/api/instructors", require("./routes/instructorRoutes"));
app.use("/api/courses", require("./routes/courseRoutes"));
app.use("/api/staff", require("./routes/staffRoutes"));
app.use("/api/enrollments", require("./routes/enrollmentRoutes"));
app.use("/api/grades", require("./routes/gradeRoutes"));
app.use("/api/schedules", require("./routes/scheduleRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
