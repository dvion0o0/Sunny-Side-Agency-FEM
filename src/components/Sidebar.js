import React from "react";

function Sidebar({ toggle, handleToggle }) {
  return (
    <aside className={`${toggle && "active"}`}>
      <ul className="side-links">
        <li>
          <a href="/" className="side-link">
            About
          </a>
        </li>
        <li>
          <a href="/" className="side-link">
            Services
          </a>
        </li>
        <li>
          <a href="/" className="side-link">
            Projects
          </a>
        </li>
        <li>
          <button className=" btn side-btn" onClick={handleToggle}>
            Contact
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
