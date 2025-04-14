// src/components/Type.js
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        // Strings relevant to you (Xavier Briggs)
        strings: [
          "Passionate Developer",
          "Ethical Builder",
          "Artificial Intelligence Enthusiast",
          "Loves Empowering Others",
        ],
        autoStart: true, // Start typing automatically
        loop: true, // Loop through the strings indefinitely
        deleteSpeed: 50, // Speed of deleting characters
        delay: 75, // Speed of typing characters
      }}
    />
  );
}

export default Type;