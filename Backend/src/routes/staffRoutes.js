const express = require("express");
const router = express.Router();
const staffControler = require("../controllers/staffController");

router.get("/", staffControler.getAllStaff);

module.exports = router;
