// App.jsx
import React, { useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize tsparticles engine
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadFull(engine);
    console.log("Particles initialized!");
  }, []);

  // Handle particles container loaded
  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  // Blue particles config
  const particlesOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      color: { value: "#3B82F6" }, // blue-500
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 4 } },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      links: {
        enable: true,
        distance: 120,
        color: "#3B82F6", // match particles
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.5 } },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`
          relative
          min-h-screen
          w-full
          max-w-full
          overflow-x-hidden
          bg-gray-800
          text-gray-100
          transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }
        `}
      >
        {/* Particles container */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
            className="w-full h-full"
          />
        </div>

        {/* Your UI in front */}
        <div className="relative z-10 w-full max-w-full">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
