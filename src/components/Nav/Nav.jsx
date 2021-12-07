import React, { useState } from "react";
import menu from "../../assets/images/menu-icon.png";
import settings from "../../assets/images/settings-icon.png";
import "./Nav.scss";

import NavBar from "../NavBar/NavBar";

const Nav = props => {
  const [showNav, setShowNav] = useState(false);



  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      {showNav && <NavBar toggleNav={toggleNav} />}
      <img src={menu} className="nav__item nav__item--menu" alt="menu icon" onClick={toggleNav} />
      <h2 className="nav__heading">Punk API</h2>
      <img src={settings} className="nav__item" alt="settings icon"  />
    </nav>
  );
};

export default Nav;
