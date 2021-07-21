import React, { forwardRef } from "react";

//import style
import "../styles/Project.css";

//improt assets
import LouvreMuseum from "../assets/Schwarzenberg-palace.jpg";
import WeatherApp from "../assets/Weather-app.jpg"
import SpotifyClone from "../assets/Spotify-clone.png"

//import Component
import ProjectCard from "./ProjectCard";

function Project({ props }, ref) {
  return (
    <div className="project" ref={ref}>
      <h2>Latest projects</h2>
      <div className="project-container">
        <ProjectCard
          name="Louvre museum"
          img={LouvreMuseum}
          links="https://louvre-museum.vercel.app"
        />
        <ProjectCard
          name="Weather App"
          img={WeatherApp}
          links="https://weather-app-eight-neon.vercel.app"
        />
        <ProjectCard
          name="Spotify Clone"
          img={SpotifyClone}
          links="https://spotify-app-front.vercel.app"
        />
      </div>
    </div>
  );
}

const forwardedProject = forwardRef(Project);

export default forwardedProject;
