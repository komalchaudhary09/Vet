import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Cat from "../assets/images/login.jpeg";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";

const Login = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  
  // State matches backend expectations
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Note: Ensure the URL matches your backend route (likely /api/auth/login)
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful!");
        localStorage.setItem("token", data.token); // Store JWT
        navigate("/dashboard"); 
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Server is not responding. Check your backend terminal.");
    }
  };

  return (
    <Layout>
      {showModal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-left" style={{ backgroundImage: `url(${Cat})` }}></div>

            <form className="modal-right" onSubmit={handleSubmit}>
              <span className="close" onClick={() => setShowModal(false)}>×</span>

              <h2 className="heading">Welcome to your <br /> animal portal</h2>

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

              <div className="forgot">Forget Password?</div>

              <div className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkbox-text">
                  I agree all statements in <Link to="/terms">Terms & Conditions</Link>
                </span>
              </div>

              <button type="submit" className="join-button">Join</button>

              <div className="bottom-text">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Login;