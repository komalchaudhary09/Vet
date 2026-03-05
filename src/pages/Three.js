import React from "react";
import Skin from "../assets/images/skin.jpeg";
import Rating from "@mui/material/Rating";
import Layout from "../component/layout/Layout";
import Slider from "react-slick";
import { ReviewList } from "../data/threereview";
import { Link } from "react-router-dom";
import "../style/Three.css";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button className="three-arrow next" onClick={onClick}>
    &gt;
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="three-arrow prev" onClick={onClick}>
    &lt;
  </button>
);

const Three = ({ onClose }) => {
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
      <div className="three-modal">
        {/* Backdrop */}
        <div className="three-backdrop" onClick={onClose}></div>

        {/* Main Content */}
        <div className="three-content">
          <button className="three-close" onClick={onClose}>
            ✕
          </button>

          <div className="three-box">
            <div className="three-flex">
              {/* Image */}
              <div className="three-image">
                <img src={Skin} alt="Dog Product" />
              </div>

              {/* Details */}
              <div className="three-right">
                <h2 className="three-title">
                  Drools Absolute skin coat tablet dog supplement | 50 pieces
                </h2>
                <p className="three-desc">
                  Specially formulated to support your dog’s healthy skin and
                  shiny coat. Enriched with essential nutrients like omega fatty
                  acids, vitamins, and minerals, these tablets help reduce
                  dryness, improve coat softness, and maintain overall skin
                  health.
                </p>
                <p className="three-price">Rs.600</p>

                <div className="three-quantity">
                  <span>Quantity</span>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>

                <div className="three-buttons">
                  <Link to="/threec" className="three-buy">
                    Buy Now
                  </Link>
                  <button className="three-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="three-reviews">
            <div className="three-review-header">
              <div className="flex items-center gap-2">
                <h3>Reviews</h3>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
              </div>
              <span className="text-blue-500">Ratings {ReviewList.length}</span>
            </div>

            <Slider {...settings}>
              {ReviewList.map((review, index) => (
                <div key={index} className="three-review-item">
                  <div className="three-review-img">
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

export default Three;