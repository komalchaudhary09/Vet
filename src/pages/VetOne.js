// src/pages/Vetone.js
import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import DoctorImg from "../assets/images/doc.jpeg";
import "../style/VetOne.css";

const Vetone = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="vetone-overlay">
        {/* Background */}
        <div className="vetone-backdrop" onClick={onClose}></div>

        {/* Main Container */}
        <div className="vetone-container">
          <button className="vetone-close" onClick={onClose}>✕</button>

          {/* Doctor Card */}
          <div className="vetone-card">
            <div className="vetone-card-flex">
              <div className="vetone-image-box">
                <img src={DoctorImg} alt="Doctor" />
              </div>

              <div className="vetone-details">
                <h2 className="vetone-name">Dr. Shirish Silwal</h2>
                <p className="vetone-role">Veterinarian</p>

                <div className="vetone-rating">
                  <Rating value={4} readOnly />
                  <span>Ratings 26</span>
                </div>

                <hr />

                <div className="vetone-info">
                  <p>➜ Qualification: B.VSc & AH</p>
                  <p>➜ Experience: 9 years</p>
                  <p>➜ Location: Patan</p>
                </div>

                <p className="vetone-fee">Visiting Fee: Rs. 500</p>

                <div className="vetone-buttons">
                  <button
                    className="vetone-book"
                    onClick={() => setShowConfirmMsg(true)}
                  >
                    Book
                  </button>
                  <button className="vetone-cancel" onClick={onClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="vetone-reviews">
            <h3>Reviews</h3>
            <div className="vetone-review">
              <div className="vetone-avatar"></div>
              <h4>Anie Rai</h4>
              <Rating value={5} readOnly size="small" />
              <p>
                Excellent service and very caring staff. The vet was professional, patient, and explained everything clearly. My pet felt comfortable and well-treated. The clinic is clean and well-organized. Highly recommended.
              </p>
            </div>
          </div>
        </div>

        {/* Confirmation Popup */}
        {showConfirmMsg && (
          <div className="vetone-confirm-overlay">
            <div className="vetone-backdrop"></div>
            <div className="vetone-confirm">
              <button
                onClick={() => setShowConfirmMsg(false)}
                className="vetone-close-confirm"
              >
                ✕
              </button>
              <p>Appointment Booked Successfully!</p>
              <button
                className="vetone-ok"
                onClick={() => {
                  setShowConfirmMsg(false);
                  onClose();
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Vetone;