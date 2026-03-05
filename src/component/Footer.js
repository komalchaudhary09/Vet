import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "../style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-grid">

          {/* Left Section */}
          <div className="footer-left">
            <h2 className="footer-logo">Vetly.</h2>
            <p className="footer-text">
              Vetly is a modern, user-friendly veterinary management system  that simplifies clinic   operations    by    handling   appointments, patient records treatments, and inventory
              in one organized platform.
            </p>
          </div>

          {/* Right Section */}
          <div className="footer-right">
            <h3 className="footer-title">Get Notified</h3>
            <p className="footer-desc">
             A notification is a formal announcement
             of a vacancy for volunteers in any Animal 
             Care Foundation
            </p>

            <div className="subscribe-box">
              <MailOutlineIcon className="mail-icon" />
              <input
                type="email"
                placeholder="Email Address"
                className="subscribe-input"
              />
              <button className="subscribe-btn">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © Copyright Vetly 2025 | Site Template by{" "}
          <a href="https://colorlib.com/">Colorlib</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;