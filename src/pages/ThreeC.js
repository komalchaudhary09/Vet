import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DogImg from "../assets/images/skin.jpeg";
import "../style/ThreeC.css";

const ThreeC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  const handleConfirm = () => {
    setShowConfirmMsg(true);
  };

  return (
    <Layout>
      <div className="threec-modal">
        {/* Backdrop */}
        <div className="threec-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="threec-content">
          <button className="threec-close" onClick={onClose}>✕</button>

          <div className="threec-flex">
            {/* Image */}
            <div className="threec-image">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Right Content */}
            <div className="threec-right">
              <h2 className="threec-title">
                Drools Absolute skin coat tablet dog supplement | 50 pieces
              </h2>

              <div className="threec-rating">
                <Rating value={4} readOnly size="small" />
                <span className="threec-rating-text">Ratings 26</span>
              </div>

              <p className="threec-price">Rs.600</p>

              <div className="threec-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <div className="threec-location">
                <LocationOnIcon />
                <p>H-1, Bisnudevi Village, Nikap, Chandragiri, Kathmandu</p>
              </div>

              <div className="threec-payment">
                <div className="threec-payment-method">
                  <span>Payment Method</span>
                  <FormControl size="small">
                    <Select defaultValue="cod" disabled>
                      <MenuItem value="cod">Cash on Delivery</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="threec-bill-row">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="threec-bill-row total">
                  <span>Total Bill</span>
                  <span>Rs 700</span>
                </div>
              </div>

              <div className="threec-buttons">
                <button onClick={handleConfirm} className="threec-confirm">
                  Confirm Order
                </button>
                <button onClick={onClose} className="threec-cancel">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Confirmation Popup like FiveC */}
        {showConfirmMsg && (
          <div className="threec-confirm-modal">
            <div className="threec-confirm-content">
              <p>Your order has been confirmed!</p>
              <button
                className="threec-confirm-ok"
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

export default ThreeC;