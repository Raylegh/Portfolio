//Styles
import "./styles/app.scss";
//Pages
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
