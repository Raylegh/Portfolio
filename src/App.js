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

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <ScrollTop />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <AboutMe />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/:id">
          <ProjectsPage />
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
