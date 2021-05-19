import React, { useState, useEffect } from "react";

//import GSAP
import { gsap } from "gsap";

//import style
import "../styles/Cursor.css";

export default function Cursor() {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    gsap.set(".follower", { xPercent: -50, yPercent: -50 });
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    const follow = document.querySelector(".follower");
    const cur = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      gsap.to(cur, 0.1, { x: e.clientX, y: e.clientY });
      gsap.to(follow, 0.1, { x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll("a");

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("mouseover", (e) => {
        setHover("active");
      });
      links[i].addEventListener("mouseout", (e) => {
        setHover(false);
      });
    }
  }, [hover]);

  return (
    <div className="">
      <div className={`cursor ${hover}`}></div>
      <div className={`follower ${hover}`}></div>
    </div>
  );
}
