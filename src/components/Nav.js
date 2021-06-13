import React from "react";
import Logo from "../images/logo.svg";
import Hamburger from "../images/icon-hamburger.svg";
function Nav({ toggle }) {
  return (
    <nav>
      <div className="nav-center">
        <img src={Logo} alt="logo" />
        <img src={Hamburger} alt="toggle" className="toggle" onClick={toggle} />
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Projects
            </a>
          </li>
          <li>
            <button className="btn">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
