// src/pages/Vet.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../component/layout/Layout";
import Rating from "@mui/material/Rating";
import { VetList } from "../data/vetdata";
import "../style/Vet.css";

const Vet = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="vet-page">
        <h2 className="vet-title">Available Veterinarians & Trainer</h2>

        <div className="vet-list">
          {VetList.map((vet, index) => (
            <div key={index} className="vet-card">
              <div className="vet-card-left">
                <img src={vet.image} alt={vet.name} className="vet-image" />

                <div className="vet-info">
                  <h3 className="vet-name">{vet.name}</h3>
                  <p>→ Qualification: {vet.qualification}</p>
                  <p>→ Experience: {vet.experience} years</p>
                  <p>→ Location: {vet.location}</p>

                  <div className="vet-buttons">
                    <button className="vet-add-cart">Add to Cart</button>
                    <button
                      className="vet-book"
                      onClick={() => navigate(vet.link)}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>

              <div className="vet-card-right">
                <p className="vet-role">{vet.role}</p>
                <Rating value={vet.rating} readOnly size="large" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Vet;