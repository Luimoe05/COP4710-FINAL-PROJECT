require("dotenv").config({
  path: "/Users/luis/COP4710 FINAL/COP4710-FINAL-PROJECT/.env",
});
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = pool;
