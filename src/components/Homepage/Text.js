import React from "react";
import "../../pages/style.css";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front-End Developer 🧑‍💻",
          "MERN STACK Developer 💻",
          "React Native Developer 📱",
          "WordPress Developer 📰",
          "Freelancer 🧑‍💼",
          "Hardware and Network Engineer 🖥️",
          "Ethical Hacker 😜",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Text;
