import React, { forwardRef } from "react";

//improt style
import "../styles/Techno.css";

function Techno() {
  return (
    <div className="techno">
      <h2>What I use ?</h2>
      <div className="techno-list">
        <p>Below you can see all the technology that I use in my works.</p>
        <div className="techno-list-container">
          <ul>
            <li>
              <span>01</span>Html/Css
            </li>
            <li>
              <span>02</span>Scss
            </li>
            <li>
              <span>03</span>Javascript
            </li>
            <li>
              <span>04</span>Express
            </li>
            <li>
              <span>05</span>Node.js
            </li>
          </ul>
          <ul>
            <li>
              <span>06</span>Mongo Db
            </li>
            <li>
              <span>07</span>React js
            </li>
            <li>
              <span>08</span>Next js
            </li>
            <li>
              <span>09</span>Github
            </li>
            <li>
              <span>10</span>Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const forwardedTechno = forwardRef(Techno);

export default forwardedTechno;
