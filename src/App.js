import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/Navigation/LanguageContext";
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
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <MainScreen />
                  <About />
                  <AboutSecond />
                  <Work />
                  <Numbers />
                  <News />
                  {/* <Documents /> */}
                  <Partners />
                  <Footer />
                </>
              }
            />
            <Route path="/donate" element={<DonationPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
