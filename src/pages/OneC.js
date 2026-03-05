import { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import DogImg from "../assets/images/toy.jpeg";
import "../style/OneC.css";

const OneC = ({ onClose }) => {
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);

  return (
    <Layout>
      <div className="modal-wrapper">
        {/* Background */}
        <div className="modal-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="modal-box">
          <button className="close-btn" onClick={onClose}>✕</button>

          <div className="modal-content">
            {/* Image */}
            <div className="image-box">
              <img src={DogImg} alt="Dog Product" />
            </div>

            {/* Right Section */}
            <div className="details">
              <h2>
                Banana Printed T-shirt for dog | dog clothes | kitcha
              </h2>

              <div className="rating">
                <Rating value={4} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <p className="price">Rs.600</p>

              {/* Quantity */}
              <div className="quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              {/* Location */}
              <div className="location">
                <LocationOnIcon />
                <p>
                  H-1, Bisnudevi Village, Nikap, Chandragiri, Kathmandu
                </p>
              </div>

              {/* Payment */}
              <div className="payment-box">
                <div className="payment-header">
                  <span>Payment Methods</span>
                  <FormControl size="small">
                    <Select defaultValue="cod">
                      <MenuItem value="cod">Cash on Delivery</MenuItem>
                      <MenuItem value="online">Online Payment</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="bill-row">
                  <span>Shipping Fee Subtotal</span>
                  <span>Rs 100</span>
                </div>

                <div className="bill-row total">
                  <span>Total Bill</span>
                  <span>Rs 700</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="btn-group">
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
          <div className="confirm-wrapper">
            <div className="confirm-backdrop"></div>

            <div className="confirm-box">
              <button
                className="confirm-close"
                onClick={() => setShowConfirmMsg(false)}
              >
                ✕
              </button>

              <p>Your order has been confirmed</p>

              <button
                className="ok-btn"
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

export default OneC;