import React, { useEffect, useState } from "react";
import nestedSpaceLogo from "../assets/nested-space-logo.png";
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
          src={nestedSpaceLogo}
          alt="Nested Space logo"
          className="splash-logo"
          width="512"
          height="341"
        />
      </div>
    </div>
  );
}
