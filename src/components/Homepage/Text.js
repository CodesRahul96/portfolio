import React from "react";
import "../../pages/style.css";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN STACK Developer 💻",
          "Front-End Developer 🖥️",
          "WordPress Developer 📰",
          "React Native Developer 📱",
          "Ethical Hacker 😜",
          "Freelancer 🧑‍💻",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Text;
