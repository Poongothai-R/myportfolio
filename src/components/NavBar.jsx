import React from "react";
 import Logo from "../assets/logo.JPG";

export default function NavBar() {
  return (
    <nav className="navbar_links">
      <a href="#home" className="big_screen">
      <img src={Logo} alt="logo with PR initial" />
        <span className="logo_title">Poongothai Rajesh</span>
      </a>
      <ul className="nav_menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#home" className="mobile_screen">
            <img src={Logo} alt="logo with PR initial" />
          </a>
        </li>
        <li>
          <a href="#tech">Tech</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
