import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import HeroComponent from "./components/HeroComponent";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="App">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className="main-container">
        <Header />
        <HeroComponent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
