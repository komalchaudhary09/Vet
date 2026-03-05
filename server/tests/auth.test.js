const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "vetly",
  password: "your_password",
  port: 5432,
});

module.exports = pool;