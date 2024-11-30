import { useState, useEffect } from "react";
import "./TextAnimation.css";

const TextAnimation = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Schedule", "Monitor", "Analyse"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="text-container">
      {words.map((word, index) => (
        <div
          key={index}
          className={`word ${index === currentWord ? "slide-in" : "slide-out"}`}
        >
          <h1 className=" text-8xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            {word}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default TextAnimation;
