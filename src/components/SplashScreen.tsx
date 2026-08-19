import React, { useEffect, useState } from "react";
import nestedloopLogo from "../assets/nestedloop-logo.png";
import "./SplashScreen.css";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
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
          alt="Nested Space Logo"
          className="splash-logo"
        />
      </div>
    </div>
  );
}
