import React from "react";
import Logo from "../images/logo.svg";
import Facebook from "../images/icon-facebook.svg";
import Instagram from "../images/icon-instagram.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-center">
        <img src={Logo} alt="logo" />
        <ul className="footer-links">
          <li>
            <a href="/" className="footer-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="footer-link">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="footer-link">
              Projects
            </a>
          </li>
        </ul>
        <div className="social-links">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={Twitter} alt="" />
          <img src={Pinterest} alt="" />
        </div>
        <h5>Coded By Digvijay Ghosh</h5>
      </div>
    </footer>
  );
}

export default Footer;
