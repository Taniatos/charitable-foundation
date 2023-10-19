import './App.css';
import MainScreen from './components/MainScreen/MainScreen';
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import AboutSecond from "./components/AboutSecond/AboutSecond";
import Work from "./components/Work/Work";
import Numbers from "./components/Numbers/Numbers";
import Blank from "./components/Blank/Blank";





function App() {
  return (
    <div className="App">
      <Navigation />
      <MainScreen />
      <About />
      <AboutSecond />
      <Work />
      {/* <Blank /> */}
      <Numbers />
      {/* <Blank /> */}
    </div>
  );
}

export default App;
