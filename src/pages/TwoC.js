// src/pages/OneC.tsx
import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DogImg from "../assets/images/toy.jpeg";
import "../style/TwoC.css";

/**
 * @typedef {Object} TwoCProps
 * @property {() => void} onClose
 */

const TwoC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="onec-overlay">
        {/* Backdrop */}
        <div className="onec-backdrop" onClick={onClose}></div>

        {/* Modal */}
        <div className="onec-modal">
          <button className="onec-close-btn" onClick={onClose}>✕</button>

          <div className="onec-flex">
            {/* Image */}
            <div className="onec-image-box">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Right Content */}
            <div className="onec-content">
              <h2>Banana Printed T-shirt for dog | dog clothes | kitcha</h2>

              <div className="onec-rating">
                <Rating value={4} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <p className="onec-price">Rs.600</p>

              {/* Quantity */}
              <div className="onec-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              {/* Location */}
              <div className="onec-location">
                <LocationOnIcon />
                <p>H-1, Bisnudevi Village, Nikap, Chandragiri, Kathmandu</p>
              </div>

              {/* Payment */}
              <div className="onec-payment">
                <span>Payment Method: Cash on Delivery</span>
                <div className="onec-bill-row">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>
                <div className="onec-bill-row total">
                  <span>Total Bill</span>
                  <span>Rs 700</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="onec-buttons">
                <button
                  className="confirm-btn"
                  onClick={() => setShowConfirmMsg(true)}
                >
                  Confirm Order
                </button>
                <button className="cancel-btn" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Popup */}
        {showConfirmMsg && (
          <div className="onec-confirm-overlay">
            <div className="onec-backdrop" />
            <div className="onec-confirm">
              <p>Your order has been confirmed</p>
              <button
                className="confirm-ok-btn"
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

export default TwoC;