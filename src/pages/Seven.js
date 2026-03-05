// src/pages/Seven.js
import React from "react";
import Layout from "../component/layout/Layout";
import Bone from "../assets/images/bone.jpeg";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { ReviewList } from "../data/sevenreview";
import { Link } from "react-router-dom";
import "../style/Seven.css";

const Seven = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Layout>
      <div className="seven-overlay">
        <div className="seven-backdrop" onClick={onClose}></div>

        <div className="seven-modal small">
          <button className="seven-close" onClick={onClose}>✕</button>

          {/* PRODUCT */}
          <div className="seven-product">
            <img src={Bone} alt="Dog Chew Bone" className="seven-img" />

            <div className="seven-details">
              <h2>Dog Chew Bone 3"</h2>
              <p className="seven-desc">
                Safe chew bone that improves dental health.
              </p>

              <p className="seven-price">Rs. 298</p>

              <div className="seven-qty">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <div className="seven-actions">
                <Link to="/sevenc" className="buy-btn">Buy</Link>
                <button className="cart-btn">Cart</button>
              </div>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="seven-reviews">
            <div className="seven-review-head">
              <h3>Reviews</h3>
              <Rating value={4.5} readOnly size="small" />
            </div>

            <Slider {...settings}>
              {ReviewList.map((review, index) => (
                <div key={index} className="seven-review">
                  <img src={review.image} alt={review.name} />
                  <h4>{review.name}</h4>
                  <Rating value={review.rating} readOnly size="small" />
                  <p>{review.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Seven;