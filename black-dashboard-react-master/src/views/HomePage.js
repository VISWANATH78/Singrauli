import React from "react";
import { Link, Route } from "react-router-dom";
const Header = () => {
  const navStyle = {
    background: "rgba(255, 255, 255, 0.2)", // Glassmorphism background
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(4px)",
    borderRadius: "10px",
    padding: "15px 0",
  };

  const navLinkStyle = {
    color: "black", // Dark black text
    margin: "0 15px",
    fontSize: "16px",
  };

  const btnStyle = {
    marginLeft: "15px",
  };

  return (
    <header className="text-center">
      <nav className="navbar navbar-expand-lg navbar-light py-3" style={navStyle}>
        <div className="container">
          <Link to="/" className="navbar-brand"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="True"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={navLinkStyle}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link" style={navLinkStyle}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link" style={navLinkStyle}>
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resources" className="nav-link text-black" style={navLinkStyle}>
                  Resources
                </Link>
              </li>
          
              <li className="nav-item">
                <Link to="/contact" className="nav-link" style={navLinkStyle}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="navbar-buttons">
              <a href="/login" className="btn btn-primary" style={btnStyle}>
                Login
              </a>
              
              <a href="/contact" className="btn btn-success" style={btnStyle}>
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
      <body>
      </body>
    </header>
    
   
  );
};

export default Header;
