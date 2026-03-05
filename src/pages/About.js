// src/pages/About.js
import React from "react";
import Layout from "../component/layout/Layout";
import Cat from "../assets/images/cat.jpeg";
import Rat from "../assets/images/rat.jpeg";
import Hand from "../assets/images/shake.jpeg";
import Vet from "../assets/images/dogg.jpeg";
import "../style/About.css";

const About = () => {
  return (
    <Layout>
      <div className="about-container">

        {/* Left Text Section */}
        <div className="about-text">
          <h1>Vetly</h1>
          <p>
            Vetly is a modern veterinary platform dedicated to providing
            comprehensive care for pets. It offers a range of services,
            including health check-ups, vaccinations, grooming, and nutritional
            guidance, all tailored to meet the unique needs of each animal.
            Vetly combines professional expertise with compassionate care,
            ensuring pets remain healthy, happy, and active. With a
            user-friendly interface, pet owners can easily schedule
            appointments, access medical records, and receive timely reminders
            for vaccinations or follow-ups. By integrating technology and
            veterinary knowledge, Vetly aims to make pet healthcare more
            accessible, efficient, and reliable for every pet parent.
          </p>
        </div>

        {/* Right Images Section */}
        <div className="about-images">
          <img src={Cat} alt="Cat" />
          <img src={Rat} alt="Guinea Pig" />
          <img src={Hand} alt="Handshake" />
          <img src={Vet} alt="Vet with Dog" />
        </div>

      </div>
    </Layout>
  );
};

export default About;