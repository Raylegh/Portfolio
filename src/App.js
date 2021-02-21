//Styles
import "./styles/app.scss";
//Pages
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe.js";
//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
