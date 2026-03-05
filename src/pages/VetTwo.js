// src/pages/Vettwo.js
import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import TrainerImg from "../assets/images/toy.jpeg";
import "../style/VetTwo.css";

const VetTwo = () => {
  const [duration, setDuration] = useState("1 week");
  const [showConfirm, setShowConfirm] = useState(false);

  const basePricePerWeek = 2100;

  const calculateTotal = () => {
    if (duration === "1 week") return basePricePerWeek;
    if (duration === "2 weeks") return basePricePerWeek * 2;
    if (duration === "1 month") return basePricePerWeek * 4;
    return basePricePerWeek;
  };

  return (
    <Layout>
      <div className="vettwo-container">

        {/* Trainer Card */}
        <div className={`vettwo-card ${showConfirm ? "blur" : ""}`}>
          <div className="vettwo-card-flex">

            {/* Image */}
            <div className="vettwo-image-box">
              <img src={TrainerImg} alt="Trainer" />
            </div>

            {/* Details */}
            <div className="vettwo-details">
              <div className="vettwo-header">
                <h2>Krish Giri</h2>
                <span>Trainer</span>
              </div>

              <div className="vettwo-rating">
                <Rating value={4} readOnly />
                <span>Ratings 26</span>
              </div>

              <hr />

              <div className="vettwo-info">
                <p>➜ Qualification : B.VSc</p>
                <p>➜ Experience : 9 years</p>
                <p>➜ Location : Tinkune</p>
              </div>

              <div className="vettwo-duration">
                <label>Duration:</label>
                <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>1 month</option>
                </select>
              </div>

              <div className="vettwo-payment">
                <p>Payment Method: Cash</p>
                <p>📍 Bishnu Devi Village, Chandragiri, Kathmandu</p>
              </div>

              <div className="vettwo-total">
                Total Fee: <span>Rs. {calculateTotal().toLocaleString()}</span>
              </div>

              <div className="vettwo-buttons">
                <button className="book-btn" onClick={() => setShowConfirm(true)}>Book</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className={`vettwo-reviews ${showConfirm ? "blur" : ""}`}>
          <h3>Reviews</h3>
          <div className="vettwo-review">
            <div className="vettwo-avatar"></div>
            <h4>Anuj Rai</h4>
            <Rating value={4} readOnly size="small" />
            <p>
              Excellent dog trainer! Very patient, professional, and knowledgeable. My dog learned basic commands quickly and became more obedient and calm. Highly recommended.
            </p>
          </div>
        </div>

        {/* Confirmation Popup */}
        {showConfirm && (
          <div className="vettwo-popup">
            <div className="vettwo-popup-backdrop" onClick={() => setShowConfirm(false)}></div>
            <div className="vettwo-popup-content">
              <button className="vettwo-popup-close" onClick={() => setShowConfirm(false)}>✕</button>
              <h3>Booking Confirmed 🎉</h3>
              <p>Training booked successfully!</p>
              <button className="vettwo-ok" onClick={() => setShowConfirm(false)}>OK</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default VetTwo;