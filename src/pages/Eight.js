import React from "react";
import Mat from "../assets/images/mat.jpeg";
import Rating from "@mui/material/Rating";
import Layout from "../component/layout/Layout";
import Slider from "react-slick";
import { ReviewList } from "../data/eightreview";
import { Link } from "react-router-dom";
import "../style/Eight.css";

const NextArrow = ({ onClick }) => (
  <button className="arrow next" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="arrow prev" onClick={onClick}>
    &lt;
  </button>
);

const Eight = ({ onClose }) => {
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
      <div className="eight-overlay">
        <div className="eight-backdrop" onClick={onClose}></div>
        <div className="eight-modal">
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>

          <div className="eight-product-card">
            <div className="eight-product-flex">
              <div className="eight-image-box">
                <img src={Mat} alt="Dog Product" />
              </div>
              <div className="eight-product-info">
                <h2>Pet Dog Pee Training pad | Training | Prett</h2>
                <p className="eight-desc">
                  These pads are designed with multiple layers that quickly soak
                  up urine and lock it away from the surface, helping prevent
                  leaks and messes on floors and carpets. They are ideal for
                  puppy housebreaking, older dogs with bladder control issues.
                </p>
                <p className="eight-price">Rs.50</p>
                <div className="eight-quantity">
                  <span>Quantity</span>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div className="eight-action-buttons">
                  <Link to="/eightc" className="buy-btn">
                    Buy Now
                  </Link>
                  <button className="add-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="eight-review-card">
            <div className="review-header">
              <div className="review-title">
                <h3>Reviews</h3>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
              </div>
              <span className="review-count">Ratings {ReviewList.length}</span>
            </div>

            <Slider {...settings}>
              {ReviewList.map((review, index) => (
                <div key={index} className="review-slide">
                  <div className="review-avatar">
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

export default Eight;