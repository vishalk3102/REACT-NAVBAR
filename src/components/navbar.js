import React from "react";
import { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons,setShowMediaIcons]=useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* ***************************logo section ******************************************** */}
        <div className="logo">
          <h2>
            <span>R</span>eact
            <span>N</span>avbar
          </h2>
        </div>

        {/* ***************************menu section *************************************** */}
        <div className={showMediaIcons?"menu-link  mobile-menu-link" : "menu-link"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Service</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* ***************************social media section *************************** */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="#" target="_blank" className="facebook">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="instagram">
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" className="twitter">
                <FaTwitterSquare />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* ***************************hero section *************************** */}
      {/* <section className="hero-section">
        <p>welcome to </p>
        <h1>react navbar </h1>
      </section> */}
    </>
  );
};
export default Navbar;
