// src/pages/Vetthree.js
import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import DoctorImg from "../assets/images/git.jpeg";
import "../style/Vetthree.css";

const Vetthree = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="vetthree-container">

        {/* Background & Main Card */}
        <div className="vetthree-card-wrapper">

          {/* Background */}
          <div className="vetthree-backdrop" onClick={onClose}></div>

          {/* Main Container */}
          <div className="vetthree-card">
            <button className="vetthree-close" onClick={onClose}>✕</button>

            <div className="vetthree-card-flex">

              {/* Image */}
              <div className="vetthree-image-box">
                <img src={DoctorImg} alt="Doctor" />
              </div>

              {/* Details */}
              <div className="vetthree-details">
                <h2>Dr. Shirish Silwal</h2>
                <p className="vetthree-role">Veterinarian</p>

                <div className="vetthree-rating">
                  <Rating value={4} readOnly />
                  <span>Ratings 26</span>
                </div>

                <hr />

                <div className="vetthree-info">
                  <p>➜ Qualification : B.VSc & AH</p>
                  <p>➜ Experience : 9 years</p>
                  <p>➜ Location : Patan</p>
                </div>

                <p className="vetthree-fee">Visiting Fee: Rs. 500</p>

                <div className="vetthree-buttons">
                  <button
                    className="vetthree-book"
                    onClick={() => setShowConfirmMsg(true)}
                  >
                    Book
                  </button>
                  <button
                    className="vetthree-cancel"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="vetthree-reviews">
              <h3>Reviews</h3>
              <div className="vetthree-review">
                <div className="vetthree-avatar"></div>
                <h4>Anie Rai</h4>
                <Rating value={5} readOnly size="small" />
                <p>
                  Excellent service and very caring staff. The vet was professional, patient, and explained everything clearly. My pet felt comfortable and well-treated. The clinic is clean and well-organized. Highly recommended for anyone looking for a trustworthy veterinarian.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Popup */}
        {showConfirmMsg && (
          <div className="vetthree-popup">
            <div
              className="vetthree-popup-backdrop"
              onClick={() => setShowConfirmMsg(false)}
            ></div>
            <div className="vetthree-popup-content">
              <button
                className="vetthree-popup-close"
                onClick={() => setShowConfirmMsg(false)}
              >
                ✕
              </button>
              <p>Appointment Booked Successfully!</p>
              <button
                className="vetthree-ok"
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

export default Vetthree;