import React, { useState } from "react";
import "./App.css";
import { LanguageProvider } from "../src/components/Navigation/LanguageContext";
import MainScreen from "./components/MainScreen/MainScreen";
import DonationPage from "./components/DonationPage/DonationPage";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import AboutSecond from "./components/AboutSecond/AboutSecond";
import Work from "./components/Work/Work";
import Numbers from "./components/Numbers/Numbers";
import News from "./components/News/News";
// import Documents from './components/Documents/Documents';
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("main");

  const navigateToDonate = () => setCurrentPage("donate");
  const navigateToMain = () => setCurrentPage("main");

  return (
    <LanguageProvider>
      <div className="App">
        {currentPage === "main" && (
          <>
            <Navigation />
            <MainScreen onNavigate={navigateToDonate} />
            <About />
            <AboutSecond />
            <Work />
            <Numbers />
            <News />
            {/* <Documents /> */}
            <Partners />
            <Footer onDonateClick={navigateToDonate} />
          </>
        )}
        {currentPage === "donate" && (
          <DonationPage onNavigate={navigateToMain} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;
