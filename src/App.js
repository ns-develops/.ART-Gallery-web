import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router basename="/.ART-Gallery-web">
      <div className="App">
       
        <div className="corner-nav">
          <div className="logo-left">Favorable.</div>

       
          <div className="middle-nav">
            <Link to="/" className="nav-link">Typewriter</Link>
            <Link to="/app" className="nav-link">American</Link>
            <Link to="/ideas" className="nav-link">Coffee</Link>
          </div>

          <Link to="/contact" className="contact-link">Contact</Link>
        </div>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
