//Images
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={logo} alt="logo" />

      <div className="navbar-right">
        <ul>
          <Navitem tittle="About Me" />
          <Navitem tittle="Projects" />
          <Navitem tittle="Contact Me" />
        </ul>
      </div>
    </nav>
  );
}

function Navitem({ tittle }) {
  return (
    <li>
      <a href="#">{tittle}</a>
    </li>
  );
}

export default Navbar;
