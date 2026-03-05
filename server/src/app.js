const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

/* =====================
   Middleware
===================== */
app.use(cors({
  origin: "http://localhost:3000", // frontend
  credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));

/* =====================
   Health check
===================== */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

/* =====================
   Routes
===================== */
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/services", require("./routes/service.routes"));
app.use("/api/bookings", require("./routes/booking.routes"));
app.use("/api/interactions", require("./routes/interaction.routes"));

/* =====================
   404 Handler
===================== */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

/* =====================
   Error Handler
===================== */
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

module.exports = app;