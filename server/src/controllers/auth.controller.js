// server/src/controllers/auth.controller.js
const { pool } = require('../config/db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body; // include mobile

    if (!name || !email || !password || !mobile) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if email exists
    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user (make sure your users table has a `mobile` column)
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password, mobile) VALUES ($1, $2, $3, $4) RETURNING id, email, role, mobile",
      [name, email, hashedPassword, mobile]
    );

    res.status(201).json({
      message: "Registration successful",
      user: newUser.rows[0]
    });

  } catch (err) {
    console.error("🔥 Registration error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const userResult = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userResult.rows.length === 0) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const user = userResult.rows[0];

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        mobile: user.mobile
      }
    });

  } catch (err) {
    console.error("🔥 Login error:", err.message);
    res.status(500).json({ error: err.message });
  }
};