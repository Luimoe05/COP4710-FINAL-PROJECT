const express = require("express");
const app = express();
const staffRoutes = require("./routes/staffRoutes");

app.use("/api/staff", staffRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
