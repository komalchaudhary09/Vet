import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DogImg from "../assets/images/doggies.jpeg";
import "../style/FourC.css";

const FourC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="fourc-overlay">
        <div className="fourc-backdrop" onClick={onClose}></div>

        <div className="fourc-modal">
          <button className="fourc-close-btn" onClick={onClose}>✕</button>

          <div className="fourc-flex">
            {/* Image */}
            <div className="fourc-image">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Content */}
            <div className="fourc-content">
              <h2>Dog Anti Itch Powder for pets itching | 150 gm</h2>

              <div className="fourc-rating">
                <Rating value={4} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <p className="fourc-price">Rs.399</p>

              {/* Quantity */}
              <div className="fourc-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              {/* Location */}
              <div className="fourc-location">
                <LocationOnIcon className="fourc-location-icon" />
                <p>H-1, Bisnudevi Village, Nikap, Chandragiri, Kathmandu</p>
              </div>

              {/* Payment */}
              <div className="fourc-payment">
                <div className="fourc-payment-methods">
                  <span>Payment Methods</span>
                  <FormControl size="small" className="fourc-select">
                    <Select defaultValue="cod">
                      <MenuItem value="cod">Cash on Delivery</MenuItem>
                      <MenuItem value="online">Online Payment</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="fourc-subtotal">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="fourc-total">
                  <span>Total Bill</span>
                  <span>Rs 499</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="fourc-buttons">
                <button
                  onClick={() => setShowConfirmMsg(true)}
                  className="fourc-confirm-btn"
                >
                  Confirm Order
                </button>
                <button
                  onClick={onClose}
                  className="fourc-cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Popup */}
        {showConfirmMsg && (
          <div className="fourc-confirm-overlay">
            <div className="fourc-confirm-backdrop"></div>
            <div className="fourc-confirm-modal">
              <button
                onClick={() => setShowConfirmMsg(false)}
                className="fourc-confirm-close"
              >
                ✕
              </button>
              <p>Your Order has been confirmed</p>
              <button
                onClick={() => {
                  setShowConfirmMsg(false);
                  onClose();
                }}
                className="fourc-confirm-ok"
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

export default FourC;