import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Icon from "../Icon/Icon";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <nav className="nav">
            <div className="menuLinks">
              <div className="logo">
                <Link
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {" "}
                  <Icon.Logo />
                </Link>
              </div>
              <ul className="menu">
                <li>
                  <Link
                    to="/course"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Kurs haqida
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Kurs o‘quv dasturi
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    O‘quvchilar fikri{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Ustoz haqida
                  </Link>
                </li>
              </ul>
            </div>
            <div className="profil">
              <NavLink className="accaunt" to="/">
                Ro‘yxatdan o‘tish →
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
