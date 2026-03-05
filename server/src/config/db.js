// server/src/config/db.js
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",          
  password: "postgres", 
  database: "vetly",       
  port: 5432,
});

pool.on("connect", () => {
  console.log(" PostgreSQL connected");
});

module.exports = { pool };