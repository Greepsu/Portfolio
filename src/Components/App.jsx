import React, { useRef } from "react"

//import style
import '../styles/App.css';

//import Components
import Contact from './Contact';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Project from './Project';

function App() {

  //Define ref
  const presentationRef = useRef()
  const projectRef = useRef()
  const contactRef = useRef()

  return (
    <div className="App">
      <div className="app-container">
      <Navbar props={{ presentationRef, projectRef, contactRef }} />
      <Presentation ref={presentationRef} />
      <Project ref={projectRef} />
      <Contact ref={contactRef} />
      <div className="separator"></div>
      <div className="lift-up">
        <a href="#Home">Lift up</a>
      </div>

      </div>
    </div>
  );
}

export default App;
