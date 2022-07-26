import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Icon from "../Icon/Icon";
export default function Navbar() {
  const [burgerClass, setBurgerClass] = useState("burgerBar unClickeed");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  console.log(menuClass);
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burgerBar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burgerBar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  const scrollFunc = () => {
    if (isMenuClicked) {
      setBurgerClass("burgerBar unclicked");
      setMenuClass("menu hidden");
      setIsMenuClicked(!isMenuClicked);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  });
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
          <div className="navMobile">
            <div className="navs">
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
              <div className="burgerMenu">
                <div className={burgerClass} onClick={updateMenu}></div>
                <div className={burgerClass} onClick={updateMenu}></div>
                <div className={burgerClass} onClick={updateMenu}></div>
              </div>
            </div>
            <div className={menuClass}>
              <ul className="ulMenu">
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
              <div className="profil">
                <NavLink className="accaunt" to="/">
                  Ro‘yxatdan o‘tish →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
