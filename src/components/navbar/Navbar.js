import React, { useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick]= useState()
    const handleClick =()=>setClick(!click)
  return (
    <div className="header">
      <div className="container">
        <div className="logo"><h1>DeFi-nance</h1></div>
        <ul className={click ?"nav-menu active": "nav-menu"}>
          <li>
            {" "}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Earn</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
        <div className="btn-group">
          <button className="btn">Connect Wallet</button>
        </div>
        <div className="hamburger-icon" onClick={handleClick}>
          {click? <FaTimes /> :<FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
