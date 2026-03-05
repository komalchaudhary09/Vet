import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import DogImg from "../assets/images/toy.jpeg";
import "../style/NineC.css"; // Custom CSS file

const NineC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="ninec-overlay">
        {/* Background */}
        <div className="ninec-backdrop" onClick={onClose}></div>

        {/* Modal */}
        <div className="ninec-modal">
          <button className="ninec-close-btn" onClick={onClose}>
            ✕
          </button>

          <div className="ninec-flex">
            {/* Image */}
            <div className="ninec-image-box">
              <img src={DogImg} alt="Cat Toy" />
            </div>

            {/* Content */}
            <div className="ninec-content">
              <h2>New Indoor Playing Cat Cotton Rope Ball Sounding Colorful</h2>

              <div className="ninec-rating">
                <Rating value={4} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <p className="ninec-price">Rs.300</p>

              {/* Quantity */}
              <div className="ninec-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              {/* Location */}
              <div className="ninec-location">
                <LocationOnIcon />
                <p>H-1, Bisnudevi Village, Nikap, Chandragiri, Kathmandu</p>
              </div>

              {/* Payment */}
              <div className="ninec-payment">
                <div className="ninec-payment-method">
                  <span>Payment Methods</span>
                  <FormControl size="small" className="ninec-form-control">
                    <Select defaultValue="cod">
                      <MenuItem value="cod">Cash on Delivery</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="ninec-bill-row">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="ninec-bill-row total">
                  <span>Total Bill</span>
                  <span>Rs 400</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="ninec-buttons">
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
          <div className="ninec-confirm-overlay">
            <div className="ninec-backdrop" />
            <div className="ninec-confirm">
              <button
                className="ninec-close-btn"
                onClick={() => setShowConfirmMsg(false)}
              >
                ✕
              </button>
              <p>Your Order has been confirmed</p>
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

export default NineC;