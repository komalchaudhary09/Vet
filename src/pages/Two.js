// src/pages/Two.js
import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Layout from "../component/layout/Layout";
import Slider from "react-slick";
import { ReviewList } from "../data/tworeview";
import dogImg from "../assets/images/biscuit.jpeg";
import "../style/Two.css";

// Custom arrows
const NextArrow = ({ onClick }) => (
  <button className="two-arrow next" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="two-arrow prev" onClick={onClick}>
    &lt;
  </button>
);

const Two = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Layout>
      <div className="two-modal">
        {/* Backdrop */}
        <div className="two-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="two-content">
          <button className="two-close" onClick={onClose}>
            ✕
          </button>

          {/* Product Info */}
          <div className="two-product">
            <div className="two-image">
              <img src={dogImg} alt="Dog Product" />
            </div>
            <div className="two-info">
              <h2>Pumpkin Peanut Butter Bones | Dog Treat| Arine's</h2>
              <div className="two-rating">
                <Rating value={4.5} precision={0.5} readOnly size="small" />
                <span>Ratings {ReviewList.length}</span>
              </div>
              <p className="two-price">Rs.1,200</p>

              {/* Quantity */}
              <div className="two-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              {/* Buttons */}
              <div className="two-buttons">
                <Link to="/twoc" className="buy-btn">
                  Buy Now
                </Link>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Reviews Slider */}
          <div className="two-reviews">
            <Slider {...settings}>
              {ReviewList.map((review, index) => (
                <div key={index} className="two-review-item">
                  <div className="two-review-img">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <h4>{review.name}</h4>
                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
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

export default Two;