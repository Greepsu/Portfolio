import React, { useState } from "react";

//import styles
import "../styles/Sidebar.css";

export default function Sidebar({ props }) {
  const [menuActive, setMenuActive] = useState(false);

  //Toggle component class (open / close sidebar)
  const menuIconClick = () =>
    menuActive ? setMenuActive(false) : setMenuActive("active");

  //Scroll to the ref section
  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuActive(false);
  };

  return (
    <div className="sidebar">
      <div className={`menu-icon ${menuActive}`}>
        <input
          className="menu-icon__cheeckbox"
          onClick={menuIconClick}
          type="checkbox"
        />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`sidebar-container ${menuActive}`}>
        <ul>
          <li>
            <a
              href="#Home"
              onClick={() => executeScroll(props.presentationRef)}
            >
              <span>01</span> Home
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={() => executeScroll(props.projectRef)}>
              <span>02</span> Projects
            </a>
          </li>
          <li>
            <a href="#Contacts" onClick={() => executeScroll(props.contactRef)}>
              <span>03</span> Contacts
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
