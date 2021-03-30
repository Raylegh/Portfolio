//Styles
import "./styles/app.scss";
//Style nav correciton
import ScrollTop from "./components/ScrollTop";
//Pages
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe.js";
import Projects from "./pages/Projects.js";
import ProjectsPage from "./components/Projects/CardsPage.js";
import ContactMe from "./pages/ContactMe.js";
import Bottom from "./components/Bottom";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useRef } from "react";

function App() {
  const location = useLocation();
  const [projectClick, setProjectClick] = useState("");
  const navRef = useRef(null);

  return (
    <div className="App" ref={navRef}>
      <ScrollTop />
      <Navbar projectClick={projectClick} navRef={navRef} />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/:id">
          <ProjectsPage
            projectClick={projectClick}
            setProjectClick={setProjectClick}
          />
        </Route>
        <Route path="/contact" exact>
          <ContactMe />
        </Route>
      </Switch>
      <Bottom />
    </div>
  );
}

export default App;
