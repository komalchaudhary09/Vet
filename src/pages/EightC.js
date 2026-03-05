import { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import DogImg from "../assets/images/mat.jpeg";
import "../style/EightC.css";

const EightC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="onec-overlay">
        {/* Background */}
        <div className="onec-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="onec-modal">
          <button className="onec-close-btn" onClick={onClose}>✕</button>

          <div className="onec-flex">
            {/* Image */}
            <div className="onec-image-box">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Right Content */}
            <div className="onec-content">
              <h2>Pet Dog Pee Training pad | Training | Prett</h2>

              <div className="onec-rating">
                <Rating value={4} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <p className="onec-price">Rs.50</p>

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
                  <span>Payment Methods</span>
                  <FormControl size="small" className="onec-select">
                    <Select defaultValue="cod">
                      <MenuItem value="cod">Cash on Delivery</MenuItem>
                      <MenuItem value="online">Online Payment</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="onec-subtotal">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="onec-total">
                  <span>Total Bill</span>
                  <span>Rs 150</span>
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
            <div className="onec-confirm-backdrop" />
            <div className="onec-confirm-modal">
              <button
                className="onec-confirm-close"
                onClick={() => setShowConfirmMsg(false)}
              >
                ✕
              </button>
              <p>Your Order has been confirmed</p>
              <button
                className="onec-confirm-ok"
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

export default EightC;