import React, { forwardRef } from "react";

//import styles
import "../styles/Presentation.css";

function Presentation({ props }, ref) {
  return (
    <div className="presentation" ref={ref}>
      <div className="presentation-title">
        <p>Welcome to my personal Portfolio !</p>
        <h1>
          <span id="create">
            Hello! I'm Arnaud, a web developper based in France
          </span>
        </h1>
      </div>
      <div className="presentation-section">
        <h2>What I do ?</h2>
        <div className="presentation-section-container">
          <div className="presentation-section-list">
            <p>
              I'm a passionate Frontend developer. Below you can see some
              projects I've been working on lately. I’m always looking to
              collaborate on some cool project !
            </p>
            <ul>
              <li>
                <span>01</span>Landing Page
              </li>
              <li>
                <span>02</span>Integration
              </li>
              <li>
                <span>03</span>Group projects
              </li>
              <li>
                <span>04</span>Website portfolio
              </li>
            </ul>
          </div>
          <p className="presentation-aside-text">
            I'm an occasional UI/UX Designer who loves making high-quality
            websites and applications.
          </p>
        </div>
      </div>
    </div>
  );
}

const forwardedPresentation = forwardRef(Presentation);

export default forwardedPresentation;
