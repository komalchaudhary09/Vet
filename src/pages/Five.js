import React, { useState } from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { ReviewList } from "../data/fivereview";
import { Link } from "react-router-dom";
import Poop from "../assets/images/poop.jpeg";
import "../style/Five.css";

// Slider Arrow Components
const NextArrow = ({ onClick }) => (
  <button className="five-arrow next-arrow" onClick={onClick}>&gt;</button>
);

const PrevArrow = ({ onClick }) => (
  <button className="five-arrow prev-arrow" onClick={onClick}>&lt;</button>
);

const Five = ({ onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity(prev => prev + 1);

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
      <div className="five-overlay">
        {/* Background */}
        <div className="five-backdrop" onClick={onClose}></div>

        {/* Main Modal */}
        <div className="five-modal">
          <button className="five-close-btn" onClick={onClose}>✕</button>

          {/* Product Details */}
          <div className="five-product">
            <div className="five-flex">
              <div className="five-image-box">
                <img src={Poop} alt="Dog Product" />
              </div>
              <div className="five-content">
                <h2>Pet Dog Poop Scooper | Stool Potty Scooper | Waste Picker</h2>
                <p className="five-description">
                  This poop scooper makes cleaning up after your pet quick, easy,
                  and hygienic. Designed with a strong grip and durable material,
                  it allows you to pick up waste without touching it directly.
                </p>
                <p className="five-price">Rs.1198</p>

                {/* Quantity */}
                <div className="five-quantity">
                  <span>Quantity</span>
                  <button onClick={handleDecrease}>-</button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrease}>+</button>
                </div>

                {/* Action Buttons */}
                <div className="five-buttons">
                  <Link to="/fivec" className="buy-btn">Buy Now</Link>
                  <button className="cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="five-reviews">
            <div className="five-reviews-header">
              <div className="five-reviews-title">
                <h3>Reviews</h3>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
              </div>
              <span>Ratings {ReviewList.length}</span>
            </div>

            <Slider {...settings}>
              {ReviewList.map((review, index) => (
                <div key={index} className="five-review-item">
                  <div className="five-review-image">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <h4>{review.name}</h4>
                  <Rating value={review.rating} precision={0.5} readOnly size="small" />
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

export default Five;