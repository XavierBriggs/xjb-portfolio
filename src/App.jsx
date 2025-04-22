import React from 'react';
import NavBarOffCanvas from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import './styles/App.css';
import Footer from "./components/Footer";
import Particle from './components/Particle';


function App() {
  return (
      <Router>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
              <Particle />
              <NavBarOffCanvas />
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route
                      path="/Projects" element={<Projects />}
                  />
                  <Route path="/Resume" element={<Resume />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;