import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };
  return (
    <section>
      <header className="header">
        <ul className={`menu ${menuActive ? "active" : ""}`}>
          <li>
            <Link to='home'>
              <a className="menu-item" href="#" onClick={closeMenu}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to={"about"}>
              <a className="menu-item" href="#" onClick={closeMenu}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link to="contact">
              <a className="menu-item" href="#" onClick={closeMenu}>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <a className="menu-item" href="#" onClick={closeMenu}>
              Register
            </a>
          </li>
        </ul>
        <div className="burger__icon" onClick={toggleMenu}>
          <i className="fa fa-2x fa-bars"></i>
        </div>
      </header>
    </section>
  );
};

export default Header;
