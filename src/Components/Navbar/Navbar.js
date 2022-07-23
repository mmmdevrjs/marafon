import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../Icon/Icon";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <nav className="nav">
            <div className="menuLinks">
              <div className="logo">
                <NavLink to="/">
                  <Icon.Logo />
                </NavLink>
              </div>
              <ul className="menu">
                <li>
                  <NavLink to="/course">Kurs haqida</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Kurs o‘quv dasturi</NavLink>
                </li>
                <li>
                  <NavLink to="/design">O‘quvchilar fikri </NavLink>
                </li>
                <li>
                  <NavLink to="/design">Ustoz haqida</NavLink>
                </li>
              </ul>
            </div>
            <div className="profil">
              <NavLink className="accaunt" to="/">
                Tizimga kirish →
              </NavLink>
              <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
