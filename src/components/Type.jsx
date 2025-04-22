import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Passionate Developer",
          "Ethical Builder",
          "Basketball Lover",
          "Dog Dad",
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