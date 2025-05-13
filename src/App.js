import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">

      
        <div className="corner-nav">
          <div className="logo-left">Favorable.</div>
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
