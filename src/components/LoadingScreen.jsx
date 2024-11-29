import React, { useEffect, useState } from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = ({ onTransitionEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`loading-container ${fadeOut ? "fade-out" : ""}`}
      onAnimationEnd={fadeOut ? onTransitionEnd : null}
    >
      <div className="cube">
        <div className="side top"></div>
        <div className="side bottom"></div>
        <div className="side left"></div>
        <div className="side right"></div>
        <div className="side front"></div>
        <div className="side back"></div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingScreen;