import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experiance from "./Components/Experience";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      
      <SocialLinks/>
    </div>
  );
}

export default App;
