import React from "react";
import Layout from "../component/layout/Layout";
import Banner from "../assets/images/bigsale.jpeg";
import { ProductList } from "../data/data";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  // Take first 10 products for the 5x2 layout
  const displayProducts = ProductList.slice(0, 10);

  return (
    <Layout>
      {/* ===== SALE BANNER ===== */}
      <Link to="/sale">
        <div
          className="home-banner"
          style={{ backgroundImage: `url(${Banner})` }}
        />
      </Link>

      {/* ===== PRODUCTS SECTION ===== */}
      <div className="home-products">
        {displayProducts.map((product, index) => (
          <Link
            to={product.link}
            key={index}
            className="home-product-link"
          >
            <div className="home-product-card">
              <img
                src={product.image}
                alt={product.name}
                className="home-product-img"
              />

              <p className="home-product-name">{product.name}</p>

              <Rating
                value={product.rating}
                precision={0.5}
                readOnly
                size="small"
              />

              <p className="home-product-sold">Sold: {product.sold}</p>

              <p className="home-product-price">Rs. {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;