//Images
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
//Router
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar({ projectClick, navRef }) {
  const [click, setClick] = useState(false);
  //To close menu
  const handleClick = () => {
    setClick(!click);
    navRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`nav-bar ${
        projectClick !== "" || click ? "nav-bar-visible" : ""
      }`}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul className={`nav-menu ${click ? "nav-menu-active" : ""}`}>
        <Navitem
          route="/"
          tittle="About Me"
          isProjects={false}
          setClick={setClick}
        />
        <Navitem
          route="/projects"
          tittle="Projects"
          isProjects={true}
          setClick={setClick}
        />
        <Navitem
          route="/contact"
          tittle="Contact Me"
          isProjects={false}
          setClick={setClick}
        />
      </ul>
      <div className="menu-icon" onClick={handleClick}>
        <FontAwesomeIcon
          size="2x"
          className="icon"
          icon={click ? faTimes : faBars}
        />
      </div>
    </nav>
  );
}

function Navitem({ route, tittle, isProjects, setClick }) {
  //close when swap from navs
  const closeMobileMenu = () => setClick(false);

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
        onClick={closeMobileMenu}
      >
        {tittle}
      </Link>
    </li>
  );
}

export default Navbar;
