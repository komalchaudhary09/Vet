// src/pages/One.js
import React from "react";
import dogImg from "../assets/images/Banana.jpeg";
import Rating from "@mui/material/Rating";
import Layout from "../component/layout/Layout";
import Slider from "react-slick";
import { ProductList } from "../data/onereview";
import { Link } from "react-router-dom";
import "../style/One.css";

// Arrow components
const NextArrow = ({ onClick }) => (
  <button className="one-arrow next" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="one-arrow prev" onClick={onClick}>
    &lt;
  </button>
);

const One = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one review at a time
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Layout>
      <div className="one-overlay">
        {/* Backdrop */}
        <div className="one-backdrop" onClick={onClose}></div>

        {/* Modal */}
        <div className="one-modal">
          <button className="one-close-btn" onClick={onClose}>
            ✕
          </button>

          {/* Product Info */}
          <div className="one-product">
            <div className="one-product-flex">
              <div className="one-image-box">
                <img src={dogImg} alt="Dog Product" />
              </div>

              <div className="one-product-content">
                <h2>Banana Printed T-shirt for dog | dog clothes | kitcha</h2>
                <p>
                  Keep your furry friend stylish and comfy with this adorable
                  banana-printed dog T-shirt. Made from soft, breathable fabric,
                  perfect for daily wear, walks, and playtime.
                </p>
                <p className="one-price">Rs.600</p>

                <div className="one-quantity">
                  <span>Quantity</span>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <div className="one-buttons">
                  <Link to="/onec" className="buy-btn">
                    Buy Now
                  </Link>
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="one-reviews">
            <div className="one-reviews-header">
              <div className="flex">
                <h3>Reviews</h3>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
              </div>
              <span>Ratings {ProductList.length}</span>
            </div>

            <Slider {...settings} className="one-slider">
              {ProductList.map((review, index) => (
                <div key={index} className="one-review-card">
                  <div className="one-review-img">
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

export default One;