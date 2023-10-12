import './App.css';
import MainScreen from './components/MainScreen/MainScreen';
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";


function App() {
  return (
    <div className="App">
      <Navigation />
      <MainScreen />
      <About />
    </div>
  );
}

export default App;
