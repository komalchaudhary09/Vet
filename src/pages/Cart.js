import React from "react";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Doctor from "../assets/images/doc.jpeg";
import Banana from "../assets/images/Banana.jpeg";
import "../style/Cart.css";

const Cart = () => {
  return (
    <Layout>
      <div className="cart-page">
        {/* Doctor Card */}
        <div className="cart-card">
          <div className="cart-left">
            <div
              className="cart-image"
              style={{ backgroundImage: `url(${Doctor})` }}
            ></div>
            <div className="cart-info">
              <h2>Dr. Saran Poudel</h2>
              <p>-Qualification: BVSc & AH</p>
              <p>-Experience: 5 years</p>
              <p>-Location: Naikap</p>
              <div className="cart-buttons">
                <button className="book-btn">Book</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </div>
          </div>
          <div className="cart-right">
            <h3>Veterinarian</h3>
            <Stack spacing={1}>
              <Rating value={5} readOnly />
            </Stack>
          </div>
        </div>

        {/* Product Card */}
        <div className="cart-card">
          <div className="cart-left">
            <div
              className="cart-image"
              style={{ backgroundImage: `url(${Banana})` }}
            ></div>
            <div className="cart-info">
              <h3>Banana Printed T-shirt for dog | dog clothes | Kitcha</h3>
              <p className="product-desc">
                Keep your furry friend stylish and comfy with this adorable
                banana-printed dog T-shirt. Made from soft, breathable fabric,
                it’s perfect for daily wear, walks, and playtime. Lightweight,
                easy to wear, and gentle on your pet’s skin!
              </p>
              <div className="cart-buttons">
                <button className="book-btn">Buy</button>
                <button className="cancel-btn">Cancel</button>
              </div>
            </div>
          </div>
          <div className="cart-right">
            <Stack spacing={1}>
              <Rating value={4} readOnly />
            </Stack>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;