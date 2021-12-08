import React from "react";

import "./NavBar.scss";

import blackCross from "../../assets/images/black-cross.png";

const NavBar = props => {
  const { toggleNav } = props;


  return (
    <div className="nav-bar">
      <div className="nav-bar__content">
        <img src={blackCross} alt="Close bar" className="nav-bar__cross" onClick={toggleNav} />
          <p className="nav-bar__item" >
            Search  For A Beer 
          </p>
          <input className="search-box" placeholder="Search.."></input>
        <p className="nav-bar__item" onClick={toggleNav}>
          Filter Beers
        </p>
      </div>
    </div>
  );
};

export default NavBar;
