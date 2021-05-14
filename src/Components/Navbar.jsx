import React from 'react'

//import styles
import "../styles/Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar" >
                <div className="navbar-logo">
                    <span>M</span>
                </div>
                <ul className="navbar-links">
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="Contacts">Contacts</a></li>
                </ul>
        </div>
    )
}
