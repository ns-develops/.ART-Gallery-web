import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
   
        {/* <section className="scrolling-text-container">
          <div className="scrolling-line" />
          <p className="scrolling-text">
            UI DESIGN MODERN ART UI DESIGN MODERN ART UI DESIGN MODERN ART
          </p>
          <div className="scrolling-line" />
        </section> */}

        <video
          autoPlay
          loop
          muted
          controls
          className="background-video"
          src="https://ns-develops.github.io/.ART-Gallery-web/videos/video2.mp4"
        />
   
        <div className="address">
          Flemminggatan 20, 112 26 Stockholm
        </div>
      </header>
    </div>
  );
}

export default Home;

