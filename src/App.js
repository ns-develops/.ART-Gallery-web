
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Importera React Router v6
import Home from './Home';  
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/contact" element={<Contact />} />  
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

