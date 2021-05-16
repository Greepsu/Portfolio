import React from "react";

//import styles
import "../styles/Navbar.css";

//import React-use: Window size
import { useWindowSize } from "react-use";
import Sidebar from "./Sidebar";

export default function Navbar({ props }) {

  // Use react-use hooks and store the app width
  const { width } = useWindowSize();

  // Set a breakpoint for sidebar appear
  const breakpoint = 1090;

  //Scroll to the ref section
  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth", block: "start" });


  console.log(props)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>M.</span>
      </div>
      <div className="navbar-links-container">
        {width > breakpoint ? (
          <ul className="navbar-links">
            <li>
              <a href="#Home" onClick={() => executeScroll(props.presentationRef)} >Home</a>
            </li>
            <li>
              <a href="#Projects" onClick={() => executeScroll(props.projectRef)} >Projects</a>
            </li>
            <li>
              <a href="#Contacts" onClick={() => executeScroll(props.contactRef)} >Contacts</a>
            </li>
          </ul>
        ) : (
          <Sidebar props={ props } />
        )}
      </div>
    </nav>
  );
}
