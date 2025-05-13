
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Importera React Router v6
import Home from './Home';  // Importera Home-komponenten
import Contact from './Contact';  // Importera Contact-komponenten

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Lägg till en navigeringsmeny för att gå mellan sidor */}
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Definiera rutter här */}
          <Routes>
            <Route path="/" element={<Home />} />  {/* Home-sidan */}
            <Route path="/contact" element={<Contact />} />  {/* Contact-sidan */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

