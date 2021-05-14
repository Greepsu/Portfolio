import React from 'react'
import ProjectCard from './ProjectCard'

//import style
import "../styles/Project.css"

//improt assets
import SchwarzenbergPalace from "../assets/Schwarzenberg-palace.jpg"

export default function Project() {
    return (
        <div className="project" >
            <h2>Latest projects</h2>
            <div className="project-container">
                <ProjectCard name="Schwarzenberg Palace" img={SchwarzenbergPalace} />
            </div>
        </div>
    )
}
