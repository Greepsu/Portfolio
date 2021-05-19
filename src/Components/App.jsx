import React, { useRef } from "react";

//import style
import "../styles/App.css";

//import assets
import topArrow from "../assets/top-arrow.svg";

//import Components
import Contact from "./Contact";
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import Project from "./Project";
import Cursor from "./Cursor";

function App() {
  //Define ref
  const presentationRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();

  return (
    <div className="App">
      <div className="app-container">
        <Cursor />
        <Navbar props={{ presentationRef, projectRef, contactRef }} />
        <Presentation ref={presentationRef} />
        <Project ref={projectRef} />
        <Contact ref={contactRef} />
        <div className="separator"></div>
        <div className="lift-up">
          <a
            href="#Home"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i>
              <img src={topArrow} alt="" />
            </i>
            Lift up
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
