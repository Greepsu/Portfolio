import React, { useEffect, useRef } from "react";

//import style
import "../styles/App.css";

//import assets
import topArrow from "../assets/top-arrow.svg";

//import GSAP
import { gsap } from "gsap";

//import Components
import Contact from "./Contact";
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import Project from "./Project";
import Cursor from "./Cursor";
import Techno from "./Techno";

function App() {
  
  //Define ref
  const presentationRef = useRef();
  const projectRef = useRef();
  const contactRef = useRef();
  const technoRef = useRef();

  //Opening Animation
  useEffect(() => {
    let tl = gsap.timeline({ defaults: { ease: "Power0.easeout" } });

    tl.fromTo(
      ".navbar",
      { opacity: 0 },
      { opacity: 1, delay: 0.5, duration: 1.2 }
    );
    tl.fromTo(
      ".presentation-title",
      { opacity: 0, y: "20%" },
      { opacity: 1, y: "0%", duration: 1.2 }
    );
    tl.fromTo(
      ".presentation-section",
      { opacity: 0, y: "20%" },
      { opacity: 1, y: "0%", duration: 1.2 }
    );
  }, []);

  return (
    <div className="App">
      <div className="app-container">
        <Cursor />
        <Navbar props={{ presentationRef, projectRef, contactRef }} />
        <Presentation ref={presentationRef} />
        <Project ref={projectRef} />
        <Techno ref={technoRef} />
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
