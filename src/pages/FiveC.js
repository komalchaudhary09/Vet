import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DogImg from "../assets/images/poop.jpeg";
import "../style/FiveC.css";

const FiveC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="onec-overlay">
        {/* Background */}
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
              <h2>Pet Dog Poop Scooper | Stool Potty Scooper | Wastage Picker</h2>

              <div className="onec-rating">
                <Rating value={4} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <p className="onec-price">Rs.1198</p>

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
                <div className="onec-payment-method">
                  <span>Payment Method</span>
                  <FormControl size="small" className="onec-form-control">
                    <Select defaultValue="cod" disabled>
                      <MenuItem value="cod">Cash on Delivery</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="onec-bill-row">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="onec-bill-row total">
                  <span>Total Bill</span>
                  <span>Rs 1298</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="onec-buttons">
                <button onClick={() => setShowConfirmMsg(true)} className="confirm-btn">
                  Confirm Order
                </button>
                <button onClick={onClose} className="cancel-btn">
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
              <button
                className="onec-close-btn"
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
                className="confirm-ok-btn"
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

export default FiveC;