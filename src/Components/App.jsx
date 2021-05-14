import '../styles/App.css';

//import Components
import Contact from './Contact';
import Navbar from './Navbar';
import Presentation from './Presentation';
import Project from './Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Presentation />
      <Project />
      <Contact />
      <div className="separator"></div>
      <div className="lift-up">
        <a href="#Home">Lift up</a>
      </div>
    </div>
  );
}

export default App;
