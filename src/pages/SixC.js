import { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import DogImg from "../assets/images/drool.jpeg";
import "../style/SixC.css"; // Import CSS file

const SixC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="onec-modal">
        {/* Background */}
        <div className="onec-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="onec-content">
          <button className="onec-close" onClick={onClose}>
            ✕
          </button>

          <div className="onec-flex">
            {/* Image */}
            <div className="onec-image">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Right Content */}
            <div className="onec-right">
              <h2 className="onec-title">
                Drools Adult Dry Chicken Food | Crown | 400gm
              </h2>

              <div className="onec-rating">
                <Rating value={4} readOnly size="small" />
                <span className="onec-rating-text">Ratings 26</span>
              </div>

              <p className="onec-price">Rs.190</p>

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
                <div className="onec-payment-methods">
                  <span>Payment Method</span>
                  <select defaultValue="cod">
                    <option value="cod">Cash on Delivery</option>
                  </select>
                </div>

                <div className="onec-fee">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="onec-total">
                  <span>Total Bill</span>
                  <span>Rs 290</span>
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
          <div className="onec-confirm">
            <div className="onec-backdrop"></div>

            <div className="onec-confirm-box">
              <button
                className="onec-close"
                onClick={() => setShowConfirmMsg(false)}
              >
                ✕
              </button>
              <p>Your Order has been confirmed</p>
              <button
                onClick={() => {
                  setShowConfirmMsg(false);
                  onClose();
                }}
                className="confirm-btn"
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

export default  SixC;