import React from "react";
import "./NavBar.scss";
import blackCross from "../../assets/images/black-cross.png";

const NavBar = props => {
  const { toggleBar } = props;

  return (
    <div className="nav-bar">
      <div className="nav-bar__content">
        <img src={blackCross} alt="Close bar" className="nav-bar__cross" onClick={toggleBar}/>
        <br />
        <input className="search-box" placeholder="Search.."></input>
      </div>
    </div>
  );
};

export default NavBar;