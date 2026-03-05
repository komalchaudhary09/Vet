import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../style/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Vetly
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/vet">Vet/Trainer</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/profile">Profile</Link>
        </nav>

        {/* Right Actions */}
        <div className="actions">

          {/* Search */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Search in Vetly"
              className="search-input"
            />
            <SearchIcon className="search-icon" />
          </div>

          {/* Heart */}
          <Link to="/cart" className="heart-icon">
            <FavoriteBorderIcon />
          </Link>

          {/* Hamburger */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link onClick={() => setMenuOpen(false)} to="/home">Home</Link>
        <Link onClick={() => setMenuOpen(false)} to="/vet">Vet/Trainer</Link>
        <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
        <Link onClick={() => setMenuOpen(false)} to="/profile">Profile</Link>
      </div>
    </header>
  );
};

export default Header;