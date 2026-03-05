import React from "react";
import Layout from "../component/layout/Layout"; // adjust path if needed
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { ReviewList } from "../data/fourreview";
import Bath from "../assets/images/doggies.jpeg";

// Import Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../style/Four.css";

// Slider Arrows
const NextArrow = ({ onClick }) => (
  <button className="four-arrow next" onClick={onClick}>&gt;</button>
);
const PrevArrow = ({ onClick }) => (
  <button className="four-arrow prev" onClick={onClick}>&lt;</button>
);

const Four = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <Layout>
      <div className="four-overlay">
        <div className="four-backdrop" onClick={onClose}></div>

        <div className="four-modal">
          <button className="four-close-btn" onClick={onClose}>✕</button>

          {/* Product */}
          <div className="four-product-flex">
            <div className="four-image-box">
              <img src={Bath} alt="Dog Product" />
            </div>
            <div className="four-content">
              <h2>Dog Anti Itch Powder for pets itching | 150 gm</h2>
              <p className="four-description">
                This anti-itch powder helps relieve itching, irritation, and discomfort caused by dust, allergies, or minor skin issues. It keeps your pet’s skin fresh, dry, and comfortable while promoting healthy skin.
              </p>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <p className="four-price">Rs.399</p>
            </div>
          </div>

          {/* Reviews Slider */}
          <div className="four-reviews">
            <h3>Reviews</h3>
            <Slider {...settings}>
              {ReviewList.map((review, idx) => (
                <div key={idx} className="four-review-item">
                  <div className="four-review-img">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <h4 className="four-review-name">{review.name}</h4>
                  <Rating value={review.rating} precision={0.5} readOnly size="small" />
                  <p className="four-review-text">{review.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Four;