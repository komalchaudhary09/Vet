import React from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import { ReviewList } from "../data/sixreview";
import Drool from "../assets/images/drool.jpeg";
import { Link } from "react-router-dom";
import "../style/Six.css";

const NextArrow = ({ onClick }) => (
  <button className="six-arrow six-next" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="six-arrow six-prev" onClick={onClick}>
    &lt;
  </button>
);

const Six = ({ onClose }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // one review at a time
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Layout>
      <div className="six-overlay">
        {/* Dark blurred background */}
        <div className="six-backdrop" onClick={onClose}></div>

        {/* Modal Box */}
        <div className="six-modal">
          <button className="six-close" onClick={onClose}>
            ✕
          </button>

          {/* Product Info */}
          <div className="six-product-card">
            <div className="six-product-flex">
              <div className="six-img-box">
                <img src={Drool} alt="Dog Product" />
              </div>

              <div className="six-details">
                <h2 className="six-title">
                  Drools Adult Dry Chicken Food | Crown | 400gm
                </h2>
                <p className="six-desc">
                  Formulated as a complete balanced diet for adult dogs of all breeds, with protein from real chicken to support muscle health. It also contains vitamins, minerals, and fats for skin, coat, digestion, and energy.
                </p>
                <p className="six-price">Rs.190</p>

                <div className="six-quantity">
                  <span>Quantity</span>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <div className="six-buttons">
                  <Link to="/sixc" className="six-buy">
                    Buy Now
                  </Link>
                  <button className="six-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="six-review-card">
            <div className="six-review-header">
              <h3>Reviews</h3>
              <Rating value={4.5} precision={0.5} readOnly size="small" />
              <span>{ReviewList.length} Ratings</span>
            </div>

            <Slider {...settings}>
              {ReviewList.map((r, i) => (
                <div key={i} className="six-review">
                  <div className="six-review-img">
                    <img src={r.image} alt={r.name} />
                  </div>
                  <h4 className="six-review-name">{r.name}</h4>
                  <Rating value={r.rating} precision={0.5} readOnly size="small" />
                  <p className="six-review-text">{r.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Six;