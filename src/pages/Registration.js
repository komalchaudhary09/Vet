import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import Cat from "../assets/images/login.jpeg";
import "../style/Registration.css";

const Registration = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",  // optional if your backend supports it
    email: "",
    password: "",
  });

  // Error state
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login"); // redirect to login page
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Connection error:", err);
      setError("Server is not responding. Check your backend.");
    }
  };

  return (
    <Layout>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            {/* Left Image */}
            <div
              className="modal-left"
              style={{ backgroundImage: `url(${Cat})` }}
            ></div>

            {/* Right Form */}
            <form className="modal-right" onSubmit={handleSubmit}>
              <span className="close" onClick={() => setShowModal(false)}>
                ×
              </span>

              <h2 className="heading">
                Create your <br /> account
              </h2>

              {error && <div className="error">{error}</div>}

              <div className="field-container">
                <label className="label">Name:</label>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-container">
                <label className="label">Mobile No.:</label>
                <input
                  type="text"
                  name="mobile"
                  className="input-field"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-container">
                <label className="label">Email:</label>
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field-container">
                <label className="label">Password:</label>
                <input
                  type="password"
                  name="password"
                  className="input-field"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkbox-text">
                  I agree to{" "}
                  <Link to="/terms" className="terms-link">
                    Terms & Conditions
                  </Link>
                </span>
              </div>

              <button type="submit" className="register-button">
                Register
              </button>

              <div className="bottom-text">
                Already have an account?{" "}
                <Link to="/login" className="sign-in-link">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Registration;