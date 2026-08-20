import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import HeroComponent from "./components/HeroComponent";
import "./App.css";

const LocationWebsiteDevelopmentPage = lazy(() => import("./components/LocationWebsiteDevelopmentPage"));
const SamplesPage = lazy(() => import("./components/SamplesPage"));
const ServiceSeoLandingPage = lazy(() => import("./components/ServiceSeoLandingPage"));

const locationPagePaths = [
  "/website-development-kerala",
  "/website-development-kozhikode",
  "/website-development-malappuram",
  "/website-development-wayanad",
  "/website-development-kochi",
  "/website-development-ernakulam",
  "/website-development-thrissur",
  "/website-development-bangalore",
  "/website-development-hyderabad",
];

const servicePagePaths = [
  "/website-design",
  "/business-website-development",
  "/small-business-website-development",
  "/ecommerce-website-development",
  "/landing-page-development",
  "/web-development-services",
];

function App() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const hasSeenSplash = window.sessionStorage.getItem("nested-space-splash-seen") === "true";
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return location.pathname === "/" && !location.hash && !hasSeenSplash && !prefersReducedMotion;
  });

  const finishSplash = useCallback(() => {
    window.sessionStorage.setItem("nested-space-splash-seen", "true");
    setShowSplash(false);
  }, []);

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
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HeroComponent />} />
            <Route path="/samples" element={<SamplesPage />} />
            {locationPagePaths.map((path) => (
              <Route key={path} path={path} element={<LocationWebsiteDevelopmentPage pagePath={path} />} />
            ))}
            {servicePagePaths.map((path) => (
              <Route key={path} path={path} element={<ServiceSeoLandingPage pagePath={path} />} />
            ))}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
