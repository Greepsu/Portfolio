import React, { forwardRef } from "react";

//import styles
import "../styles/Presentation.css";

function Presentation({ props }, ref) {
  return (
    <div className="presentation" ref={ref}>
      <div className="presentation-title">
        <p>I'm focus on crafting clean & user‑friendly experiences.</p>
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
              Below you can see some projects I've been working on lately. In my
              works I use simple and functionnal visual solutions that really
              work.
            </p>
            <ul>
              <li>
                <span>01</span>Landing Page
              </li>
              <li>
                <span>02</span>Online store
              </li>
              <li>
                <span>03</span>News sites
              </li>
              <li>
                <span>04</span>Website portfolio
              </li>
              <li>
                <span>05</span>Corporate website
              </li>
            </ul>
          </div>
          <p className="presentation-aside-text">
            I believe that quality design is the result of a deep dive into the
            client's business problems that can be solved with my solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

const forwardedPresentation = forwardRef(Presentation);

export default forwardedPresentation;
