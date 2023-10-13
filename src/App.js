import './App.css';
import MainScreen from './components/MainScreen/MainScreen';
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import AboutSecond from "./components/AboutSecond/AboutSecond";



function App() {
  return (
    <div className="App">
      <Navigation />
      <MainScreen />
      <About />
      <AboutSecond />
    </div>
  );
}

export default App;
