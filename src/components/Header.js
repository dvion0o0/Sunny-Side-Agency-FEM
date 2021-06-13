import React, { useState } from "react";
import Navbar from "./Nav";
import DownArrow from "../images/icon-arrow-down.svg";
import Sidebar from "./Sidebar";

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <Navbar toggle={handleToggle} />
      <Sidebar toggle={toggle} handleToggle={handleToggle} />
      <div className="hero-content">
        <h1>WE ARE CREATIVES</h1>
        <img src={DownArrow} alt="downarrow" />
      </div>
    </header>
  );
}

export default Header;
