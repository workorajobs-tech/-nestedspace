import { lazy, Suspense, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroComponent from "./components/HeroComponent";
import AnalyticsConsent from "./components/AnalyticsConsent";
import "./App.css";
import "./components/ReadableTypography.css";

const LocationWebsiteDevelopmentPage = lazy(
  () => import("./components/LocationWebsiteDevelopmentPage"),
);
const SamplesPage = lazy(() => import("./components/SamplesPage"));
const ServiceSeoLandingPage = lazy(
  () => import("./components/ServiceSeoLandingPage"),
);
const PricingPage = lazy(() => import("./components/PricingPage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const NotFoundPage = lazy(() => import("./components/NotFoundPage"));

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

function RouteScroll() {
  const location = useLocation();
  useLayoutEffect(() => {
    // Inside Suspense, this runs after the requested page is ready to render.
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);
  return null;
}

function App() {
  return (
    <div className="App has-starfield">
      <div className="main-container">
        <Header />
        <div id="main-content" tabIndex={-1}>
          <Suspense
            fallback={
              <div className="route-loading" role="status">
                Finding your space…
              </div>
            }
          >
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HeroComponent />} />
              <Route path="/samples" element={<SamplesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutPage />} />
              {locationPagePaths.map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={<LocationWebsiteDevelopmentPage pagePath={path} />}
                />
              ))}
              {servicePagePaths.map((path) => (
                <Route
                  key={path}
                  path={path}
                  element={<ServiceSeoLandingPage pagePath={path} />}
                />
              ))}
            </Routes>
            <RouteScroll />
          </Suspense>
        </div>
        <Footer />
        <AnalyticsConsent />
      </div>
    </div>
  );
}

export default App;
