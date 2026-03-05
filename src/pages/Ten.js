import React from "react";
import Med from "../assets/images/medicine.jpeg";
import Rating from "@mui/material/Rating";
import Layout from "../component/layout/Layout";
import Slider from "react-slick";
import { ReviewList } from "../data/tenreview";
import { Link } from "react-router-dom";
import "../style/Ten.css";

const NextArrow = ({ onClick }) => (
  <button className="ten-arrow next-arrow" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="ten-arrow prev-arrow" onClick={onClick}>
    &lt;
  </button>
);

const Ten = ({ onClose }) => {
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
      <div className="ten-modal">
        <div className="ten-backdrop" onClick={onClose}></div>

        <div className="ten-content">
          <button className="ten-close" onClick={onClose}>
            ✕
          </button>

          <div className="ten-product-box">
            <div className="ten-product-flex">
              <div className="ten-product-image">
                <img src={Med} alt="Dog Product" />
              </div>
              <div className="ten-product-right">
                <h2 className="ten-title">
                  Detick Solution For Scabies Fungal, Lice, Flea, Tick For Pets
                </h2>
                <p className="ten-desc">
                  Topical treatment designed to help manage common skin and
                  parasite problems in pets, including scabies mites, fungal
                  infections, lice, fleas, and ticks
                </p>
                <p className="ten-price">Rs.1500</p>
                <div className="ten-quantity">
                  <span>Quantity</span>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <div className="ten-buttons">
                  <Link to="/tenc" className="ten-buy-btn">
                    Buy Now
                  </Link>
                  <button className="ten-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="ten-review-box">
            <div className="ten-review-header">
              <div className="ten-review-left">
                <h3>Reviews</h3>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
              </div>
              <span className="ten-review-count">
                Ratings {ReviewList.length}
              </span>
            </div>

            <Slider {...settings}>
              {ReviewList.map((review, index) => (
                <div key={index} className="ten-review-slide">
                  <div className="ten-review-image">
                    <img src={review.image} alt={review.name} />
                  </div>
                  <h4 className="ten-review-name">{review.name}</h4>
                  <Rating
                    value={review.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <p className="ten-review-text">{review.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ten;