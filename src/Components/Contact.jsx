import React, { forwardRef } from 'react'

//import style
import "../styles/Contact.css"

function Contact({ props }, ref) {
    return (
        <footer className="contact" ref={ref} >
            <h2>Contact</h2>
            <div className="contact-container">
                <h3>arnaud.mgn@gmail.com</h3>
                <div>
                    <ul>
                        <li><a href="https://github.com/Greepsu">Github</a></li>
                        <li><a href="https://www.instagram.com/greepsu_/?hl=fr">Instagram</a></li>
                    </ul>
                    <p>Feel free to contact me and work together !</p>
                </div>
            </div>
        </footer>
    )
}

const forwardedContact = forwardRef(Contact);

export default forwardedContact
