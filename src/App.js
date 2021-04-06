//Styles
import "./styles/app.scss";
//Style nav correciton
import ScrollTop from "./components/ScrollTop";
//Pages
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe.js";
import Projects from "./pages/Projects.js";
import CardsPage from "./components/Projects/CardsPage.js";
import ContactMe from "./pages/ContactMe.js";
import Bottom from "./components/Bottom";
import LoadingScreen from "./components/LoadingScreen";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

function App() {
  const location = useLocation();
  //Nav Status
  const [projectClick, setProjectClick] = useState("");
  const navRef = useRef(null);
  //Dark Mode
  const [darkMode, setDarkMode] = useState(true);
  //Loading Screen
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className={`body ${darkMode ? "dark-mode" : "light-mode"}`}
      ref={navRef}
    >
      <LoadingScreen isLoading={isLoading} />
      <ScrollTop />
      {!isLoading && (
        <Navbar
          projectClick={projectClick}
          navRef={navRef}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
      )}
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutMe darkMode={darkMode} />
        </Route>
        <Route path="/projects" exact>
          <Projects isLoading={isLoading} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/projects/:id">
          <CardsPage
            projectClick={projectClick}
            setProjectClick={setProjectClick}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        </Route>
        <Route path="/contact" exact>
          <ContactMe />
        </Route>
      </Switch>
      {!isLoading && <Bottom />}
    </div>
  );
}

export default App;
