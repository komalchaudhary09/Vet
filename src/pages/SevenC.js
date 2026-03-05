import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DogImg from "../assets/images/bone.jpeg";
import "../style/SevenC.css";

const SevenC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="sevenc-overlay">
        {/* Background */}
        <div className="sevenc-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="sevenc-modal">
          <button className="sevenc-close" onClick={onClose}>✕</button>

          <div className="sevenc-content">
            {/* Image */}
            <div className="sevenc-img-box">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Details */}
            <div className="sevenc-details">
              <h2 className="sevenc-title">
                Dog Chew Bone 3" Pack of 4|6|8| Chew Nepal
              </h2>

              <div className="sevenc-rating">
                <Rating value={4} readOnly size="small" />
                <span className="sevenc-rating-text">Ratings 26</span>
              </div>

              <p className="sevenc-price">Rs.298</p>

              <div className="sevenc-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <div className="sevenc-location">
                <LocationOnIcon />
                <span>H-1, Bisnudevi Village, Nikap, Chandragiri, Kathmandu</span>
              </div>

              <div className="sevenc-payment">
                <div className="sevenc-payment-row">
                  <span>Payment Method</span>
                  <span>Cash on Delivery</span>
                </div>

                <div className="sevenc-payment-row">
                  <span>Shipping Fee</span>
                  <span>Rs 100</span>
                </div>

                <div className="sevenc-payment-row sevenc-total">
                  <span>Total Bill</span>
                  <span>Rs 398</span>
                </div>
              </div>

              <div className="sevenc-buttons">
                <button className="sevenc-confirm" onClick={() => setShowConfirmMsg(true)}>
                  Confirm Order
                </button>
                <button className="sevenc-cancel" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Popup */}
        {showConfirmMsg && (
          <div className="sevenc-confirm-overlay">
            <div className="sevenc-backdrop" onClick={() => setShowConfirmMsg(false)}></div>
            <div className="sevenc-confirm-box">
              <button className="sevenc-close" onClick={() => setShowConfirmMsg(false)}>✕</button>
              <p>Your Order has been confirmed!</p>
              <button className="sevenc-ok" onClick={() => { setShowConfirmMsg(false); onClose(); }}>
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SevenC;