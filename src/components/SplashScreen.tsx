import React, { useEffect, useState } from "react";
import nestedloopLogo from "../assets/nestedloop.png";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onFinish();
      }, 500); // Wait for fade out animation
    }, 2000); // splash duration (ms)
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img
          src={nestedloopLogo}
          alt="NestedlooP.space Logo"
          className="splash-logo"
        />
      </div>
    </div>
  );
}
