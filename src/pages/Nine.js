import React from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { ReviewList } from "../data/ninereview";
import Cat from "../assets/images/toy.jpeg";
import { Link } from "react-router-dom";
import "../style/Nine.css";

// Slider Arrows
const NextArrow = ({ onClick }) => (
  <button className="nine-arrow next" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="nine-arrow prev" onClick={onClick}>
    &lt;
  </button>
);

const Nine = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true, // Adjust height per review
  };

  return (
    <Layout>
      <div className="nine-overlay">
        <div className="nine-backdrop" onClick={onClose}></div>

        <div className="nine-modal">
          <button className="nine-close-btn" onClick={onClose}>
            ✕
          </button>

          <div className="nine-product">
            <div className="nine-image-box">
              <img src={Cat} alt="Cat Toy" />
            </div>
            <div className="nine-content">
              <h2>New Indoor Playing Cat Cotton Rope Ball Sounding Colorful</h2>
              <p className="nine-description">
                Made with soft cotton rope and bright colors, this ball often includes a gentle sound element (like a bell) that grabs your cat’s attention and encourages play.
              </p>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <p className="nine-price">Rs.300</p>

              <div className="nine-quantity">
                <span>Quantity</span>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>

              <div className="nine-buttons">
                <Link to="/ninec" className="buy-btn">Buy Now</Link>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="nine-reviews">
            <h3>Reviews</h3>
            <Slider {...settings}>
              {ReviewList.map((review, idx) => (
                <div key={idx} className="nine-review-item">
                  <div className="nine-review-img">
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

export default Nine;