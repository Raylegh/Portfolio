//Images
import logo from "../images/logo.png";
//Router
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar-right">
        <ul>
          <Navitem route="/" tittle="About Me" />
          <Navitem route="/projects" tittle="Projects" />
          <Navitem route="/contact" tittle="Contact Me" />
        </ul>
      </div>
    </nav>
  );
}

function Navitem({ route, tittle }) {
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        style={{
          color: pathname === route ? "#ffbb00" : "",
        }}
        to={route}
      >
        {tittle}
      </Link>
    </li>
  );
}

export default Navbar;
