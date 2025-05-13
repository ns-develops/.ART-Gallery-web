import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="scrolling-text-container">
          <div className="scrolling-line" />
          <p className="scrolling-text">
            UI DESIGN MODERN ART UI DESIGN MODERN ART UI DESIGN MODERN ART
          </p>
          <div className="scrolling-line" />
        </section>
    
        <video autoPlay loop muted className="background-video">
          <source src="/videos/video2.mp4" type="video/mp4" />
    
        </video>
      </header>
    </div>
  );
}

export default App;
