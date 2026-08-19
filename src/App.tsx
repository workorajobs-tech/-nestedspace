import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import HeroComponent from "./components/HeroComponent";
import LocationWebsiteDevelopmentPage from "./components/LocationWebsiteDevelopmentPage";
import SamplesPage from "./components/SamplesPage";
import { locationPageConfigs } from "./components/locationPageData";
import ServiceSeoLandingPage from "./components/ServiceSeoLandingPage";
import { servicePageConfigs } from "./components/servicePageData";
import "./App.css";

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const hasSeenSplash = window.sessionStorage.getItem("nested-space-splash-seen") === "true";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !hasSeenSplash && !prefersReducedMotion;
  });

  const finishSplash = () => {
    window.sessionStorage.setItem("nested-space-splash-seen", "true");
    setShowSplash(false);
  };

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return (
    <div className="App">
      {showSplash && <SplashScreen onFinish={finishSplash} />}
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<HeroComponent />} />
          <Route path="/samples" element={<SamplesPage />} />
          {locationPageConfigs.map((page) => (
            <Route key={page.path} path={page.path} element={<LocationWebsiteDevelopmentPage page={page} />} />
          ))}
          {servicePageConfigs.map((page) => (
            <Route key={page.path} path={page.path} element={<ServiceSeoLandingPage page={page} />} />
          ))}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
