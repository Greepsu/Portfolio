import React from 'react'

//import style
import "../styles/ProjectCard.css"

export default function ProjectCard({name, img}) {
    const bgStyle = {
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.247)',
        backgroundBlendMode: 'darken'
    }
    return (
        <div style={bgStyle} className="project-card" >
            <h3>{name}</h3>
        </div>
    )
}
