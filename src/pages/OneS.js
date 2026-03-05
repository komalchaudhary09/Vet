// src/pages/OneS.js
import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Slider from "react-slick";
import DogImg from "../assets/images/Banana.jpeg";
import { ProductList } from "../data/onereview";
import "../style/OneS.css";

const OneS = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const productPrice = 1200;
  const shippingFee = 100;
  const totalPrice = productPrice * quantity + shippingFee;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one review at a time
    slidesToScroll: 1,
    arrows: true,
  };

  const handleQuantity = (type) => {
    setQuantity((prev) => {
      if (type === "inc") return prev + 1;
      if (type === "dec" && prev > 1) return prev - 1;
      return prev;
    });
  };

  return (
    <Layout>
      <div className="ones-page">
        {/* PRODUCT CARD */}
        <div className="ones-card">
          <div className="ones-flex">
            <div className="ones-image-box">
              <img
                src={DogImg}
                alt="Dog Product"
              />
            </div>

            <div className="ones-content">
              <h2>Dog Water Bottle Travel-Compact Foldable Dispenser</h2>

              <div className="ones-rating">
                <Rating value={4.5} readOnly size="small" />
                <span>Ratings 26</span>
              </div>

              <div className="ones-price-row">
                <span className="line-through">Rs.1900</span>
                <span className="price">Rs.{productPrice}</span>
                <span className="discount">-36.86%</span>
              </div>

              {/* Quantity */}
              <div className="ones-quantity">
                <span>Quantity</span>
                <button onClick={() => handleQuantity("dec")}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantity("inc")}>+</button>
              </div>

              {/* Action Buttons */}
              <div className="ones-buttons">
                <button onClick={() => setShowConfirm(true)}>Buy Now</button>
                <button onClick={() => setShowConfirm(true)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>

        {/* REVIEWS */}
        <div className="ones-card reviews-card">
          <div className="ones-review-header">
            <h3>Reviews</h3>
            <span>Ratings {ProductList.length}</span>
          </div>

          <Slider {...sliderSettings}>
            {ProductList.map((r, i) => (
              <div key={i} className="ones-review">
                <img src={r.image} alt={r.name} />
                <h4>{r.name}</h4>
                <Rating value={r.rating} readOnly size="small" />
                <p>{r.text}</p>
              </div>
            ))}
          </Slider>
        </div>

        {/* CONFIRM ORDER MODAL */}
        {showConfirm && (
          <div className="ones-modal-overlay">
            <div
              className="ones-backdrop"
              onClick={() => setShowConfirm(false)}
            />
            <div className="ones-modal">
              <h3>Confirm Order</h3>

              <div className="ones-location">
                <LocationOnIcon />
                <span>Chandragiri, Kathmandu</span>
              </div>

              <div className="ones-payment">
                Payment Method: Cash on Delivery
              </div>

              <div className="ones-bill-row">
                <span>Shipping</span>
                <span>Rs {shippingFee}</span>
              </div>
              <div className="ones-bill-row total">
                <span>Total</span>
                <span>Rs {totalPrice}</span>
              </div>

              <div className="ones-modal-buttons">
                <button
                  onClick={() => {
                    setShowConfirm(false);
                    setShowSuccess(true);
                  }}
                >
                  Confirm
                </button>
                <button onClick={() => setShowConfirm(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {/* SUCCESS POPUP */}
        {showSuccess && (
          <div className="ones-modal-overlay">
            <div className="ones-backdrop" />
            <div className="ones-modal ones-success">
              <p>Your order has been confirmed</p>
              <button onClick={() => setShowSuccess(false)}>OK</button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default OneS;