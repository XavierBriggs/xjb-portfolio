// src/components/Particle.js
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Loads the slim engine
// If you need more features later, use: import { loadFull } from "tsparticles";

function Particle() {
  // Memoize the init function
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine starting...");
    // Initializes the tsParticles instance (engine) here, adding custom shapes or presets
    // You can load the slim preset bundle or create your own config
    await loadSlim(engine);
    console.log("Particles engine loaded.");
  }, []);

  // Optional: Memoize the loaded function if needed
  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles container loaded:", container);
  }, []);

  // Particle Configuration Options
  const particleOptions = {
    // background: {
    //   color: {
    //     value: "var(--nd-blue)", // Set background here OR rely on parent container's background
    //   },
    // },
    fullScreen: {
        enable: true // Set to false - particles will be bound to the container element
    },
    fpsLimit: 60, // Lower FPS limit for better performance if needed
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Push particles away on hover
        },
        onClick: {
          enable: true,
          mode: "push", // Add particles on click
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // Number of particles added on click
        },
        repulse: {
          distance: 150, // How far particles are pushed
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Particle color (ND White)
      },
    //   links: { // Optional: lines connecting particles
    //     color: "#ffffff",
    //     distance: 150,
    //     enable: true,
    //     opacity: 0.3,
    //     width: 1,
    //   },
      collisions: {
          enable: false, // Disable collisions for smoother flow
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out", // Particles leave the canvas edges
        },
        random: true, // Random movement direction
        speed: 0.5, // Movement speed (adjust as desired)
        straight: false, // Particles move in non-straight paths
      },
      number: {
        density: {
          enable: true,
          area: 800, // Adjust density based on container size
        },
        value: 80, // Base number of particles
      },
      opacity: {
        value: { min: 0.1, max: 0.5 }, // Random opacity
         animation: { // Optional: fading animation
             enable: true,
             speed: 0.5,
             sync: false,
             minimumValue: 0.1
         }
      },
      shape: {
        type: "circle", // Particle shape
      },
      size: {
        value: { min: 1, max: 3 }, // Random particle size
      },
    },
    detectRetina: true, // Improves rendering on high-DPI screens
    style: { // Ensure particles are behind other content
        position: 'absolute', // Position absolutely within the container
        // zIndex: -1 // Send particles behind other elements in the container
    }
  };

  return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        // Optional: Add className for further CSS targeting
        // className="particle-canvas"
        // Height and width are controlled by the container element
      />
  );
}

export default Particle;