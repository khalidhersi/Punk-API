import React from "react";
import "./NavBar.scss";
import blackCross from "../../assets/images/black-cross.png";

const NavBar = props => {
  const { toggleMenu } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} alt="Close menu" className="nav-menu__cross" onClick={toggleMenu}/>
        <br />
        <input className="search-box" placeholder="Search.."></input>
      </div>
    </div>
  );
};

export default NavBar;