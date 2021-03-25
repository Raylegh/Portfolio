//Images
import logo from "../images/logo.png";
//Router
import { Link, useLocation } from "react-router-dom";

function Navbar({ projectClick }) {
  return (
    <nav className={`nav-bar ${projectClick !== "" ? "nav-bar-visible" : ""}`}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar-right">
        <ul>
          <Navitem route="/" tittle="About Me" isProjects={false} />
          <Navitem route="/projects" tittle="Projects" isProjects={true} />
          <Navitem route="/contact" tittle="Contact Me" isProjects={false} />
        </ul>
      </div>
    </nav>
  );
}

function Navitem({ route, tittle, isProjects }) {
  const { pathname } = useLocation();
  let projectPath = false;

  if (pathname.includes("/projects")) {
    projectPath = true;
  }

  return (
    <li>
      <Link
        style={{
          color:
            pathname === route || (projectPath && isProjects) ? "#ffbb00" : "",
        }}
        to={route}
      >
        {tittle}
      </Link>
    </li>
  );
}

export default Navbar;
