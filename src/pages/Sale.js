import Layout from "../component/layout/Layout";
import Banner from "../assets/images/bigsale.jpeg";
import { ProductList } from "../data/saledata";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import "../style/Sale.css";

const Sale = () => {
  return (
    <Layout>
      {/* Banner */}
      <div
        className="sale-banner"
        style={{ backgroundImage: `url(${Banner})` }}
      />

      {/* Title */}
      <div className="sale-title">
        <h2>Sales And Offers Just For You!</h2>
      </div>

      {/* Products */}
      <div className="sale-grid">
        {ProductList.map((product, index) => {
          const discountedPrice =
            product.price - (product.price * product.discount) / 100;

          return (
            <Link to={product.link} key={index} className="sale-link">
              <div className="sale-card">
                {/* Discount badge */}
                <span className="sale-discount">
                  {product.discount}% OFF
                </span>

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="sale-image"
                />

                {/* Name */}
                <p className="sale-name">{product.name}</p>

                {/* Rating */}
                <Rating
                  value={product.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />

                {/* Sold */}
                <p className="sale-sold">{product.sold} sold</p>

                {/* Price */}
                <div className="sale-price">
                  <span className="sale-old-price">
                    Rs. {product.price}
                  </span>
                  <span className="sale-new-price">
                    Rs. {Math.round(discountedPrice)}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
};

export default Sale;